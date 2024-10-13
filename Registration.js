// Registration.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Registration({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de registro, como validação e integração com backend
    // Após o registro, navegue para a tela de Login ou outra tela desejada
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('./assets/azurion.png')}
          style={styles.azurion}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Nome" 
          placeholderTextColor="#777" 
          value={nome} 
          onChangeText={setNome} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#777" 
          keyboardType="email-address" 
          value={email} 
          onChangeText={setEmail} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#777" 
          secureTextEntry={true} 
          value={senha} 
          onChangeText={setSenha} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Confirme a Senha" 
          placeholderTextColor="#777" 
          secureTextEntry={true} 
          value={confirmeSenha} 
          onChangeText={setConfirmeSenha} 
        />
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Já possui conta? 
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            {' '}Entrar
          </Text>
        </Text>
        <Text style={styles.divider}>Ou entre com</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('./assets/googles.webp')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
        <Text style={styles.terms}>
          Ao se cadastrar, você concorda com os 
          <Text style={styles.link}> Termos de Serviço</Text> e 
          <Text style={styles.link}> Acordo de Processamento de Dados</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13191f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#13191f',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  azurion: {
    width: 140,
    height: 25,
    marginBottom: 20,
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
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#33c4fe',
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#33c4fe',
    fontWeight: 'bold',
  },
  loginText: {
    color: '#a9a9b2',
    marginTop: 10,
  },
  link: {
    color: '#5ac8fa',
    textDecorationLine: 'underline',
  },
  divider: {
    color: '#33c4fe',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#13191f',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 40,
    height: 30,
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
