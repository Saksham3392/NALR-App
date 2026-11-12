import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, {
  Circle,
  Line,
  Polygon,
  Rect,
  Text as SvgText,
  G,
  Path,
} from 'react-native-svg';
import { Question } from '../types';
import { useApp } from '../context/AppContext';

interface DiagramVisualizerProps {
  question: Question;
}

export const DiagramVisualizer: React.FC<DiagramVisualizerProps> = ({ question }) => {
  const { colors } = useApp();
  const modId = question.module_id;

  const renderContent = () => {
    // 1. BLOOD RELATION
    if (modId === 'mod1' || (modId === 'mod15' && question.type_id === 'type_1')) {
      return (
        <View style={styles.visBody}>
          <Text style={[styles.visSubTitle, { color: colors.brandBlue }]}>
            Family Tree & Generation Deduction Model
          </Text>
          <View style={styles.treeTierContainer}>
            <View style={[styles.treeTier, { borderColor: colors.purple }]}>
              <Text style={[styles.tierLabel, { color: colors.purple }]}>GRANDPARENTS (TIER +2)</Text>
              <Text style={[styles.tierNode, { color: colors.textPrimary }]}>Grandfather ⚭ Grandmother</Text>
            </View>
            <Text style={[styles.treeConnector, { color: colors.brandBlue }]}>↓</Text>
            <View style={[styles.treeTier, { borderColor: colors.brandBlue }]}>
              <Text style={[styles.tierLabel, { color: colors.brandBlue }]}>PARENTS (TIER +1)</Text>
              <Text style={[styles.tierNode, { color: colors.textPrimary }]}>Father / Mother • Uncle / Aunt</Text>
            </View>
            <Text style={[styles.treeConnector, { color: colors.brandBlue }]}>↓</Text>
            <View style={[styles.treeTier, { borderColor: colors.emerald, backgroundColor: colors.emeraldLight }]}>
              <Text style={[styles.tierLabel, { color: colors.emerald }]}>TARGET GENERATION (TIER 0)</Text>
              <Text style={[styles.tierNodeWinner, { color: colors.emerald }]}>
                ★ Correct: {question.correct}
              </Text>
            </View>
          </View>
        </View>
      );
    }

    // 2. DIRECTION SENSE
    if (modId === 'mod4' || (modId === 'mod15' && question.type_id === 'type_3')) {
      return (
        <View style={styles.visBody}>
          <Text style={[styles.visSubTitle, { color: colors.brandBlue }]}>
            2D Cartesian Trajectory & 8-Point Compass HUD
          </Text>
          <View style={styles.compassSvgRow}>
            {/* Compass HUD */}
            <Svg width="110" height="110" viewBox="0 0 110 110">
              <Circle cx="55" cy="55" r="50" stroke={colors.brandBlue} strokeWidth="2" fill="none" />
              <Circle cx="55" cy="55" r="4" fill={colors.brandBlue} />
              {/* North Arrow */}
              <Line x1="55" y1="55" x2="55" y2="15" stroke={colors.crimson} strokeWidth="2.5" />
              <Polygon points="55,10 50,20 60,20" fill={colors.crimson} />
              <SvgText x="55" y="8" fill={colors.crimson} fontSize="9" fontWeight="bold" textAnchor="middle">
                N
              </SvgText>
              {/* South */}
              <Line x1="55" y1="55" x2="55" y2="95" stroke={colors.textMuted} strokeWidth="1.5" />
              <SvgText x="55" y="106" fill={colors.textSecondary} fontSize="9" textAnchor="middle">
                S
              </SvgText>
              {/* East */}
              <Line x1="55" y1="55" x2="95" y2="55" stroke={colors.textMuted} strokeWidth="1.5" />
              <SvgText x="105" y="58" fill={colors.textSecondary} fontSize="9" textAnchor="middle">
                E
              </SvgText>
              {/* West */}
              <Line x1="55" y1="55" x2="15" y2="55" stroke={colors.textMuted} strokeWidth="1.5" />
              <SvgText x="7" y="58" fill={colors.textSecondary} fontSize="9" textAnchor="middle">
                W
              </SvgText>
            </Svg>

            {/* Trajectory Info */}
            <View style={styles.compassInfo}>
              <View style={[styles.vectorPill, { backgroundColor: colors.brandBlueLight }]}>
                <Text style={[styles.vectorLabel, { color: colors.brandBlue }]}>PYTHAGORAS THEOREM</Text>
                <Text style={[styles.vectorFormula, { color: colors.textPrimary }]}>d = √(Δx² + Δy²)</Text>
              </View>
              <View style={[styles.vectorPill, { backgroundColor: colors.emeraldLight }]}>
                <Text style={[styles.vectorLabel, { color: colors.emerald }]}>BEARING / DISPLACEMENT</Text>
                <Text style={[styles.vectorResult, { color: colors.emerald }]}>{question.correct}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }

    // 3. AVERAGE (Seesaw / Balance Beam)
    if (modId === 'mod7' || (modId === 'mod16' && question.type_id === 'type_3')) {
      return (
        <View style={styles.visBody}>
          <Text style={[styles.visSubTitle, { color: colors.brandBlue }]}>
            Arithmetic Mean Seesaw / Balance Beam Model
          </Text>
          <Svg width="100%" height="80" viewBox="0 0 280 80">
            {/* Ground Line */}
            <Line x1="20" y1="70" x2="260" y2="70" stroke={colors.borderSubtle} strokeWidth="2" />
            {/* Fulcrum Pivot */}
            <Polygon points="140,40 125,70 155,70" fill={colors.brandBlue} />
            {/* Seesaw Beam */}
            <Line x1="30" y1="40" x2="250" y2="40" stroke={colors.textPrimary} strokeWidth="4" />
            {/* Left Weight */}
            <Rect x="40" y="24" width="32" height="16" rx="3" fill={colors.purple} />
            <SvgText x="56" y="35" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">
              -Δ
            </SvgText>
            {/* Right Weight */}
            <Rect x="208" y="24" width="32" height="16" rx="3" fill={colors.emerald} />
            <SvgText x="224" y="35" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">
              +Δ
            </SvgText>
            {/* Equilibrium Tag */}
            <SvgText x="140" y="22" fill={colors.emerald} fontSize="10" fontWeight="bold" textAnchor="middle">
              Equilibrium: Σ(x - μ) = 0
            </SvgText>
          </Svg>
          <View style={[styles.resolutionBanner, { backgroundColor: colors.emeraldLight }]}>
            <Text style={[styles.resText, { color: colors.emerald }]}>
              Verified Mean / Invariant: {question.correct}
            </Text>
          </View>
        </View>
      );
    }

    // 4. SYLLOGISM (Euler-Venn)
    if (modId === 'mod14' || (modId === 'mod17' && question.type_id === 'type_2')) {
      return (
        <View style={styles.visBody}>
          <Text style={[styles.visSubTitle, { color: colors.brandBlue }]}>
            Categorical Euler-Venn Set Deductive Model
          </Text>
          <Svg width="100%" height="100" viewBox="0 0 260 100">
            {/* Set Circle A */}
            <Circle cx="95" cy="50" r="38" stroke={colors.brandBlue} strokeWidth="2" fill="rgba(37,99,235,0.12)" />
            <SvgText x="80" y="54" fill={colors.brandBlue} fontSize="10" fontWeight="bold">
              Set A
            </SvgText>
            {/* Set Circle B */}
            <Circle cx="165" cy="50" r="38" stroke={colors.purple} strokeWidth="2" fill="rgba(124,58,237,0.12)" />
            <SvgText x="175" y="54" fill={colors.purple} fontSize="10" fontWeight="bold">
              Set B
            </SvgText>
            {/* Overlap Indicator */}
            <SvgText x="130" y="54" fill={colors.emerald} fontSize="9" fontWeight="bold" textAnchor="middle">
              A ∩ B
            </SvgText>
          </Svg>
          <View style={[styles.resolutionBanner, { backgroundColor: colors.emeraldLight }]}>
            <Text style={[styles.resText, { color: colors.emerald }]}>
              Deductive Conclusion: {question.correct}
            </Text>
          </View>
        </View>
      );
    }

    // 5. ALLIGATION & MIXTURES
    if (modId === 'mod12') {
      return (
        <View style={styles.visBody}>
          <Text style={[styles.visSubTitle, { color: colors.brandBlue }]}>
            Alligation Cross & Diagonal Subtraction Vector
          </Text>
          <View style={styles.alligationGrid}>
            <View style={styles.alligRow}>
              <View style={[styles.alligBox, { backgroundColor: colors.brandBlueLight }]}>
                <Text style={[styles.alligBoxLabel, { color: colors.brandBlue }]}>Cheaper Price</Text>
                <Text style={[styles.alligBoxVal, { color: colors.textPrimary }]}>C</Text>
              </View>
              <View style={[styles.alligBox, { backgroundColor: colors.purpleLight }]}>
                <Text style={[styles.alligBoxLabel, { color: colors.purple }]}>Dearer Price</Text>
                <Text style={[styles.alligBoxVal, { color: colors.textPrimary }]}>D</Text>
              </View>
            </View>
            <View style={styles.alligCenterRow}>
              <View style={[styles.alligCenterPill, { backgroundColor: colors.cardSubBg }]}>
                <Text style={[styles.alligCenterLabel, { color: colors.brandBlue }]}>Mean Price (M)</Text>
              </View>
            </View>
            <View style={styles.alligRow}>
              <View style={[styles.alligBox, { backgroundColor: colors.emeraldLight }]}>
                <Text style={[styles.alligBoxLabel, { color: colors.emerald }]}>Ratio 1: (D - M)</Text>
              </View>
              <View style={[styles.alligBox, { backgroundColor: colors.emeraldLight }]}>
                <Text style={[styles.alligBoxLabel, { color: colors.emerald }]}>Ratio 2: (M - C)</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }

    // 6. DEFAULT / GENERAL APTITUDE SCHEMATIC
    return (
      <View style={styles.visBody}>
        <Text style={[styles.visSubTitle, { color: colors.brandBlue }]}>
          Mathematical & Logic Schematic
        </Text>
        <View style={styles.genericRow}>
          <View style={[styles.genericCard, { backgroundColor: colors.brandBlueLight }]}>
            <Text style={[styles.genericCardTag, { color: colors.brandBlue }]}>PROBLEM TYPE</Text>
            <Text style={[styles.genericCardVal, { color: colors.textPrimary }]} numberOfLines={2}>
              {question.type_name}
            </Text>
          </View>
          <Text style={[styles.genericArrow, { color: colors.brandBlue }]}>➔</Text>
          <View style={[styles.genericCard, { backgroundColor: colors.emeraldLight }]}>
            <Text style={[styles.genericCardTag, { color: colors.emerald }]}>VERIFIED OUTCOME</Text>
            <Text style={[styles.genericCardVal, { color: colors.emerald }]} numberOfLines={2}>
              {question.correct}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardSubBg, borderColor: colors.borderSubtle }]}>
      <View style={[styles.header, { borderBottomColor: colors.borderSubtle }]}>
        <Text style={styles.icon}>📐</Text>
        <Text style={[styles.headerTitle, { color: colors.brandBlue }]}>Visual Solution Model</Text>
        <View style={[styles.topicBadge, { backgroundColor: colors.brandBlueLight }]}>
          <Text style={[styles.topicBadgeText, { color: colors.brandBlue }]}>{question.module_name}</Text>
        </View>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    marginVertical: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  icon: {
    fontSize: 14,
  },
  headerTitle: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    flex: 1,
  },
  topicBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  topicBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  visBody: {
    paddingTop: 8,
    gap: 8,
  },
  visSubTitle: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  treeTierContainer: {
    gap: 4,
    alignItems: 'center',
    paddingVertical: 4,
  },
  treeTier: {
    width: '100%',
    padding: 8,
    borderRadius: 8,
    borderLeftWidth: 3,
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
  },
  tierLabel: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  tierNode: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  tierNodeWinner: {
    fontSize: 11.5,
    fontWeight: '800',
    marginTop: 2,
  },
  treeConnector: {
    fontSize: 12,
    fontWeight: '900',
  },
  compassSvgRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 4,
  },
  compassInfo: {
    gap: 6,
    flex: 1,
    marginLeft: 10,
  },
  vectorPill: {
    padding: 8,
    borderRadius: 8,
    gap: 2,
  },
  vectorLabel: {
    fontSize: 9,
    fontWeight: '800',
  },
  vectorFormula: {
    fontSize: 11,
    fontWeight: '700',
  },
  vectorResult: {
    fontSize: 12,
    fontWeight: '800',
  },
  resolutionBanner: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  resText: {
    fontSize: 11,
    fontWeight: '800',
  },
  alligationGrid: {
    gap: 6,
    paddingVertical: 4,
  },
  alligRow: {
    flexDirection: 'row',
    gap: 8,
  },
  alligBox: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  alligBoxLabel: {
    fontSize: 9.5,
    fontWeight: '700',
  },
  alligBoxVal: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 2,
  },
  alligCenterRow: {
    alignItems: 'center',
  },
  alligCenterPill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
  },
  alligCenterLabel: {
    fontSize: 10,
    fontWeight: '800',
  },
  genericRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  genericCard: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    gap: 2,
  },
  genericCardTag: {
    fontSize: 8.5,
    fontWeight: '800',
  },
  genericCardVal: {
    fontSize: 11,
    fontWeight: '700',
  },
  genericArrow: {
    fontSize: 14,
    fontWeight: '900',
  },
});
