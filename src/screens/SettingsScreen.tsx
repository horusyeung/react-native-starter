import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { colors, spacing, typography } from '../theme';

interface SettingToggle {
  key: string;
  label: string;
  description: string;
}

const SETTINGS: SettingToggle[] = [
  {
    key: 'notifications',
    label: 'Push Notifications',
    description: 'Receive push notifications for updates',
  },
  {
    key: 'darkMode',
    label: 'Dark Mode',
    description: 'Use dark theme throughout the app',
  },
  {
    key: 'biometrics',
    label: 'Biometric Login',
    description: 'Use Face ID or fingerprint to sign in',
  },
  {
    key: 'analytics',
    label: 'Usage Analytics',
    description: 'Help improve the app by sharing usage data',
  },
];

export const SettingsScreen: React.FC = () => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    notifications: true,
    darkMode: true,
    biometrics: false,
    analytics: false,
  });

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Manage your preferences</Text>

        <Card>
          {SETTINGS.map((setting, index) => (
            <View key={setting.key}>
              {index > 0 && <View style={styles.divider} />}
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingLabel}>{setting.label}</Text>
                  <Text style={styles.settingDescription}>
                    {setting.description}
                  </Text>
                </View>
                <Switch
                  value={toggles[setting.key]}
                  onValueChange={() => handleToggle(setting.key)}
                  trackColor={{
                    false: colors.text.muted,
                    true: colors.primary,
                  }}
                  thumbColor={colors.text.primary}
                />
              </View>
            </View>
          ))}
        </Card>

        <Text style={styles.version}>Version 0.1.0</Text>
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
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  settingLabel: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingDescription: {
    ...typography.caption,
    color: colors.text.muted,
  },
  version: {
    ...typography.caption,
    color: colors.text.muted,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
