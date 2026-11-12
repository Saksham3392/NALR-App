import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useApp } from '../context/AppContext';
import { HeaderBar } from '../components/HeaderBar';
import { QuickActionsGrid } from '../components/QuickActionsGrid';
import { ProgressOverview } from '../components/ProgressOverview';
import { ModuleMetaBar } from '../components/ModuleMetaBar';
import { SubtabCarousel } from '../components/SubtabCarousel';
import { ModuleDetailCard } from '../components/ModuleDetailCard';
import { QuestionCard } from '../components/QuestionCard';
import { PaginationFooter } from '../components/PaginationFooter';
import { BrowseTopicsModal } from '../components/BrowseTopicsModal';
import { ExamModal } from '../components/ExamModal';
import { PlannerModal } from '../components/PlannerModal';
import { PptViewerModal } from '../components/PptViewerModal';
import { SettingsModal } from '../components/SettingsModal';

export const PracticeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const {
    currentQuestions,
    difficultyFilter,
    showFlaggedOnly,
    colors,
    isDarkMode,
  } = useApp();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [isPptOpen, setIsPptOpen] = useState(false);

  // Pure hardware-accelerated scroll tracking for 100% fluid sticky progress bar
  const scrollY = useRef(new Animated.Value(0)).current;

  // Safe area padding for Android status bar and bottom gesture bar
  const safeTop = Math.max(insets.top, 24);
  const safeBottom = Math.max(insets.bottom, 16);

  return (
    <View style={[styles.screenContainer, { backgroundColor: colors.appBg, paddingTop: safeTop }]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <Animated.ScrollView
        stickyHeaderIndices={[2]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: 8,
            paddingBottom: safeBottom + 20,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Child 0: Apple-styled Header Bar with Term Switcher & Settings */}
        <HeaderBar onOpenSettings={() => setIsSettingsOpen(true)} />

        {/* Child 1: Quick Actions Area (Compact Tab Pills) */}
        <QuickActionsGrid
          onOpenExam={() => setIsExamOpen(true)}
          onOpenPlanner={() => setIsPlannerOpen(true)}
          onOpenPpt={() => setIsPptOpen(true)}
        />

        {/* Child 2: Sticky Telemetry Progress Overview */}
        <View style={[styles.stickyWrapper, { backgroundColor: colors.appBg }]}>
          <ProgressOverview scrollY={scrollY} />
        </View>

        {/* Child 3: Module Meta Header with "Browse All ▾" button */}
        <ModuleMetaBar onOpenBrowse={() => setIsBrowseOpen(true)} />

        {/* Child 4: Horizontal Subtabs Carousel */}
        <SubtabCarousel />

        {/* Child 5: Simplified Module Detail Card (Title, Tip, Difficulty Filter) */}
        <ModuleDetailCard onOpenPpt={() => setIsPptOpen(true)} />

        {/* Questions Feed with Apple-inspired Question Cards */}
        {currentQuestions.length > 0 ? (
          currentQuestions.map((q, idx) => (
            <QuestionCard key={q.id} question={q} index={idx} />
          ))
        ) : (
          /* Empty State */
          <View style={[styles.emptyCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
              No Matching Questions
            </Text>
            <Text style={[styles.emptySubtitle, { color: colors.textSecondary }]}>
              {showFlaggedOnly
                ? 'No flagged questions found in this subtab. Tap the star icon on any question to bookmark it.'
                : `No questions found with difficulty: "${difficultyFilter}". Try selecting "All" difficulty.`}
            </Text>
          </View>
        )}

        {/* Pagination Footer */}
        <PaginationFooter />
      </Animated.ScrollView>

      {/* Interactive Feature Modals */}
      <SettingsModal visible={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <BrowseTopicsModal visible={isBrowseOpen} onClose={() => setIsBrowseOpen(false)} />
      <ExamModal visible={isExamOpen} onClose={() => setIsExamOpen(false)} />
      <PlannerModal visible={isPlannerOpen} onClose={() => setIsPlannerOpen(false)} />
      <PptViewerModal visible={isPptOpen} onClose={() => setIsPptOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  stickyWrapper: {
    marginHorizontal: -12,
    paddingHorizontal: 12,
    paddingTop: 2,
    paddingBottom: 2,
    zIndex: 999,
  },
  emptyCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 28,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 12,
  },
  emptyIcon: {
    fontSize: 28,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  emptySubtitle: {
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 18,
  },
});
