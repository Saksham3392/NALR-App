import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ visible, onClose }) => {
  const insets = useSafeAreaInsets();
  const {
    isDarkMode,
    toggleTheme,
    colors,
    totalAnsweredCount,
    totalCorrectCount,
    bookmarkedCount,
    clearAllAnswers,
    resetAllProgress,
    showGlassConfirm,
  } = useApp();

  const handleClearAll = async () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {}
    const confirmed = await showGlassConfirm({
      title: 'Clear All Answers',
      message: 'Are you sure you want to clear all your practice answers? Your bookmarks and study plan will be kept.',
      confirmText: 'Clear All',
      cancelText: 'Cancel',
      isDestructive: true,
      icon: 'broom',
    });
    if (confirmed) {
      await clearAllAnswers();
    }
  };

  const handleReset = async () => {
    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } catch {}
    const confirmed = await showGlassConfirm({
      title: 'Reset All Progress',
      message: 'This will reset all your answered questions, bookmarks, and study plan. Are you sure you want to reset everything?',
      confirmText: 'Reset Progress',
      cancelText: 'Cancel',
      isDestructive: true,
      icon: 'reset',
    });
    if (confirmed) {
      await resetAllProgress();
      onClose();
    }
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={[
            styles.backdrop,
            { backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.04)' },
          ]}
        >
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View
              style={[
                styles.sheetContainer,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                  paddingBottom: Math.max(insets.bottom, 16),
                },
              ]}
            >
              {/* Grabber Handle */}
              <View style={styles.handleWrapper}>
                <View style={[styles.handleBar, { backgroundColor: colors.border }]} />
              </View>

              {/* Navigation Header */}
              <View style={[styles.navBar, { borderBottomColor: colors.borderSubtle }]}>
                <Text style={[styles.navTitle, { color: colors.textPrimary }]}>Settings</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    try {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    } catch {}
                    onClose();
                  }}
                  style={[styles.doneBtn, { backgroundColor: colors.brandBlueLight }]}
                >
                  <Text style={[styles.doneBtnText, { color: colors.brandBlue }]}>Done</Text>
                </TouchableOpacity>
              </View>

              {/* Scrollable Content inside compact sheet */}
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                {/* Section 1: Appearance */}
                <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>APPEARANCE</Text>
                <View style={[styles.cardGroup, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}>
                  <View style={styles.settingRow}>
                    <Text style={[styles.settingTitle, { color: colors.textPrimary }]}>Dark Mode</Text>
                    <Switch
                      value={isDarkMode}
                      onValueChange={() => {
                        try {
                          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        } catch {}
                        toggleTheme();
                      }}
                      trackColor={{ false: colors.cardHover, true: colors.brandBlue }}
                      thumbColor="#FFFFFF"
                    />
                  </View>
                </View>

                {/* Section 2: Study Statistics */}
                <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>STUDY STATS</Text>
                <View style={[styles.cardGroup, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}>
                  <View style={styles.statsGrid}>
                    <View style={styles.statItem}>
                      <Text style={[styles.statValue, { color: colors.brandBlue }]}>{totalAnsweredCount}</Text>
                      <Text style={[styles.statCaption, { color: colors.textSecondary }]}>Answered</Text>
                    </View>
                    <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
                    <View style={styles.statItem}>
                      <Text style={[styles.statValue, { color: colors.emerald }]}>{totalCorrectCount}</Text>
                      <Text style={[styles.statCaption, { color: colors.textSecondary }]}>Correct</Text>
                    </View>
                    <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
                    <View style={styles.statItem}>
                      <Text style={[styles.statValue, { color: colors.amber }]}>{bookmarkedCount}</Text>
                      <Text style={[styles.statCaption, { color: colors.textSecondary }]}>Flagged</Text>
                    </View>
                  </View>
                </View>

                {/* Section 3: Data Management (Destructive Operations) */}
                <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>DATA MANAGEMENT</Text>
                <View style={[styles.cardGroup, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleClearAll}
                    style={styles.actionRow}
                  >
                    <Text style={[styles.actionTitle, { color: colors.textPrimary }]}>Clear Practice Answers</Text>
                    <Text style={[styles.actionChevron, { color: colors.textSecondary }]}>›</Text>
                  </TouchableOpacity>

                  <View style={[styles.innerDivider, { backgroundColor: colors.borderSubtle }]} />

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleReset}
                    style={styles.actionRow}
                  >
                    <Text style={[styles.actionTitleDestructive, { color: colors.crimson }]}>Reset All Progress</Text>
                    <Text style={[styles.actionChevron, { color: colors.crimson }]}>›</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.footerNote}>
                  <Text style={[styles.footerText, { color: colors.textMuted }]}>
                    NALR
                  </Text>
                </View>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    maxHeight: '62%',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 10,
    overflow: 'hidden',
  },
  handleWrapper: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 4,
  },
  handleBar: {
    width: 38,
    height: 4.5,
    borderRadius: 2.5,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  navTitle: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  doneBtn: {
    paddingHorizontal: 14,
    paddingVertical: 5.5,
    borderRadius: 999,
  },
  doneBtnText: {
    fontSize: 13.5,
    fontWeight: '700',
  },
  scrollView: {
    flexShrink: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 14,
    gap: 8,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginTop: 8,
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  cardGroup: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  settingTitle: {
    fontSize: 14.5,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  statsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  statCaption: {
    fontSize: 10.5,
    fontWeight: '600',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 26,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  actionTitleDestructive: {
    fontSize: 14,
    fontWeight: '600',
  },
  actionChevron: {
    fontSize: 18,
    fontWeight: '600',
  },
  innerDivider: {
    height: 1,
    marginHorizontal: 14,
  },
  footerNote: {
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
