// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Registration'; // Tela de Cadastro
import Login from './login'; // Tela de Login
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'), // Substitua pelo nome exato da sua fonte
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
        <StatusBar
        barStyle="light-content" // Define a cor do texto da StatusBar como clara
        backgroundColor="transparent" // Define a cor de fundo da StatusBar como transparente
        translucent={false} // Faz a StatusBar se sobrepor ao conteúdo da tela
      />
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen 
          name="Registration" 
          component={Registration} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins', // Use o nome exato da sua fonte carregada
  },
});