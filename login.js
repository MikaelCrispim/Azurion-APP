// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Text>Esta é a página de detalhes do aplicativo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});
