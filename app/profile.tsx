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

const PhoneIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.13z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EmailIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 4h16v16H4z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M22 6l-10 7L2 6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CalendarIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function Profile() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <ArrowIcon />
      </TouchableOpacity>
      <View style={styles.profileBox}>
        <Image
          source={require('../assets/images/avatar.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>M. Said</Text>
        <Text style={styles.profileEmail}>msaid@gmail.com</Text>
      </View>
      <View style={styles.infoBox}>
        <PhoneIcon />
        <Text style={styles.infoLabel}>Nomor Telepon</Text>
        <Text style={styles.infoValue}>0822-****-**11</Text>
      </View>
      <View style={styles.infoBox}>
        <EmailIcon />
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>msaid@gmail.com</Text>
      </View>
      <View style={styles.infoBox}>
        <CalendarIcon />
        <Text style={styles.infoLabel}>Tanggal Lahir</Text>
        <Text style={styles.infoValue}>20-01-2001</Text>
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
  profileBox: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#999',
  },
});
