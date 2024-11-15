import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';

const AppSettings = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>App Settings</Text>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() => setNotificationsEnabled(!isNotificationsEnabled)}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={() => setDarkModeEnabled(!isDarkModeEnabled)}
        />
      </View>

      {/* Add more toggles as needed */}
    </ScrollView>
  );
};

export default AppSettings;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  setting: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomColor: '#eee', borderBottomWidth: 1 },
  settingText: { fontSize: 16, color: '#333' },
});
