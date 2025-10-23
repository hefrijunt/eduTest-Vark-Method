import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: '1',
    user: 'John Doe',
    preview: 'Hey, have you checked the latest assignment?',
    time: '2:30 PM',
    avatar: require('../../assets/images/avatar.jpg'), // Reuse avatar for placeholder
    unread: 2,
  },
  {
    id: '2',
    user: 'Jane Smith',
    preview: 'Regarding the project deadline...',
    time: '1:15 PM',
    avatar: require('../../assets/images/avatar.jpg'),
    unread: 0,
  },
  {
    id: '3',
    user: 'Mike Johnson',
    preview: 'Need help with the code snippet.',
    time: '10:45 AM',
    avatar: require('../../assets/images/avatar.jpg'),
    unread: 1,
  },
  {
    id: '4',
    user: 'Sarah Lee',
    preview: 'Thanks for the feedback!',
    time: '9:20 AM',
    avatar: require('../../assets/images/avatar.jpg'),
    unread: 0,
  },
];

export default function Message() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.messageCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.userName}>{item.user}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.previewText} numberOfLines={1}>{item.preview}</Text>
      </View>
      {item.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.header}>Messages</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#0B0B34',
  },
  messageCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1A1A40',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  previewText: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
  unreadBadge: {
    backgroundColor: '#4B79FF',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
