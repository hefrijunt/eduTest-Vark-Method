import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ProfileIcon from '../../assets/images/icons/profile-icon.svg';
import TestResultsIcon from '../../assets/images/icons/report-icon.svg';
import SettingsIcon from '../../assets/images/icons/settings-icon.svg';
import FAQsIcon from '../../assets/images/icons/fq-icons.svg';
import ArrowIcon from '../../assets/images/icons/arrow-icons.svg';

import { SvgProps } from 'react-native-svg';

function MenuIcon({ Icon, color, size = 24 }: { Icon: React.FC<SvgProps>; color: string; size?: number }) {
  return <Icon width={size} height={size} fill={color} />;
}

export default function Settings() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={styles.profileBox}>
            <Image
              source={require('../../assets/images/avatar.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>M. Said</Text>
            <Text style={styles.profileEmail}>msaid@gmail.com</Text>
          </View>

          <TouchableOpacity style={styles.optionRow} onPress={() => router.push('/profile')}>
            <MenuIcon Icon={ProfileIcon} color="#333" />
            <Text style={styles.optionText}>Profile</Text>
            <MenuIcon Icon={ArrowIcon} color="#333" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow} onPress={() => router.push('/test-results')}>
            <MenuIcon Icon={TestResultsIcon} color="#333" />
            <Text style={styles.optionText}>Test results</Text>
            <MenuIcon Icon={ArrowIcon} color="#333" size={20} />
          </TouchableOpacity>

<TouchableOpacity style={styles.optionRow} onPress={() => router.push('/settings')}>
  <MenuIcon Icon={SettingsIcon} color="#333" />
  <Text style={styles.optionText}>Settings</Text>
  <MenuIcon Icon={ArrowIcon} color="#333" size={20} />
</TouchableOpacity>

          <TouchableOpacity style={styles.optionRow} onPress={() => router.push('/faqs')}>
            <MenuIcon Icon={FAQsIcon} color="#333" />
            <Text style={styles.optionText}>FAQs</Text>
            <MenuIcon Icon={ArrowIcon} color="#333" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.signOutButton}>
            <Text style={styles.signOutText} onPress={() => router.push("/signIn")}>Sign Out</Text>
          </TouchableOpacity>

          <View style={styles.footerText}>
            <Text style={{ fontSize: 14, color: '#444' }}>
              EduTest v1.0.0{'\n'}
              Powered by <Text style={{ fontWeight: 'bold' }}>rekandTech</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  profileBox: {
    backgroundColor: '#4B79FF',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileEmail: {
    fontSize: 14,
    color: '#E0E6FF',
    marginTop: 4,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  optionText: {
    flex: 1,
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  signOutButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  signOutText: {
    color: '#FF6700',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerText: {
    marginTop: 36,
    alignItems: 'center',
  },
});
