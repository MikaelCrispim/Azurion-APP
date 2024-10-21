// App.js
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Registration from './Registration'; // Tela de Cadastro
// import Login from './login'; // Tela de Login
import Welcome from './welcome'; // Tela de Bem-Vindo(a)
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { MaterialIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'MaterialIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Mantenha a tela de splash visível enquanto as fontes são carregadas
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Após o carregamento dos recursos, esconda a splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
        <StatusBar
        barStyle="light-content" // Define a cor do texto da StatusBar como clara
        backgroundColor="transparent" // Define a cor de fundo da StatusBar como transparente
        translucent={false} // Faz a StatusBar se sobrepor ao conteúdo da tela
      />
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        {/* <Stack.Screen 
          name="Registration" 
          component={Registration} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
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