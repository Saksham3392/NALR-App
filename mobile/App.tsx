import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { AppProvider, useApp } from './src/context/AppContext';
import { PracticeScreen } from './src/screens/PracticeScreen';

const MainShell: React.FC = () => {
  const { isReady, colors } = useApp();

  if (!isReady) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.appBg }]}>
        <View style={styles.brandCluster}>
          <Text style={[styles.brand1, { color: colors.textPrimary }]}>NAL</Text>
          <Text style={[styles.brand2, { color: colors.brandBlue }]}>R</Text>
        </View>
        <Text style={[styles.loadingSubtitle, { color: colors.textSecondary }]}>
          Numerical Aptitude & Logical Reasoning (25UNI0110)
        </Text>
        <ActivityIndicator size="small" color={colors.brandBlue} style={styles.spinner} />
      </View>
    );
  }

  return <PracticeScreen />;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <MainShell />
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  brandCluster: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand1: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1,
  },
  brand2: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1,
  },
  loadingSubtitle: {
    fontSize: 12,
    fontWeight: '700',
  },
  spinner: {
    marginTop: 14,
  },
});
