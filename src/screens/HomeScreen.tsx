import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { colors, spacing, typography } from '../theme';

const FEATURES = [
  { title: 'React Navigation', description: 'Type-safe stack and tab navigation' },
  { title: 'Redux Toolkit', description: 'State management with RTK Query' },
  { title: 'TypeScript', description: 'Strict type checking enabled' },
  { title: 'Dark Theme', description: 'Consistent dark UI throughout' },
];

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>React Native Starter</Text>

        <Card style={styles.heroCard}>
          <Text style={styles.heroTitle}>Get Started</Text>
          <Text style={styles.heroDescription}>
            A production-ready template with Expo, TypeScript, React Navigation,
            and Redux Toolkit. Edit the screens in src/screens to build your app.
          </Text>
        </Card>

        <Text style={styles.sectionTitle}>Included Features</Text>

        {FEATURES.map((feature, index) => (
          <Card key={index} style={styles.featureCard}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  title: {
    ...typography.h1,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.secondary,
    marginBottom: spacing.lg,
  },
  heroCard: {
    marginBottom: spacing.xl,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  heroTitle: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  heroDescription: {
    ...typography.body,
    color: colors.text.secondary,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  featureCard: {
    marginBottom: spacing.md,
  },
  featureTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    ...typography.caption,
    color: colors.text.secondary,
  },
});
