import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 18l-6-6 6-6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function TestResults() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <ArrowIcon />
      </TouchableOpacity>
      <Text style={styles.title}>Test Result</Text>
      <View style={styles.banner}>
        <Image
          source={require('../assets/images/knowledge.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />
        <Text style={styles.bannerText}>Test Prior Knowledge</Text>
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
  backButton: {
    marginBottom: 24,
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B79FF',
    borderRadius: 16,
    padding: 20,
  },
  bannerImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
