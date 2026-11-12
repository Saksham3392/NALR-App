import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  LayoutAnimation,
  Animated,
  Easing,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { Question } from '../types';
import { useApp } from '../context/AppContext';
import { ThemeColors } from '../theme/colors';
import { DiagramVisualizer } from './DiagramVisualizer';
import { SpotlightCard } from './SpotlightCard';

const smoothLayoutConfig = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

// ---------------------------------------------------------------------------
// Animated Option Button Component
// ---------------------------------------------------------------------------
interface OptionRowProps {
  opt: string;
  letter: string;
  isAnswered: boolean;
  isThisChosen: boolean;
  isThisCorrect: boolean;
  isOverallCorrect: boolean;
  onPress: () => void;
  colors: ThemeColors;
}

const OptionRow: React.FC<OptionRowProps> = ({
  opt,
  letter,
  isAnswered,
  isThisChosen,
  isThisCorrect,
  isOverallCorrect,
  onPress,
  colors,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isAnswered) {
      if (isThisChosen) {
        if (isOverallCorrect) {
          // Play a delightful spring pop on correct answer
          Animated.sequence([
            Animated.timing(scaleAnim, { toValue: 1.025, duration: 100, useNativeDriver: true }),
            Animated.spring(scaleAnim, { toValue: 1, friction: 6, tension: 120, useNativeDriver: true }),
          ]).start();
        } else {
          // Play a smooth, subtle micro-shake on wrong answer
          Animated.sequence([
            Animated.timing(shakeAnim, { toValue: -4, duration: 40, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 4, duration: 45, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -2, duration: 45, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 2, duration: 45, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 45, useNativeDriver: true }),
          ]).start();
        }
      } else if (isThisCorrect) {
        // True answer revealed: gentle guide spring
        Animated.sequence([
          Animated.timing(scaleAnim, { toValue: 1.02, duration: 120, useNativeDriver: true }),
          Animated.spring(scaleAnim, { toValue: 1, friction: 6, tension: 100, useNativeDriver: true }),
        ]).start();
      } else {
        // Unselected options: smoothly dim
        Animated.timing(opacityAnim, {
          toValue: 0.45,
          duration: 240,
          useNativeDriver: true,
        }).start();
      }
    } else {
      scaleAnim.setValue(1);
      shakeAnim.setValue(0);
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 160,
        useNativeDriver: true,
      }).start();
    }
  }, [isAnswered, isThisChosen, isThisCorrect, isOverallCorrect, scaleAnim, shakeAnim, opacityAnim]);

  const handlePressIn = () => {
    if (isAnswered) return;
    Animated.timing(scaleAnim, {
      toValue: 0.975,
      duration: 65,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (isAnswered) return;
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 6,
      tension: 120,
      useNativeDriver: true,
    }).start();
  };

  let optBg = colors.cardSubBg;
  let optBorder = colors.borderSubtle;
  let optTextColor = colors.textPrimary;
  let badgeBg = colors.cardBg;
  let badgeTextColor = colors.textSecondary;
  let indicatorIcon: string | null = null;
  let indicatorBg = 'transparent';
  let indicatorBorder = colors.border;

  if (isAnswered) {
    if (isThisChosen) {
      if (isOverallCorrect) {
        optBg = colors.emeraldLight;
        optBorder = colors.emerald;
        optTextColor = colors.emeraldText;
        badgeBg = colors.emerald;
        badgeTextColor = '#FFFFFF';
        indicatorIcon = '✓';
        indicatorBg = colors.emerald;
        indicatorBorder = colors.emerald;
      } else {
        optBg = colors.crimsonLight;
        optBorder = colors.crimson;
        optTextColor = colors.crimsonText;
        badgeBg = colors.crimson;
        badgeTextColor = '#FFFFFF';
        indicatorIcon = '✕';
        indicatorBg = colors.crimson;
        indicatorBorder = colors.crimson;
      }
    } else if (isThisCorrect) {
      optBg = colors.emeraldLight;
      optBorder = colors.emerald;
      optTextColor = colors.emeraldText;
      badgeBg = colors.emerald;
      badgeTextColor = '#FFFFFF';
      indicatorIcon = '✓';
      indicatorBg = colors.emerald;
      indicatorBorder = colors.emerald;
    }
  }

  return (
    <Animated.View
      style={[
        {
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }, { translateX: shakeAnim }],
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        disabled={isAnswered}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={[
          styles.optionBtn,
          {
            backgroundColor: optBg,
            borderColor: optBorder,
          },
        ]}
      >
        {/* Letter Badge on the Left */}
        <View style={[styles.optionBadge, { backgroundColor: badgeBg }]}>
          <Text style={[styles.optionBadgeText, { color: badgeTextColor }]}>
            {letter}
          </Text>
        </View>

        {/* Option Text */}
        <Text style={[styles.optionText, { color: optTextColor }]}>{opt}</Text>

        {/* Visual Indicator on the Right (Not relying only on color) */}
        <View
          style={[
            styles.indicatorCircle,
            {
              backgroundColor: indicatorBg,
              borderColor: indicatorBorder,
            },
          ]}
        >
          {indicatorIcon ? (
            <Text style={styles.indicatorText}>{indicatorIcon}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

// ---------------------------------------------------------------------------
// Main QuestionCard Component
// ---------------------------------------------------------------------------
interface QuestionCardProps {
  question: Question;
  index: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  const {
    practiceAnswers,
    answerPracticeQuestion,
    clearPracticeAnswer,
    bookmarkedIds,
    toggleBookmark,
    colors,
    showGlassToast,
    showGlassAlert,
  } = useApp();

  const [manualToggle, setManualToggle] = useState<boolean | null>(null);

  const selectedAnswer = practiceAnswers[question.id];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === question.correct;
  const isBookmarked = bookmarkedIds.has(question.id);

  // Auto-show solution on incorrect answer, hide by default on correct or unanswered
  const defaultVisibility = isAnswered ? !isCorrect : false;
  const isSolutionVisible = manualToggle !== null ? manualToggle : defaultVisibility;

  const letters = ['A', 'B', 'C', 'D', 'E'];

  const getDifficultyBadgeStyle = () => {
    switch (question.difficulty) {
      case 'Easy':
        return {
          bg: colors.emeraldLight,
          border: colors.emeraldBorder,
          text: colors.emerald,
        };
      case 'Hard':
        return {
          bg: colors.crimsonLight,
          border: colors.crimsonBorder,
          text: colors.crimson,
        };
      default:
        return {
          bg: colors.amberLight,
          border: colors.amberBorder,
          text: colors.amber,
        };
    }
  };

  const diffStyle = getDifficultyBadgeStyle();

  const handleCopy = async () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    const textToCopy = `Question ${index + 1}: ${question.question}\nOptions:\n${question.options
      .map((opt, i) => `${letters[i]}) ${opt}`)
      .join('\n')}\nCorrect Answer: ${question.correct}`;
    await Clipboard.setStringAsync(textToCopy);
    showGlassToast();
  };

  const handleAiHint = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    const prompt = encodeURIComponent(
      `Please explain how to solve this aptitude question step-by-step:\n"${question.question}"`
    );
    Linking.openURL(`https://gemini.google.com/app?q=${prompt}`).catch(() => {
      showGlassAlert({
        title: 'AI Assistance',
        message: `Prompt: How to solve:\n\n${question.question}`,
        confirmText: 'OK',
      });
    });
  };

  const handleToggleSolution = () => {
    try {
      Haptics.selectionAsync();
    } catch {}
    LayoutAnimation.configureNext(smoothLayoutConfig);
    setManualToggle(!isSolutionVisible);
  };

  const handleClear = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    LayoutAnimation.configureNext(smoothLayoutConfig);
    setManualToggle(null);
    clearPracticeAnswer(question.id);
  };

  const handleAnswer = (opt: string) => {
    if (isAnswered) return;
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    LayoutAnimation.configureNext(smoothLayoutConfig);
    setManualToggle(null);
    answerPracticeQuestion(question.id, opt);
  };

  const handleToggleBookmark = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    toggleBookmark(question.id);
  };

  const statusBorder = isAnswered ? (isCorrect ? colors.emerald : colors.crimson) : null;

  return (
    <SpotlightCard statusColor={statusBorder} borderRadius={18} style={styles.cardWrapper}>
      <View style={styles.cardInner}>
        {/* ROW 1: QUESTION INFORMATION BADGES */}
        <View style={styles.metaRow}>
          <View style={[styles.metaBadge, { backgroundColor: colors.brandBlueLight, borderColor: colors.brandBlueBorder }]}>
            <Text style={[styles.metaBadgeText, { color: colors.brandBlue, fontWeight: '800' }]}>
              Q{index + 1}
            </Text>
          </View>

          <View style={[styles.metaBadge, { backgroundColor: diffStyle.bg, borderColor: diffStyle.border }]}>
            <Text style={[styles.metaBadgeText, { color: diffStyle.text, fontWeight: '700' }]}>
              {question.difficulty}
            </Text>
          </View>

          <View style={[styles.metaBadge, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}>
            <Text style={[styles.metaBadgeText, { color: colors.textSecondary, fontWeight: '600' }]}>
              {question.points || 1} Pt
            </Text>
          </View>
        </View>

        {/* ROW 2: QUESTION ACTIONS TOOLBAR (Equal 4-button distribution, NO AI button) */}
        <View style={styles.actionsRow}>
          {/* Action 1: Copy */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleCopy}
            style={[
              styles.actionBtn,
              { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle },
            ]}
            accessibilityLabel="Copy question and options"
          >
            <Text style={styles.actionBtnIcon}>📋</Text>
            <Text style={[styles.actionBtnText, { color: colors.textSecondary }]}>Copy</Text>
          </TouchableOpacity>

          {/* Action 2: Hide / Solution */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleToggleSolution}
            style={[
              styles.actionBtn,
              {
                backgroundColor: isSolutionVisible ? colors.amberLight : colors.cardSubBg,
                borderColor: isSolutionVisible ? colors.amber : colors.borderSubtle,
              },
            ]}
            accessibilityLabel={isSolutionVisible ? "Hide solution" : "Show solution"}
          >
            <Text style={styles.actionBtnIcon}>💡</Text>
            <Text
              style={[
                styles.actionBtnText,
                { color: isSolutionVisible ? colors.amber : colors.textSecondary },
                isSolutionVisible && { fontWeight: '700' },
              ]}
              numberOfLines={1}
            >
              {isSolutionVisible ? 'Hide' : 'Solution'}
            </Text>
          </TouchableOpacity>

          {/* Action 3: Clear */}
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={!isAnswered}
            onPress={handleClear}
            style={[
              styles.actionBtn,
              {
                backgroundColor: isAnswered ? colors.crimsonLight : colors.cardSubBg,
                borderColor: isAnswered ? colors.crimsonBorder : colors.borderSubtle,
                opacity: isAnswered ? 1 : 0.45,
              },
            ]}
            accessibilityLabel="Clear answer choice"
          >
            <Text style={styles.actionBtnIcon}>🧹</Text>
            <Text
              style={[
                styles.actionBtnText,
                { color: isAnswered ? colors.crimson : colors.textMuted },
                isAnswered && { fontWeight: '700' },
              ]}
            >
              Clear
            </Text>
          </TouchableOpacity>

          {/* Action 4: Bookmark / Star */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleToggleBookmark}
            style={[
              styles.actionBtn,
              {
                backgroundColor: isBookmarked ? colors.amberLight : colors.cardSubBg,
                borderColor: isBookmarked ? colors.amber : colors.borderSubtle,
              },
            ]}
            accessibilityLabel={isBookmarked ? "Remove bookmark" : "Bookmark question"}
          >
            <Text style={[styles.actionStarIcon, { color: isBookmarked ? colors.amber : colors.textMuted }]}>
              {isBookmarked ? '★' : '☆'}
            </Text>
            <Text
              style={[
                styles.actionBtnText,
                { color: isBookmarked ? colors.amber : colors.textSecondary },
                isBookmarked && { fontWeight: '700' },
              ]}
            >
              {isBookmarked ? 'Saved' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Question Statement */}
        <Text style={[styles.questionText, { color: colors.textPrimary }]}>{question.question}</Text>

        {/* Animated Options Stack */}
        <View style={styles.optionsStack}>
          {question.options.map((opt, oIdx) => {
            const letter = letters[oIdx] || `${oIdx + 1}`;
            const isThisChosen = selectedAnswer === opt;
            const isThisCorrect = opt === question.correct;

            return (
              <OptionRow
                key={`${question.id}_opt_${oIdx}`}
                opt={opt}
                letter={letter}
                isAnswered={isAnswered}
                isThisChosen={isThisChosen}
                isThisCorrect={isThisCorrect}
                isOverallCorrect={isCorrect}
                onPress={() => handleAnswer(opt)}
                colors={colors}
              />
            );
          })}
        </View>

        {/* Collapsible Solution Drawer */}
        {isSolutionVisible ? (
          <View
            style={[
              styles.solutionDrawer,
              {
                backgroundColor: !isAnswered
                  ? colors.cardSubBg
                  : isCorrect
                  ? colors.emeraldLight
                  : colors.crimsonLight,
                borderColor: !isAnswered
                  ? colors.border
                  : isCorrect
                  ? colors.emeraldBorder
                  : colors.crimsonBorder,
              },
            ]}
          >
            {/* Status Headline */}
            <View style={styles.statusRow}>
              <Text
                style={[
                  styles.statusHeadlineText,
                  {
                    color: !isAnswered
                      ? colors.amber
                      : isCorrect
                      ? colors.emerald
                      : colors.crimson,
                  },
                ]}
              >
                {!isAnswered
                  ? '💡 Solution & Walkthrough'
                  : isCorrect
                  ? '✓ Correct Answer (+1 Point)'
                  : '✕ Incorrect Choice'}
              </Text>
            </View>

            {/* Correct Option Pill */}
            <View style={[styles.correctAnswerPill, { backgroundColor: colors.cardBg }]}>
              <Text style={[styles.correctAnswerLabel, { color: colors.textSecondary }]}>
                Correct Answer:
              </Text>
              <Text style={[styles.correctAnswerValue, { color: colors.emerald }]}>
                {question.correct}
              </Text>
            </View>

            {/* Dynamic Diagram Visualizer if applicable */}
            <DiagramVisualizer question={question} />

            {/* Explanation Walkthrough Content */}
            {question.explanation ? (
              <View style={styles.explanationSection}>
                <Text style={[styles.explanationTitle, { color: colors.textPrimary }]}>
                  Step-by-Step Explanation
                </Text>
                <Text style={[styles.explanationText, { color: colors.textSecondary }]}>
                  {question.explanation}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </View>
    </SpotlightCard>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 14,
  },
  cardInner: {
    padding: 14,
    gap: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaBadge: {
    height: 26,
    paddingHorizontal: 9,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaBadgeText: {
    fontSize: 11.5,
    letterSpacing: -0.1,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionBtn: {
    flex: 1,
    height: 35,
    borderRadius: 9,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    gap: 4,
  },
  actionBtnIcon: {
    fontSize: 13,
  },
  actionStarIcon: {
    fontSize: 14,
  },
  actionBtnText: {
    fontSize: 11.5,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  questionText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  optionsStack: {
    gap: 8,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    minHeight: 48,
    gap: 10,
  },
  optionBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionBadgeText: {
    fontSize: 12.5,
    fontWeight: '800',
  },
  optionText: {
    flex: 1,
    fontSize: 13.5,
    lineHeight: 18,
    fontWeight: '500',
  },
  indicatorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  solutionDrawer: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    gap: 10,
    marginTop: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusHeadlineText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  correctAnswerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
    alignSelf: 'flex-start',
  },
  correctAnswerLabel: {
    fontSize: 11.5,
    fontWeight: '600',
  },
  correctAnswerValue: {
    fontSize: 12,
    fontWeight: '800',
  },
  explanationSection: {
    gap: 4,
    marginTop: 2,
  },
  explanationTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  explanationText: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '400',
  },
});
