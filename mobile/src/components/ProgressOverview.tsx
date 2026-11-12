import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useApp } from '../context/AppContext';

interface ProgressOverviewProps {
  scrollY?: Animated.Value;
  isSticky?: boolean;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({ scrollY }) => {
  const { currentModule, activeTypeId, currentTypeQuestions, practiceAnswers, colors, isDarkMode } = useApp();

  const currentType = currentModule?.types.find(t => t.id === activeTypeId);
  const totalInType = currentTypeQuestions.length;
  const answeredInType = currentTypeQuestions.filter(q => practiceAnswers[q.id] !== undefined).length;
  const percentage = totalInType > 0 ? Math.round((answeredInType / totalInType) * 100) : 0;

  // Determine Type Number & clean formatted Subname
  const typeIndex = currentModule?.types.findIndex(t => t.id === activeTypeId) ?? -1;
  const typeNumber = typeIndex >= 0 ? typeIndex + 1 : 1;
  const colonIdx = currentType?.name.indexOf(':') ?? -1;
  const subName = colonIdx !== -1 ? currentType?.name.slice(colonIdx + 1).trim() : (currentType?.name || '');

  const modPrefix = currentModule ? `Module ${currentModule.num}` : 'Module';
  const typeLabel = `Type ${typeNumber}: ${subName}`;

  // 1. Percentage Count-Up Animation (e.g. from 0% to 12% smoothly with cubic ease-out)
  const [displayPct, setDisplayPct] = useState(0);
  const prevPctRef = useRef(0);

  useEffect(() => {
    const startNum = prevPctRef.current;
    const targetNum = percentage;
    prevPctRef.current = targetNum;

    if (startNum === targetNum) {
      setDisplayPct(targetNum);
      return;
    }

    const duration = 480;
    const startTime = Date.now();
    let animId: number;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic: 1 - Math.pow(1 - progress, 3) like in nalr.vercel.app
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startNum + (targetNum - startNum) * ease);
      setDisplayPct(currentVal);

      if (progress < 1) {
        animId = requestAnimationFrame(tick);
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [percentage]);

  // 2. Liquid Filling Progress Bar Animation
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: percentage,
      duration: 480,
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      useNativeDriver: false,
    }).start();
  }, [percentage, progressAnim]);

  // 3. Shimmer Light Sweep across the progress bar (specular highlight like nalr.vercel.app)
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 2200,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
        Animated.delay(900),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [shimmerAnim]);

  // 4. Ultra-Smooth Hardware-Accelerated Sticky Shrink & Width Thinning
  // Using native GPU transforms: 0 layout reflows, 0 scroll jank, 60/120fps fluid smoothness!
  const fallbackScrollY = useRef(new Animated.Value(0)).current;
  const activeScrollY = scrollY || fallbackScrollY;

  const scaleX = activeScrollY.interpolate({
    inputRange: [20, 110],
    outputRange: [1, 0.93], // Smoothly gets thinner horizontally by 7%
    extrapolate: 'clamp',
  });

  const scaleY = activeScrollY.interpolate({
    inputRange: [20, 110],
    outputRange: [1, 0.88], // Smoothly shrinks vertically by 12%
    extrapolate: 'clamp',
  });

  const translateY = activeScrollY.interpolate({
    inputRange: [20, 110],
    outputRange: [0, -1],
    extrapolate: 'clamp',
  });

  const stickyGlowOpacity = activeScrollY.interpolate({
    inputRange: [50, 110],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  // 5. Title crossfade when switching modules / types
  const titleOpacity = useRef(new Animated.Value(1)).current;
  const titleTranslateY = useRef(new Animated.Value(0)).current;
  const prevTypeKey = useRef(`${currentModule?.id}_${activeTypeId}`);

  useEffect(() => {
    const currentKey = `${currentModule?.id}_${activeTypeId}`;
    if (prevTypeKey.current !== currentKey) {
      prevTypeKey.current = currentKey;
      Animated.sequence([
        Animated.parallel([
          Animated.timing(titleOpacity, {
            toValue: 0,
            duration: 70,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(titleTranslateY, {
            toValue: -3,
            duration: 70,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 160,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            useNativeDriver: true,
          }),
          Animated.timing(titleTranslateY, {
            toValue: 0,
            duration: 160,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }, [currentModule?.id, activeTypeId, titleOpacity, titleTranslateY]);

  const widthInterpolation = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
          transform: [{ scaleX }, { scaleY }, { translateY }],
        },
      ]}
    >
      {/* Top Header Row with Title and Stats Pill */}
      <View style={styles.topRow}>
        <View style={styles.titleColumn}>
          <View style={styles.modMetaRow}>
            <Text style={[styles.modPrefixText, { color: colors.textSecondary }]}>
              {modPrefix} • {currentModule?.title || 'Overview'}
            </Text>
          </View>

          <Animated.Text
            style={[
              styles.typeHeading,
              {
                color: colors.textPrimary,
                opacity: titleOpacity,
                transform: [{ translateY: titleTranslateY }],
              },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {typeLabel}
          </Animated.Text>
        </View>

        {/* Apple Style Stats Capsule */}
        <View style={[styles.statsPill, { backgroundColor: colors.cardSubBg }]}>
          <Text style={[styles.pctText, { color: colors.brandBlue }]}>{displayPct}%</Text>
          <Text style={[styles.countSub, { color: colors.textSecondary }]}>
            {answeredInType}/{totalInType} Qs
          </Text>
        </View>
      </View>

      {/* Refined Liquid Progress Track */}
      <View style={[styles.track, { backgroundColor: colors.cardSubBg }]}>
        <Animated.View
          style={[
            styles.indicator,
            {
              width: widthInterpolation,
            },
          ]}
        >
          {/* Liquid Gradient Fill */}
          <LinearGradient
            colors={
              isDarkMode
                ? ['#2563eb', '#3b82f6', '#06b6d4', '#10b981']
                : ['#1d4ed8', '#2563eb', '#0284c7', '#059669']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />

          {/* Shimmer Specular Sweep */}
          <Animated.View
            style={[
              styles.shimmerWrap,
              {
                transform: [
                  {
                    translateX: shimmerAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-80, 260],
                    }),
                  },
                ],
              },
            ]}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.65)', 'rgba(255,255,255,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  titleColumn: {
    flex: 1,
    gap: 2,
  },
  modMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dotIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  modPrefixText: {
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  typeHeading: {
    fontSize: 13.5,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  statsPill: {
    alignItems: 'flex-end',
    paddingHorizontal: 9,
    paddingVertical: 3.5,
    borderRadius: 10,
    gap: 1,
  },
  pctText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  countSub: {
    fontSize: 9.5,
    fontWeight: '600',
  },
  track: {
    height: 5.5,
    borderRadius: 999,
    overflow: 'hidden',
  },
  indicator: {
    height: '100%',
    borderRadius: 999,
    overflow: 'hidden',
    position: 'relative',
  },
  shimmerWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 60,
  },
});
