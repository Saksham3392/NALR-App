import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

export const FilterPills: React.FC = () => {
  const { currentModule, currentTypeQuestions, practiceAnswers, colors } = useApp();

  const answeredInType = currentTypeQuestions.filter(q => practiceAnswers[q.id] !== undefined).length;
  const pct = currentTypeQuestions.length > 0 ? Math.round((answeredInType / currentTypeQuestions.length) * 100) : 0;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
      style={styles.container}
    >
      {/* 1. Module Name Pill */}
      <View
        style={[
          styles.pill,
          { backgroundColor: colors.brandBlueLight, borderColor: colors.brandBlueLight },
        ]}
      >
        <Text style={[styles.pillTextBold, { color: colors.brandBlue }]}>
          {currentModule?.title || 'Module'}
        </Text>
      </View>

      {/* 2. Lecture Subtitle Pill */}
      <View
        style={[
          styles.pill,
          { backgroundColor: colors.cardBg, borderColor: colors.borderSubtle },
        ]}
      >
        <Text style={[styles.pillText, { color: colors.brandBlue }]}>
          {currentModule?.lectures || 'Lectures'}
        </Text>
      </View>

      {/* 3. Answered Status Progress Pill */}
      <View
        style={[
          styles.pill,
          { backgroundColor: colors.cardBg, borderColor: colors.borderSubtle },
        ]}
      >
        <Text style={[styles.pillText, { color: colors.textSecondary }]}>
          {answeredInType}/{currentTypeQuestions.length} Answered ({pct}%)
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  pillTextBold: {
    fontSize: 11,
    fontWeight: '800',
  },
});
