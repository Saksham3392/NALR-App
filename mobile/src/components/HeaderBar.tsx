import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';
import { TermId } from '../types';

interface HeaderBarProps {
  onOpenSettings: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ onOpenSettings }) => {
  const { currentTermId, switchTerm, colors, isDarkMode } = useApp();

  const terms: { id: TermId; label: string }[] = [
    { id: 'st1', label: 'ST1' },
    { id: 'st2', label: 'ST2' },
    { id: 'endterm', label: 'End Term' },
  ];

  const handleSwitchTerm = (termId: TermId) => {
    if (termId !== currentTermId) {
      try {
        Haptics.selectionAsync();
      } catch {}
      switchTerm(termId);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
      {/* Brand Cluster on the Left */}
      <View style={styles.brandCluster}>
        <View style={styles.brandRow}>
          <Text style={[styles.brandPart1, { color: colors.textPrimary }]}>NAL</Text>
          <Text style={[styles.brandPart2, { color: colors.brandBlue }]}>R</Text>
        </View>
        <Text style={[styles.brandSubtitle, { color: colors.textMuted }]}>25UNI0110</Text>
      </View>

      {/* Apple-inspired Segmented Control in the Center */}
      <View style={[styles.segmentedControl, { backgroundColor: colors.cardSubBg }]}>
        {terms.map(t => {
          const isActive = currentTermId === t.id;
          return (
            <TouchableOpacity
              key={t.id}
              activeOpacity={0.8}
              onPress={() => handleSwitchTerm(t.id)}
              style={[
                styles.segmentBtn,
                isActive && [
                  styles.segmentBtnActive,
                  {
                    backgroundColor: isDarkMode ? '#3A3A3C' : '#FFFFFF',
                    shadowColor: colors.shadowColor,
                  },
                ],
              ]}
            >
              <Text
                style={[
                  styles.segmentText,
                  {
                    color: isActive
                      ? colors.textPrimary
                      : colors.textSecondary,
                    fontWeight: isActive ? '700' : '500',
                  },
                ]}
              >
                {t.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Settings Icon Button on the Right */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          try {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          } catch {}
          onOpenSettings();
        }}
        style={[styles.settingsBtn, { backgroundColor: colors.cardSubBg }]}
        accessibilityLabel="Open Settings"
      >
        <Text style={[styles.settingsIcon, { color: colors.textSecondary }]}>⚙</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 10,
    gap: 8,
  },
  brandCluster: {
    justifyContent: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  brandPart1: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  brandPart2: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  brandSubtitle: {
    fontSize: 9.5,
    fontWeight: '600',
    letterSpacing: 0.2,
    marginTop: -1,
  },
  segmentedControl: {
    flexDirection: 'row',
    borderRadius: 999,
    padding: 2.5,
    alignItems: 'center',
  },
  segmentBtn: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentBtnActive: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  segmentText: {
    fontSize: 12,
    letterSpacing: -0.1,
  },
  settingsBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    fontSize: 17,
  },
});
