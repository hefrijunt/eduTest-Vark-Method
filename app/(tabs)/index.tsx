import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const data = [
  {
    id: '1',
    title: 'Prior Knowledge',
    questions: 20,
    image: require('../../assets/images/knowledge.png'),
  },
  {
    id: '2',
    title: 'Data Mining',
    questions: 15,
    image: require('../../assets/images/mining.png'),
  },
  {
    id: '3',
    title: 'E-Commerce',
    questions: 25,
    image: require('../../assets/images/ecommerce.png'),
  },
  {
    id: '4',
    title: 'AI Engineer',
    questions: 18,
    image: require('../../assets/images/ai.png'),
  },
];

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 64) / 2;

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      onPress={() => {
        if (item.id === '1') {
          router.push('/prior-knowledge'); // arah ke halaman prior knowledge
        } else {
          // bisa ditambahkan rute lain nanti
          alert(`Navigasi ke ${item.title} belum diatur`);
        }
      }}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.questions} Soal</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Greeting Box */}
      <View style={styles.greetingBox}>
        <View>
          <Text style={styles.greetingText}>
            Hello <Text style={{ fontWeight: 'bold' }}>M. Said,</Text>
          </Text>
          <Text style={styles.subGreetingText}>
            Let’s Detect Your Learning Style
          </Text>
        </View>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={styles.profileImage}
        />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Improve Your Skills</Text>

      {/* Cards */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  greetingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4B79FF',
    padding: 30,
    borderRadius: 16,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  subGreetingText: {
    fontSize: 14,
    color: '#E0E6FF',
    marginTop: 6,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    color: '#0B0B34',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    color: '#1A1A40',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});
