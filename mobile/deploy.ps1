# One-step build and deploy to connected Android phone over USB
param(
    [switch]$SkipBundle
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
$mobileDir = "$projectRoot\mobile"
$adb = "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe"
$zipalign = (Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\build-tools" -Filter "zipalign.exe" -Recurse | Select-Object -First 1).FullName
$apksigner = (Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\build-tools" -Filter "apksigner.bat" -Recurse | Select-Object -First 1).FullName
$aapt2 = (Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk\build-tools" -Filter "aapt2.exe" -Recurse | Select-Object -First 1).FullName
$keystore = "$mobileDir\android\app\debug.keystore"
$distDir = "$mobileDir\dist"
$targetApk = "$distDir\NALR.apk"
$bundleFile = "$distDir\index.android.bundle"

Write-Host "==> Checking connected device..." -ForegroundColor Cyan
$device = (& $adb devices | Select-String "device$" | Select-Object -First 1)
if (-not $device) {
    Write-Error "No authorized Android device found! Ensure USB cable is plugged in and USB debugging is enabled."
}
Write-Host "Device found: $device" -ForegroundColor Green

if (-not $SkipBundle) {
    Write-Host "==> Bundling updated React Native / TypeScript code (Hermes bytecode)..." -ForegroundColor Cyan
    Push-Location $mobileDir
    npx expo export:embed --entry-file index.ts --platform android --dev false --bytecode --bundle-output dist/index.android.bundle --assets-dest dist/
    Pop-Location
}

Write-Host "==> Packaging complete APK..." -ForegroundColor Cyan
$protoAp = "$mobileDir\android\app\build\intermediates\linked_resources_proto_format\release\processReleaseResources\linked-resources-proto-format-release.ap_"
if (Test-Path $protoAp) {
    & $aapt2 convert --output-format binary -o "$distDir\binary-res.apk" "$protoAp"
}

python -c @"
import zipfile, os

src_apk = r'$targetApk'
res_apk = r'$distDir\binary-res.apk'
bundle_file = r'$bundleFile'
temp_unaligned = r'$distDir\app-unaligned.apk'

with open(bundle_file, 'rb') as f:
    bundle_data = f.read()

with zipfile.ZipFile(temp_unaligned, 'w') as zout:
    if os.path.exists(res_apk):
        with zipfile.ZipFile(res_apk, 'r') as zres:
            for item in zres.infolist():
                data = zres.read(item.filename)
                zinfo = zipfile.ZipInfo(filename=item.filename, date_time=item.date_time)
                if item.filename == 'resources.arsc':
                    zinfo.compress_type = zipfile.ZIP_STORED
                else:
                    zinfo.compress_type = item.compress_type
                zout.writestr(zinfo, data)

    with zipfile.ZipFile(src_apk, 'r') as zin:
        for item in zin.infolist():
            if item.filename.startswith('META-INF/') and item.filename.split('/')[-1].split('.')[-1].upper() in ('SF', 'RSA', 'DSA', 'EC', 'MF'):
                continue
            if os.path.exists(res_apk) and (item.filename.startswith('res/') or item.filename in ('AndroidManifest.xml', 'resources.arsc')):
                continue
            if item.filename == 'assets/index.android.bundle':
                zinfo = zipfile.ZipInfo(filename='assets/index.android.bundle', date_time=item.date_time)
                zinfo.compress_type = zipfile.ZIP_STORED
                zout.writestr(zinfo, bundle_data)
            else:
                data = zin.read(item.filename)
                zinfo = zipfile.ZipInfo(filename=item.filename, date_time=item.date_time)
                zinfo.compress_type = item.compress_type
                zout.writestr(zinfo, data)
"@

if (Test-Path "$distDir\binary-res.apk") {
    Remove-Item -Force "$distDir\binary-res.apk"
}

Write-Host "==> Aligning and signing APK..." -ForegroundColor Cyan
& $zipalign -f -p 4 "$distDir\app-unaligned.apk" "$distDir\app-aligned.apk"
& $apksigner sign --ks "$keystore" --ks-pass pass:android --ks-key-alias androiddebugkey --key-pass pass:android "$distDir\app-aligned.apk"

Move-Item -Force "$distDir\app-aligned.apk" "$targetApk"
Remove-Item -Force "$distDir\app-unaligned.apk"

Write-Host "==> Installing updated APK to phone..." -ForegroundColor Cyan
& $adb install -r "$targetApk"

Write-Host "==> Restarting app on phone..." -ForegroundColor Cyan
& $adb shell am force-stop com.nalr.masterclass
& $adb shell am start -n com.nalr.masterclass/.MainActivity

Write-Host "Done! App updated and running successfully." -ForegroundColor Green
