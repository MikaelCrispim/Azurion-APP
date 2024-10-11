// App.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>azurion</Text>
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#777" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#777" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#777" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirme a Senha" placeholderTextColor="#777" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Já possui conta? <Text style={styles.link}>Entrar</Text>
        </Text>
        <Text style={styles.divider}>Ou entre com</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_"G"_Logo.svg/512px-Google_"G"_Logo.svg.png' }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
        <Text style={styles.terms}>
          Ao se cadastrar, você concorda com os <Text style={styles.link}>Termos de Serviço</Text> e <Text style={styles.link}>Acordo de Processamento de Dados</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f0f17',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1b1b32',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    color: '#5ac8fa',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#29293e',
    color: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#5ac8fa',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginText: {
    color: '#a9a9b2',
    marginTop: 10,
  },
  link: {
    color: '#5ac8fa',
  },
  divider: {
    color: '#a9a9b2',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#29293e',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  googleButtonText: {
    color: '#fff',
  },
  terms: {
    color: '#a9a9b2',
    fontSize: 12,
    marginTop: 15,
    textAlign: 'center',
  },
});
