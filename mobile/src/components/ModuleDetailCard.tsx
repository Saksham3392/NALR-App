import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';
import { Difficulty } from '../types';

interface ModuleDetailCardProps {
  onOpenPpt: () => void;
}

export const ModuleDetailCard: React.FC<ModuleDetailCardProps> = ({ onOpenPpt }) => {
  const {
    currentModule,
    activeTypeId,
    currentTypeQuestions,
    difficultyFilter,
    setDifficultyFilter,
    practiceAnswers,
    colors,
  } = useApp();

  const currentType = currentModule?.types.find(t => t.id === activeTypeId);
  const totalQuestions = currentTypeQuestions.length;
  const answeredCount = currentTypeQuestions.filter(q => practiceAnswers[q.id] !== undefined).length;
  const pct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const difficulties: { id: Difficulty; label: string; dotColor?: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'Easy', label: 'Easy', dotColor: colors.emerald },
    { id: 'Medium', label: 'Medium', dotColor: colors.amber },
    { id: 'Hard', label: 'Hard', dotColor: colors.crimson },
  ];

  const handleSelectDifficulty = (dId: Difficulty) => {
    if (dId !== difficultyFilter) {
      try {
        Haptics.selectionAsync();
      } catch {}
      setDifficultyFilter(dId);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
      {/* Category & PPT Header */}
      <View style={styles.topRow}>
        <View style={styles.moduleCategoryBadge}>
          <Text style={[styles.modulePrefix, { color: colors.textSecondary }]}>
            MODULE {currentModule?.num || 1} • {(currentModule?.lectures || 'CURRICULUM').toUpperCase()}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            try {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            } catch {}
            onOpenPpt();
          }}
          style={[styles.pptBtn, { backgroundColor: colors.orangeLight, borderColor: colors.orangeBorder }]}
          accessibilityLabel="Open PPts"
        >
          <View style={[styles.pptIconBadge, { backgroundColor: colors.orange }]}>
            <Text style={styles.pptIconText}>P</Text>
          </View>
          <Text style={[styles.pptBtnText, { color: colors.orange }]}>PPts</Text>
        </TouchableOpacity>
      </View>

      {/* Type Title & Question Progress */}
      <View style={styles.titleProgressRow}>
        <Text style={[styles.typeHeading, { color: colors.textPrimary }]} numberOfLines={2}>
          {currentType?.name || currentModule?.title}
        </Text>
        <View style={[styles.progressTag, { backgroundColor: colors.cardSubBg }]}>
          <Text style={[styles.progressTagText, { color: colors.textSecondary }]}>
            {answeredCount}/{totalQuestions} ({pct}%)
          </Text>
        </View>
      </View>

      {/* Tip Callout if Description exists */}
      {currentType?.desc ? (
        <View style={[styles.tipBox, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}>
          <Text style={styles.bulbIcon}>💡</Text>
          <Text style={[styles.tipText, { color: colors.textSecondary }]}>
            <Text style={[styles.tipBold, { color: colors.textPrimary }]}>{currentType.name}: </Text>
            {currentType.desc}
          </Text>
        </View>
      ) : null}

      {/* Apple-style Difficulty Segmented Control */}
      <View style={styles.filterSection}>
        <Text style={[styles.filterLabel, { color: colors.textMuted }]}>DIFFICULTY</Text>
        <View style={[styles.diffSegmentGroup, { backgroundColor: colors.cardSubBg }]}>
          {difficulties.map(d => {
            const isSelected = difficultyFilter === d.id;
            return (
              <TouchableOpacity
                key={d.id}
                activeOpacity={0.8}
                onPress={() => handleSelectDifficulty(d.id)}
                style={[
                  styles.diffSegmentBtn,
                  isSelected && [
                    styles.diffSegmentBtnSelected,
                    { backgroundColor: colors.brandBlue },
                  ],
                ]}
              >
                {d.dotColor && !isSelected ? (
                  <View style={[styles.diffDot, { backgroundColor: d.dotColor }]} />
                ) : null}
                <Text
                  style={[
                    styles.diffSegmentText,
                    { color: isSelected ? '#FFFFFF' : colors.textSecondary },
                    isSelected && styles.diffSegmentTextSelected,
                  ]}
                >
                  {d.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 14,
    gap: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  moduleCategoryBadge: {
    flex: 1,
  },
  modulePrefix: {
    fontSize: 10.5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  pptBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4.5,
    borderRadius: 999,
    borderWidth: 1,
    gap: 5,
  },
  pptIconBadge: {
    width: 15,
    height: 15,
    borderRadius: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pptIconText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },
  pptBtnText: {
    fontSize: 11,
    fontWeight: '700',
  },
  titleProgressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  typeHeading: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
    lineHeight: 20,
  },
  progressTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  progressTagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  tipBox: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
    alignItems: 'flex-start',
  },
  bulbIcon: {
    fontSize: 14,
    marginTop: 1,
  },
  tipText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  tipBold: {
    fontWeight: '700',
  },
  filterSection: {
    gap: 6,
    marginTop: 2,
  },
  filterLabel: {
    fontSize: 10.5,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  diffSegmentGroup: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 3,
  },
  diffSegmentBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 8,
    gap: 5,
  },
  diffSegmentBtnSelected: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  diffDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  diffSegmentText: {
    fontSize: 12,
    fontWeight: '500',
  },
  diffSegmentTextSelected: {
    fontWeight: '700',
  },
});
