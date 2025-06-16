import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const perguntas = [
  {
    pergunta: 'Qual hook é usado para estados?',
    opcoes: ['useEffect', 'useState', 'useContext'],
    correta: 1
  },
  {
    pergunta: 'Qual comando cria um app com Expo?',
    opcoes: ['npx react-native init', 'npx expo init', 'npm start'],
    correta: 1
  }
];

export default function QuizGrupo1({ navigation }) {
  const [index, setIndex] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [fim, setFim] = useState(false);

  const responder = (i) => {
    if (i === perguntas[index].correta) setPontos(pontos + 1);
    if (index + 1 < perguntas.length) {
      setIndex(index + 1);
    } else {
      setFim(true);
    }
  };

  return (
    <View style={styles.container}>
      {fim ? (
        <View>
          <Text style={styles.resultado}>Você acertou {pontos} de {perguntas.length}</Text>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.textoBotao}>Voltar ao Inicio</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.pergunta}>{perguntas[index].pergunta}</Text>
          {perguntas[index].opcoes.map((op, i) => (
            <TouchableOpacity key={i} style={styles.botao} onPress={() => responder(i)}>
              <Text style={styles.textoBotao}>{op}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  pergunta: { fontSize: 22, marginBottom: 20 },
  botao: {
    backgroundColor: '#00bf63',
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
  },
  textoBotao: { color: '#fff', fontSize: 18, textAlign: 'center' },
  resultado: { fontSize: 26, textAlign: 'center' },
});
