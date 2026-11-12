# 📱 NALR — Android Mobile Application
**Course**: Numerical Aptitude & Logical Reasoning-I (`25UNI0110`) — Chitkara University  
**Technology**: React Native, Expo (SDK 58), TypeScript, AsyncStorage

---

## 🚀 How to Run on Android

### Prerequisites
- Node.js (v20+)
- Android device with **Expo Go** app installed from Google Play Store (or Android Studio Emulator on your PC)

### 1. Launch Expo Development Server
Navigate into the `mobile` directory and run:

```bash
cd mobile
npm start
```

### 2. Run on Physical Android Phone
1. Open the **Expo Go** app on your Android device.
2. Scan the **QR Code** displayed in your terminal.
3. The app will bundle and run directly on your phone with native gestures, haptics, and instant state persistence.

### 3. Run on Android Studio Emulator
Press `a` in your terminal or run:
```bash
npm run android
```

---

## 🌟 Implemented Features

1. **Complete 3-Term Syllabus Navigation**: Switch between **ST-1** (17 Modules, 753 verified questions), **ST-2** (11 Modules, 57 verified questions), and **End Term** (14 Modules outline) via the top switcher capsule.
2. **Original Question Bank (810 Questions)**: 100% verified question statements, options, exact matching answer keys, and step-by-step explanations preserved with zero data invention.
3. **Problem-Solving Subtabs**: Each module is broken down into specific pedagogical subtabs (e.g. Blood Relation Type 1, 2, 3) with question counts.
4. **Instant In-Place Tactile Feedback**: Emerald green highlight on correct choice + success haptic, crimson red on incorrect choice + error haptic + emerald eye-guiding pulse on the true answer.
5. **Interactive Diagrammatic Visualizers**: Dedicated SVG and schematic models for Blood Relation family trees, Cartesian coordinate trajectories with 8-point compass HUD, Average seesaws, Euler-Venn diagrams, and Alligation crosses.
6. **Custom Examination Simulation**: Timed examinations with topic selection, live countdown timer, question palette, previous/next buttons, score roll percentage, and a full question review list with derivations.
7. **Personalized Daily Study Planner**: Target exam date presets (+7d, +14d, +21d, +30d), automatic task distribution, day-by-day interactive checklist, and click-to-practice routing (`Practice →`).
8. **Bookmarking & Review System**: Instant `[ ★ Review ]` toggle on questions, live counter in header, and one-click `[ ★ Flagged Only ]` filter.
9. **Persistent Local Storage**: Built on `@react-native-async-storage/async-storage` for completely offline access to all questions, bookmarks, and planner schedules.
10. **Apple Glass & Warm Sand Visual Design**: Light mode (`#FAF8F5`) and Dark mode (`#07090E`) pairing based on Stitch design specifications.
11. **Official Slide Presentations**: Access to all 21 vector lecture decks with slide counts and topics.
