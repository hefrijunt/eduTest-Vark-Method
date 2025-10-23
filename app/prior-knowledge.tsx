import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const varkQuestions = [
  {
    question: 'Saya ingat sesuatu yang lebih baik jika:',
    options: [
      'Saya melihat diagram atau sketsa.',
      'Saya mendengar penjelasan.',
      'Saya membaca teks.',
      'Saya melakukan praktik.',
    ],
  },
  {
    question: 'Saat belajar, saya lebih suka:',
    options: [
      'Melihat video atau gambar.',
      'Mendengarkan podcast.',
      'Membaca buku.',
      'Berpartisipasi dalam diskusi.',
    ],
  },
  {
    question: 'Untuk memahami prosedur, saya:',
    options: [
      'Melihat demonstrasi visual.',
      'Mendengar instruksi lisan.',
      'Membaca panduan tertulis.',
      'Mencoba sendiri.',
    ],
  },
  {
    question: 'Saya lebih mudah mengingat:',
    options: [
      'Peta atau grafik.',
      'Cerita yang diceritakan.',
      'Daftar atau catatan.',
      'Sensasi fisik.',
    ],
  },
  {
    question: 'Saat bepergian, saya lebih suka:',
    options: [
      'Melihat peta.',
      'Bertanya arah.',
      'Membaca petunjuk.',
      'Berjalan untuk melihat.',
    ],
  },
  {
    question: 'Untuk mengingat nama, saya:',
    options: [
      'Membayangkan wajah.',
      'Mengulang nama.',
      'Menuliskan nama.',
      'Mengaitkan dengan gerakan.',
    ],
  },
  {
    question: 'Saya belajar bahasa asing dengan:',
    options: [
      'Melihat gambar.',
      'Mendengar percakapan.',
      'Membaca teks.',
      'Berlatih berbicara.',
    ],
  },
  {
    question: 'Untuk memecahkan masalah, saya:',
    options: [
      'Menggambar diagram.',
      'Mendiskusikan.',
      'Mencari referensi.',
      'Eksperimen.',
    ],
  },
  {
    question: 'Saya lebih suka instruksi yang:',
    options: [
      'Diberikan dengan visual.',
      'Diucapkan.',
      'Ditulis.',
      'Dijelaskan sambil melakukan.',
    ],
  },
  {
    question: 'Untuk mengingat informasi, saya:',
    options: [
      'Membuat mind map.',
      'Mendengarkan rekaman.',
      'Mencatat poin-poin.',
      'Menggunakan model fisik.',
    ],
  },
  {
    question: 'Saya lebih suka presentasi yang:',
    options: [
      'Menggunakan slide dengan gambar.',
      'Diceritakan dengan suara jelas.',
      'Diberikan handout tertulis.',
      'Melibatkan demonstrasi langsung.',
    ],
  },
  {
    question: 'Ketika membaca, saya:',
    options: [
      'Membayangkan ilustrasi.',
      'Membaca keras-keras.',
      'Mencatat ringkasan.',
      'Menggerakkan tangan mengikuti teks.',
    ],
  },
  {
    question: 'Untuk belajar keterampilan baru, saya:',
    options: [
      'Menonton tutorial video.',
      'Mendengarkan instruksi audio.',
      'Membaca manual.',
      'Mencoba langsung.',
    ],
  },
  {
    question: 'Saya mengingat fakta dengan:',
    options: [
      'Diagram alur.',
      'Mendiskusikan dengan orang lain.',
      'Menulis ulang.',
      'Mengaitkan dengan pengalaman.',
    ],
  },
  {
    question: 'Di kelas, saya lebih suka:',
    options: [
      'Melihat papan tulis dengan gambar.',
      'Mendengar guru berbicara.',
      'Membaca catatan.',
      'Berpartisipasi dalam aktivitas.',
    ],
  },
  {
    question: 'Untuk memahami konsep, saya:',
    options: [
      'Membuat sketsa.',
      'Mendengarkan penjelasan.',
      'Membaca definisi.',
      'Menerapkan dalam praktik.',
    ],
  },
  {
    question: 'Saya lebih suka buku yang:',
    options: [
      'Banyak ilustrasi.',
      'Audio book.',
      'Teks padat.',
      'Dengan latihan interaktif.',
    ],
  },
  {
    question: 'Ketika mempelajari sejarah, saya:',
    options: [
      'Melihat timeline visual.',
      'Mendengar cerita.',
      'Membaca kronologi.',
      'Mengunjungi situs.',
    ],
  },
  {
    question: 'Untuk mengingat rumus, saya:',
    options: [
      'Menggambar representasi.',
      'Mengulang secara lisan.',
      'Menulis berulang.',
      'Menggunakan dalam contoh nyata.',
    ],
  },
  {
    question: 'Saya belajar musik dengan:',
    options: [
      'Melihat notasi.',
      'Mendengar lagu.',
      'Membaca teori.',
      'Memainkan instrumen.',
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#0B0B34',
    flex: 1,
  },
  // Intro styles
  introContainer: {
    padding: 24,
  },
  testCard: {
    backgroundColor: '#4B79FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  testTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumber: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B79FF',
  },
  stepText: {
    fontSize: 14,
    color: '#fff',
    flex: 1,
  },
  stepIcon: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 20,
  },
  varkCard: {
    backgroundColor: '#FF9500',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  varkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  varkIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  varkIcon: {
    fontSize: 24,
    color: '#fff',
  },
  varkText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: '#4B79FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Quiz styles
  quizContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B0B34',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    color: '#0B0B34',
    lineHeight: 24,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  bubble: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4B79FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bubbleSelected: {
    backgroundColor: '#4B79FF',
  },
  bubbleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4B79FF',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  nextButton: {
    backgroundColor: '#4B79FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  nextButtonTextDisabled: {
    color: '#9CA3AF',
  },
  // Result styles
  resultContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0B0B34',
  },
  resultText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  recommendation: {
    backgroundColor: '#E8F5E8',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  recommendationText: {
    fontSize: 14,
    color: '#2E7D32',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default function PriorKnowledge() {
  const router = useRouter();
  const [screen, setScreen] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState({ V: 0, A: 0, R: 0, K: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleStartQuiz = () => {
    setScreen('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
    setScores({ V: 0, A: 0, R: 0, K: 0 });
    setSelectedOption(null);
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < varkQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Calculate scores
      let v = 0, a = 0, r = 0, k = 0;
      const styles = ['V', 'A', 'R', 'K'];
      newAnswers.forEach(ans => {
        if (styles[ans] === 'V') v++;
        else if (styles[ans] === 'A') a++;
        else if (styles[ans] === 'R') r++;
        else if (styles[ans] === 'K') k++;
      });
      setScores({ V: v, A: a, R: r, K: k });
      setScreen('result');
    }
  };

  const getDominantStyle = () => {
    const maxScore = Math.max(scores.V, scores.A, scores.R, scores.K);
    if (scores.V === maxScore) return 'Visual';
    if (scores.A === maxScore) return 'Aural';
    if (scores.R === maxScore) return 'Read/Write';
    return 'Kinesthetic';
  };

  const getRecommendation = (style: string) => {
    const recs = {
      Visual: 'Rekomendasi strategi belajar: Gunakan diagram dan video.',
      Aural: 'Rekomendasi strategi belajar: Dengarkan penjelasan dan diskusi.',
      'Read/Write': 'Rekomendasi strategi belajar: Baca teks dan tulis catatan.',
      Kinesthetic: 'Rekomendasi strategi belajar: Lakukan praktik dan simulasi.',
    };
    return recs[style as keyof typeof recs] || '';
  };

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Prior Knowledge</Text>
    </View>
  );

  if (screen === 'intro') {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.introContainer}>
          {/* Test Prior Knowledge Card */}
          <View style={styles.testCard}>
            <Text style={styles.testTitle}>Test Prior Knowledge</Text>
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepText}>Getting to know your data</Text>
              <Ionicons name="cloud-upload-outline" style={styles.stepIcon} />
            </View>
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepText}>Mining frequent patterns</Text>
              <Ionicons name="trending-up-outline" style={styles.stepIcon} />
            </View>
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepText}>Classification patterns</Text>
              <Ionicons name="bar-chart-outline" style={styles.stepIcon} />
            </View>
            <Ionicons name="chevron-forward" style={styles.arrowIcon} />
          </View>

          {/* VARK Card */}
          <View style={styles.varkCard}>
            <Text style={styles.varkTitle}>VARK Styles of Learning</Text>
            <View style={styles.varkIcons}>
              <Ionicons name="eye-outline" style={styles.varkIcon} />
              <Ionicons name="volume-high-outline" style={styles.varkIcon} />
              <Ionicons name="book-outline" style={styles.varkIcon} />
              <Ionicons name="hand-right-outline" style={styles.varkIcon} />
            </View>
            <Text style={styles.varkText}>Hasil deteksi gaya belajar anda:{'\n'}</Text>
            <Text style={styles.varkText}>Visual</Text>
            <Text style={styles.varkText}>Rekomendasi strategi belajar visual seperti diagram dan video.</Text>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
            <Text style={styles.startButtonText}>Mulai Test</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === 'quiz') {
    const question = varkQuestions[currentQuestion];
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.quizContainer}>
          <View>
            <Text style={styles.progressText}>
              Pertanyaan {currentQuestion + 1}/{varkQuestions.length}
            </Text>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionContainer}
                onPress={() => handleOptionSelect(index)}
              >
                <View style={[styles.bubble, selectedOption === index && styles.bubbleSelected]}>
                  {selectedOption === index && <View style={styles.bubbleDot} />}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[
              styles.nextButton,
              selectedOption === null && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={selectedOption === null}
          >
            <Text style={[
              styles.nextButtonText,
              selectedOption === null && styles.nextButtonTextDisabled,
            ]}>
              {currentQuestion < varkQuestions.length - 1 ? 'Next' : 'Finish'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (screen === 'result') {
    const dominant = getDominantStyle();
    const recommendation = getRecommendation(dominant);
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Hasil Test</Text>
          <Text style={styles.resultText}>
            Gaya belajar dominan Anda adalah {dominant}.
          </Text>
          <View style={styles.recommendation}>
            <Text style={styles.recommendationText}>{recommendation}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return null;
}
