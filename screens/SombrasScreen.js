import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const backgroundImage = { uri: 'https://i.pinimg.com/564x/ab/74/42/ab7442ee6b012f77b81610fef91ba869.jpg' };

export default function SombrasScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Exército das Sombras</Text>

        <Text style={styles.name}>Igris</Text>
        <Image 
          source={{ uri: 'https://static.wikia.nocookie.net/solo-leveling/images/b/bd/Igris13.jpg/revision/latest?cb=20210901144428' }}
          style={styles.image}
        />

        <Text style={styles.name}>Beru</Text>
        <Image 
          source={{ uri: 'https://sf.ezoiccdn.com/ezoimgfmt/zumaki.co.in/wp-content/uploads/2024/02/the-ant-king-Solo-Leveling.jpeg?ezimgfmt=rs:382x382/rscb1/ngcb1/notWebP' }}
          style={styles.image}
        />

        <Text style={styles.name}>Bellion</Text>
        <Image 
          source={{ uri: 'https://static.wikia.nocookie.net/rpg-the-king-of-cartoons-2/images/0/0f/166Bellion_Grand_Marshal.jpg/revision/latest?cb=20230528085832&path-prefix=pt-br' }}
          style={styles.image}
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
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10,
    marginBottom: 20,
  },
});
