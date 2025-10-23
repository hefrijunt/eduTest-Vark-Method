import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
      <View style={styles.settingBox}>
        <Text style={styles.settingDescription}>Settings options will be available here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  settingBox: {
    backgroundColor: '#4B79FF',
    borderRadius: 16,
    padding: 20,
  },
  settingDescription: {
    fontSize: 16,
    color: '#E0E6FF',
  },
});
