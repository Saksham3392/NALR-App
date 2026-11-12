import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';

interface QuickActionsGridProps {
  onOpenExam: () => void;
  onOpenPlanner: () => void;
  onOpenPpt: () => void;
}

export const QuickActionsGrid: React.FC<QuickActionsGridProps> = ({
  onOpenExam,
  onOpenPlanner,
  onOpenPpt,
}) => {
  const {
    colors,
    bookmarkedCount,
    showFlaggedOnly,
    setShowFlaggedOnly,
    clearAllAnswers,
    showGlassConfirm,
  } = useApp();

  const handleToggleFlagged = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setShowFlaggedOnly(!showFlaggedOnly);
  };

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

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
      {/* Primary Feature Actions: Exam, Planner, PPts */}
      <View style={styles.primaryRow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            try {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            } catch {}
            onOpenExam();
          }}
          style={[
            styles.actionCard,
            { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle },
          ]}
        >
          <View style={[styles.iconCircle, { backgroundColor: colors.brandBlueLight }]}>
            <Text style={[styles.iconText, { color: colors.brandBlue }]}>📝</Text>
          </View>
          <Text style={[styles.cardTitle, { color: colors.textPrimary }]} numberOfLines={1}>
            Exam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            try {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            } catch {}
            onOpenPlanner();
          }}
          style={[
            styles.actionCard,
            { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle },
          ]}
        >
          <View style={[styles.iconCircle, { backgroundColor: colors.brandBlueLight }]}>
            <Text style={[styles.iconText, { color: colors.brandBlue }]}>📅</Text>
          </View>
          <Text style={[styles.cardTitle, { color: colors.textPrimary }]} numberOfLines={1}>
            Planner
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            try {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            } catch {}
            onOpenPpt();
          }}
          style={[
            styles.actionCard,
            { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle },
          ]}
        >
          <View style={[styles.iconCircle, { backgroundColor: colors.brandBlueLight }]}>
            <Text style={[styles.iconText, { color: colors.brandBlue }]}>📑</Text>
          </View>
          <Text style={[styles.cardTitle, { color: colors.textPrimary }]} numberOfLines={1}>
            PPts
          </Text>
        </TouchableOpacity>
      </View>

      {/* Secondary Bar: Flagged Filter & Clear Answers */}
      <View style={styles.secondaryRow}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={handleToggleFlagged}
          style={[
            styles.subActionBtn,
            {
              backgroundColor: showFlaggedOnly ? colors.amberLight : colors.cardSubBg,
              borderColor: showFlaggedOnly ? colors.amber : colors.borderSubtle,
            },
          ]}
        >
          <Text style={[styles.flagIcon, { color: showFlaggedOnly ? colors.amber : colors.textSecondary }]}>
            {showFlaggedOnly ? '★' : '☆'}
          </Text>
          <Text
            style={[
              styles.subActionText,
              { color: showFlaggedOnly ? colors.amber : colors.textPrimary, fontWeight: showFlaggedOnly ? '700' : '600' },
            ]}
          >
            Flagged Questions ({bookmarkedCount})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={handleClearAll}
          style={[styles.clearBtn, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}
        >
          <Text style={[styles.clearIcon, { color: colors.textSecondary }]}>🧹</Text>
          <Text style={[styles.clearText, { color: colors.textSecondary }]}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 8,
    gap: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 8,
  },
  primaryRow: {
    flexDirection: 'row',
    gap: 6,
  },
  actionCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 11,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: 6,
  },
  subActionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 5,
    minHeight: 34,
  },
  flagIcon: {
    fontSize: 13,
  },
  subActionText: {
    fontSize: 11.5,
    letterSpacing: -0.1,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
    minHeight: 34,
  },
  clearIcon: {
    fontSize: 11,
  },
  clearText: {
    fontSize: 11.5,
    fontWeight: '600',
  },
});
