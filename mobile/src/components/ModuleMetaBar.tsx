import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';

interface ModuleMetaBarProps {
  onOpenBrowse: () => void;
}

export const ModuleMetaBar: React.FC<ModuleMetaBarProps> = ({ onOpenBrowse }) => {
  const { currentModules, colors } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text style={[styles.heading, { color: colors.textPrimary }]}>QUESTION TYPES</Text>
        <View style={[styles.moduleCountBadge, { backgroundColor: colors.cardSubBg }]}>
          <Text style={[styles.moduleCountText, { color: colors.textSecondary }]}>
            {currentModules.length} Modules
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          try {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          } catch {}
          onOpenBrowse();
        }}
        style={[
          styles.browseBtn,
          {
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.browseText, { color: colors.brandBlue }]}>Browse All</Text>
        <Text style={[styles.browseChevron, { color: colors.brandBlue }]}>▾</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginBottom: 8,
    marginTop: 4,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  heading: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  moduleCountBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 999,
  },
  moduleCountText: {
    fontSize: 11,
    fontWeight: '600',
  },
  browseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
    gap: 4,
  },
  browseText: {
    fontSize: 12,
    fontWeight: '700',
  },
  browseChevron: {
    fontSize: 10,
    fontWeight: '700',
  },
});
