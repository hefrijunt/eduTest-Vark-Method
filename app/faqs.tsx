import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FAQs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQs</Text>
      <View style={styles.faqBox}>
        <Text style={styles.faqDescription}>Frequently Asked Questions will be displayed here.</Text>
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
  faqBox: {
    backgroundColor: '#4B79FF',
    borderRadius: 16,
    padding: 20,
  },
  faqDescription: {
    fontSize: 16,
    color: '#E0E6FF',
  },
});
