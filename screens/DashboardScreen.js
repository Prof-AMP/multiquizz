import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import quizzes from '../data/quizzes.json'; // arquivo local com os quizzes

export default function DashboardScreen({ navigation }) {
  const [dadosQuizzes, setDadosQuizzes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(true); // opcional: para indicar conexão

  useEffect(() => {
    // Simulando carregamento local
    setDadosQuizzes(quizzes);
    setLoading(false);
    setConnected(true);
  }, []);

  const renderQuiz = ({ item }) => (
    <TouchableOpacity
      style={styles.setorItem}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={40} color="#00bf63" style={styles.setorIcon} />
      <Text style={styles.setorText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00bf63" />
        <Text>Carregando quizzes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quiz App IFAM</Text>
        <View style={styles.separator} />
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Bem-vindo!</Text>
          <Icon name={connected ? 'wifi' : 'wifi-off'} size={30} color={connected ? 'green' : 'red'} />
        </View>
      </View>

      <View style={styles.setoresContainer}>
        <Text style={styles.sectionTitle}>Escolha um Quiz</Text>
        <FlatList
          data={dadosQuizzes}
          renderItem={renderQuiz}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#00bf63',
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
  },
  setoresContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  setorItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  setorText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  setorIcon: {
    marginBottom: 8,
  },
});
