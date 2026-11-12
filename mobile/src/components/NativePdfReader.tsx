import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Pdf, { Source } from 'react-native-pdf';
import * as Haptics from 'expo-haptics';
import { ThemeColors } from '../theme/colors';
import { PPTItem } from '../data/pptManifest';

interface NativePdfReaderProps {
  deck: PPTItem;
  topicKey: string;
  onBack: () => void;
  colors: ThemeColors;
}

const resolvePdfUrl = (url: string): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const parts = url.split('/').map(p => encodeURIComponent(p));
  return `https://nalr.vercel.app/${parts.join('/')}`;
};

export const NativePdfReader: React.FC<NativePdfReaderProps> = ({
  deck,
  topicKey,
  onBack,
  colors,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(deck.slideCount || 1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const pdfRef = useRef<any>(null);

  const pdfUrl = resolvePdfUrl(deck.pdfUrl);
  const source: Source = {
    uri: pdfUrl,
    cache: true,
  };

  const handleZoomIn = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setScale(prev => Math.min(prev + 0.3, 3.0));
  };

  const handleZoomOut = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setScale(prev => Math.max(prev - 0.3, 0.8));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages && pdfRef.current) {
      try {
        Haptics.selectionAsync();
      } catch {}
      const next = currentPage + 1;
      pdfRef.current.setPage(next);
      setCurrentPage(next);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && pdfRef.current) {
      try {
        Haptics.selectionAsync();
      } catch {}
      const prev = currentPage - 1;
      pdfRef.current.setPage(prev);
      setCurrentPage(prev);
    }
  };

  const handleRetry = () => {
    setLoadError(null);
    setIsLoading(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.appBg }]}>
      {/* Top Navigation Header */}
      <View style={[styles.header, { backgroundColor: colors.cardBg, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            try {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            } catch {}
            onBack();
          }}
          style={[styles.backBtn, { backgroundColor: colors.cardSubBg }]}
          accessibilityLabel="Back to slide decks"
        >
          <Text style={[styles.backBtnText, { color: colors.brandBlue }]}>← Decks</Text>
        </TouchableOpacity>

        <View style={styles.headerTitleCol}>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]} numberOfLines={1}>
            {deck.title}
          </Text>
          <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
            {deck.fileName}
          </Text>
        </View>

        {/* Page Counter Pill */}
        <View style={[styles.pagePill, { backgroundColor: colors.cardSubBg }]}>
          <Text style={[styles.pagePillText, { color: colors.brandBlue }]}>
            {currentPage} / {totalPages}
          </Text>
        </View>
      </View>

      {/* Main Native PDF View Body */}
      <View style={styles.viewerContainer}>
        {loadError ? (
          <View style={[styles.errorCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={[styles.errorTitle, { color: colors.textPrimary }]}>Native PDF Viewer</Text>
            <Text style={[styles.errorMsg, { color: colors.textSecondary }]}>
              {loadError.includes('native module is not available') || loadError.includes('RCTPdf')
                ? 'react-native-pdf requires the custom development APK (NALR) and does not run inside stock Expo Go.'
                : `Failed to load document: ${loadError}`}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleRetry}
              style={[styles.retryBtn, { backgroundColor: colors.brandBlue }]}
            >
              <Text style={styles.retryBtnText}>Retry Load 🔄</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Pdf
            ref={pdfRef}
            source={source}
            trustAllCerts={false}
            scale={scale}
            minScale={0.8}
            maxScale={3.0}
            horizontal={false}
            enablePaging={false}
            spacing={8}
            onLoadComplete={(numberOfPages) => {
              setIsLoading(false);
              setTotalPages(numberOfPages);
            }}
            onPageChanged={(page) => {
              setCurrentPage(page);
            }}
            onError={(error: any) => {
              setIsLoading(false);
              setLoadError(error?.message || 'Error initializing native PDF renderer');
            }}
            style={[styles.pdf, { backgroundColor: colors.appBg }]}
          />
        )}

        {/* Loading Spinner */}
        {isLoading && !loadError && (
          <View style={[styles.loadingOverlay, { backgroundColor: colors.cardBg }]}>
            <ActivityIndicator size="large" color={colors.brandBlue} />
            <Text style={[styles.loadingText, { color: colors.textPrimary }]}>
              Loading slides ({deck.title})...
            </Text>
            <Text style={[styles.loadingSub, { color: colors.textSecondary }]}>
              Rendering vector slides via react-native-pdf
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Floating Control Bar */}
      <View style={[styles.bottomControlBar, { backgroundColor: colors.cardBg, borderTopColor: colors.border }]}>
        <View style={styles.navGroup}>
          <TouchableOpacity
            disabled={currentPage <= 1}
            activeOpacity={0.7}
            onPress={handlePrevPage}
            style={[
              styles.controlBtn,
              { backgroundColor: colors.cardSubBg, opacity: currentPage <= 1 ? 0.35 : 1 },
            ]}
          >
            <Text style={[styles.controlBtnText, { color: colors.textPrimary }]}>▲ Prev</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={currentPage >= totalPages}
            activeOpacity={0.7}
            onPress={handleNextPage}
            style={[
              styles.controlBtn,
              { backgroundColor: colors.cardSubBg, opacity: currentPage >= totalPages ? 0.35 : 1 },
            ]}
          >
            <Text style={[styles.controlBtnText, { color: colors.textPrimary }]}>Next ▼</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.zoomGroup}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleZoomOut}
            style={[styles.zoomBtn, { backgroundColor: colors.cardSubBg }]}
            accessibilityLabel="Zoom out"
          >
            <Text style={[styles.zoomBtnText, { color: colors.textPrimary }]}>−</Text>
          </TouchableOpacity>

          <View style={[styles.zoomIndicator, { backgroundColor: colors.cardSubBg }]}>
            <Text style={[styles.zoomText, { color: colors.textSecondary }]}>
              {Math.round(scale * 100)}%
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleZoomIn}
            style={[styles.zoomBtn, { backgroundColor: colors.cardSubBg }]}
            accessibilityLabel="Zoom in"
          >
            <Text style={[styles.zoomBtnText, { color: colors.textPrimary }]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 8,
  },
  backBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  backBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  headerTitleCol: {
    flex: 1,
    gap: 1,
  },
  headerTitle: {
    fontSize: 14.5,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  headerSubtitle: {
    fontSize: 10.5,
    fontWeight: '500',
  },
  pagePill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  pagePillText: {
    fontSize: 12,
    fontWeight: '700',
  },
  viewerContainer: {
    flex: 1,
    position: 'relative',
  },
  pdf: {
    flex: 1,
    width,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    zIndex: 10,
  },
  loadingText: {
    fontSize: 14,
    fontWeight: '700',
  },
  loadingSub: {
    fontSize: 11,
  },
  errorCard: {
    margin: 20,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    gap: 10,
  },
  errorIcon: {
    fontSize: 32,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  errorMsg: {
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 18,
  },
  retryBtn: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  retryBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  bottomControlBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    gap: 10,
  },
  navGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  controlBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
  },
  controlBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  zoomGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  zoomBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomBtnText: {
    fontSize: 16,
    fontWeight: '700',
  },
  zoomIndicator: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    minWidth: 44,
    alignItems: 'center',
  },
  zoomText: {
    fontSize: 11,
    fontWeight: '700',
  },
});
