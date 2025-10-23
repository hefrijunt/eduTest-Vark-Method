import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Discuss the basics and applications.',
    replies: 5,
  },
  {
    id: '2',
    title: 'Data Preprocessing Techniques',
    description: 'Share your best practices for cleaning data.',
    replies: 12,
  },
  {
    id: '3',
    title: 'Neural Networks Fundamentals',
    description: 'Explore activation functions and layers.',
    replies: 8,
  },
  {
    id: '4',
    title: 'Ethical AI Considerations',
    description: 'Debate on bias and fairness in models.',
    replies: 3,
  },
];

export default function Discuss() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.discussionCard}>
      <Text style={styles.discussionTitle}>{item.title}</Text>
      <Text style={styles.discussionDescription}>{item.description}</Text>
      <Text style={styles.repliesText}>{item.replies} Replies</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.header}>Discuss</Text>
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
  discussionCard: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  discussionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1A1A40',
    marginBottom: 8,
  },
  discussionDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    lineHeight: 20,
  },
  repliesText: {
    fontSize: 14,
    color: '#4B79FF',
    fontWeight: '600',
  },
});
