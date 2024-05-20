import React from 'react';
import { View, Text, Image, Button, StyleSheet, ImageBackground } from 'react-native';

const backgroundImage = { uri: 'https://i.pinimg.com/564x/ab/74/42/ab7442ee6b012f77b81610fef91ba869.jpg' };

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.name}>Sung Jin Woo</Text>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/26/46/bb/2646bb8aa77f9af182b84ad512bb4d79.jpg' }}
          style={styles.image}
        />
       <View style={styles.buttonContainer}>
          <Button
            title="Habilidades"
            onPress={() => navigation.navigate('Habilidades')}
          />
          <Button
            title="Sombras"
            onPress={() => navigation.navigate('Sombras')}
          />
        </View>
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
  name: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
