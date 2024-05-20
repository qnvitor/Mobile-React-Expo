import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';

const backgroundImage = { uri: 'https://i.pinimg.com/564x/ab/74/42/ab7442ee6b012f77b81610fef91ba869.jpg' };

const habilidades = [
  'Necromancia',
  'Características Físicas Sobre-Humanas',
  'Regeneração',
  'Amplificação de Status',
  'Manipulação de Chi',
  'Invisibilidade',
  'Absorção de Poder',
  'Telecinese',
  'Cura',
  'Manipulação de Veneno',
  'Manipulação Material (Petrificação)',
  'Imortalidade (Rank 2)',
  'Teletransporte',
  'Manipulação do Espaço',
  'Pode apagar alguém da existência',
];

export default function HabilidadesScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades</Text>
        <FlatList
          data={habilidades}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
});
