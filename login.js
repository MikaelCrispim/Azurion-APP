import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login({navigation, route}) {

    const {nome} = route.params;
  
    const handleRegister = () => {
      // Aqui você pode adicionar a lógica de registro, como validação e integração com backend
      // Após o registro, navegue para a tela de Login ou outra tela desejada
      navigation.navigate('Welcome', {nome});
    };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/azurion.png')}
            style={styles.azurion}
          />
        </View>
        
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#777" 
          keyboardType="email-address" 
          // value={email} 
          // onChangeText={setEmail} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#777" 
          secureTextEntry={true} 
          // value={senha} 
          // onChangeText={setSenha} 
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      <Text style={styles.loginText}>
          Não possui conta? 
          <Text style={styles.link} onPress={() => navigation.navigate('Registration')}>
            {' '}Cadastrar
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    backgroundColor: '#13191f',
  },
  azurion: {
    width: 170,
    height: 40,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  imageContainer: {
    width:'100%'
  },
  card: {
    backgroundColor: '#13191f',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
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
    width: '80%',
    height:'7%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent:'center'
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: '#33c4fe',
    fontWeight: 'bold',
    fontSize:'16px'
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
    width:'80%',
  },
});
