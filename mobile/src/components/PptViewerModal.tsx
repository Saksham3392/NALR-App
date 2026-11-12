import React, { useState, useMemo, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';
import { PPT_MANIFEST, PPTItem } from '../data/pptManifest';
import { NativePdfReader } from './NativePdfReader';

interface PptViewerModalProps {
  visible: boolean;
  onClose: () => void;
  selectedTopicKey?: string;
}

export const PptViewerModal: React.FC<PptViewerModalProps> = ({
  visible,
  onClose,
  selectedTopicKey,
}) => {
  const insets = useSafeAreaInsets();
  const { colors, activeModuleId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeck, setSelectedDeck] = useState<{ topicKey: string; deck: PPTItem } | null>(null);

  useEffect(() => {
    if (visible && selectedTopicKey && PPT_MANIFEST[selectedTopicKey]) {
      setSelectedDeck({ topicKey: selectedTopicKey, deck: PPT_MANIFEST[selectedTopicKey] });
    } else if (!visible) {
      setSelectedDeck(null);
    }
  }, [visible, selectedTopicKey]);

  const manifestEntries = useMemo(() => {
    const entries = Object.entries(PPT_MANIFEST);
    if (!searchQuery.trim()) return entries;
    const q = searchQuery.toLowerCase().trim();
    return entries.filter(([key, deck]) => {
      return (
        deck.title.toLowerCase().includes(q) ||
        deck.fileName.toLowerCase().includes(q) ||
        key.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const handleOpenDeck = (topicKey: string, deck: PPTItem) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setSelectedDeck({ topicKey, deck });
  };

  const handleDismiss = () => {
    if (selectedDeck) {
      setSelectedDeck(null);
    } else {
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false} onRequestClose={handleDismiss}>
      <View
        style={[
          styles.safeArea,
          {
            backgroundColor: colors.appBg,
            paddingTop: Math.max(insets.top, 24),
            paddingBottom: Math.max(insets.bottom, 16),
          },
        ]}
      >
        {selectedDeck ? (
          /* ==================== IN-APP NATIVE PDF VIEWER ==================== */
          <NativePdfReader
            deck={selectedDeck.deck}
            topicKey={selectedDeck.topicKey}
            onBack={() => setSelectedDeck(null)}
            colors={colors}
          />
        ) : (
          /* ==================== SLIDE DECKS BROWSER ==================== */
          <View style={styles.flexOne}>
            {/* Navigation Bar */}
            <View style={[styles.navBar, { backgroundColor: colors.cardBg, borderBottomColor: colors.border }]}>
              <View style={styles.titleGroup}>
                <View style={[styles.pptLogo, { backgroundColor: colors.orange }]}>
                  <Text style={styles.pptLogoText}>P</Text>
                </View>
                <View>
                  <Text style={[styles.navTitle, { color: colors.textPrimary }]}>
                    Lecture Slide Decks
                  </Text>
                  <Text style={[styles.navSubtitle, { color: colors.textSecondary }]}>
                    {Object.keys(PPT_MANIFEST).length} Native PDF Decks
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  try {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  } catch {}
                  onClose();
                }}
                style={[styles.closeBtn, { backgroundColor: colors.cardSubBg }]}
              >
                <Text style={[styles.closeText, { color: colors.textPrimary }]}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={[styles.searchContainer, { backgroundColor: colors.cardBg }]}>
              <View style={[styles.searchBox, { backgroundColor: colors.cardSubBg }]}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Search slide decks by topic..."
                  placeholderTextColor={colors.textMuted}
                  style={[styles.searchInput, { color: colors.textPrimary }]}
                  clearButtonMode="while-editing"
                />
                {searchQuery.length > 0 ? (
                  <TouchableOpacity onPress={() => setSearchQuery('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Text style={[styles.clearSearchIcon, { color: colors.textMuted }]}>✕</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>
              {/* Info Banner */}
              <View style={[styles.infoCard, { backgroundColor: colors.orangeLight, borderColor: colors.orangeBorder }]}>
                <Text style={[styles.infoTag, { color: colors.orange }]}>IN-APP VECTOR PDF READER</Text>
                <Text style={[styles.infoDesc, { color: colors.textPrimary }]}>
                  Lecture presentations render natively inside NALR with vertical scrolling, pinch-to-zoom, and offline caching.
                </Text>
              </View>

              {/* List of Presentations */}
              <View style={styles.decksList}>
                {manifestEntries.map(([topicKey, deck]) => {
                  const isCurrentActive = topicKey === activeModuleId;

                  return (
                    <TouchableOpacity
                      key={topicKey}
                      activeOpacity={0.8}
                      onPress={() => handleOpenDeck(topicKey, deck)}
                      style={[
                        styles.deckCard,
                        {
                          backgroundColor: colors.cardBg,
                          borderColor: isCurrentActive ? colors.orange : colors.border,
                          borderWidth: isCurrentActive ? 1.5 : 1,
                        },
                      ]}
                    >
                      <View style={styles.deckLeft}>
                        <View style={[styles.deckIcon, { backgroundColor: colors.orangeLight }]}>
                          <Text style={[styles.deckIconText, { color: colors.orange }]}>PDF</Text>
                        </View>
                        <View style={styles.deckInfo}>
                          <Text style={[styles.deckTitle, { color: colors.textPrimary }]} numberOfLines={1}>
                            {deck.title}
                          </Text>
                          <Text style={[styles.deckMeta, { color: colors.textSecondary }]}>
                            {deck.slideCount} Slides • {deck.fileName}
                          </Text>
                        </View>
                      </View>

                      <View style={[styles.openBtn, { backgroundColor: colors.cardSubBg }]}>
                        <Text style={[styles.openBtnText, { color: colors.orange }]}>View Slides →</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  pptLogo: {
    width: 28,
    height: 28,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pptLogoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  navTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  navSubtitle: {
    fontSize: 11,
    fontWeight: '500',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 14,
    fontWeight: '700',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 8,
  },
  searchIcon: {
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 2,
  },
  clearSearchIcon: {
    fontSize: 14,
    paddingHorizontal: 4,
  },
  scrollBody: {
    padding: 16,
    gap: 12,
  },
  infoCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },
  infoTag: {
    fontSize: 10.5,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  infoDesc: {
    fontSize: 12.5,
    lineHeight: 18,
    fontWeight: '500',
  },
  decksList: {
    gap: 10,
  },
  deckCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 14,
    gap: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  deckLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  deckIcon: {
    width: 36,
    height: 36,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckIconText: {
    fontSize: 11,
    fontWeight: '900',
  },
  deckInfo: {
    flex: 1,
    gap: 2,
  },
  deckTitle: {
    fontSize: 13.5,
    fontWeight: '700',
  },
  deckMeta: {
    fontSize: 11,
    fontWeight: '500',
  },
  openBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  openBtnText: {
    fontSize: 11.5,
    fontWeight: '700',
  },
});
