import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import SombrasScreen from './screens/SombrasScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Habilidades" component={HabilidadesScreen} />
        <Stack.Screen name="Sombras" component={SombrasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
