import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Welcome({navigation, route}){

    const {nome} = route.params || {};

    const handleRegister = () => {
        // Adicione sua lógica aqui
    };

    const backLogin = () => {
        navigation.navigate('Login', { nome: route.params.nome });
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                
                <View style={styles.voltar}>
                    <TouchableOpacity onPress={backLogin} style={styles.back}>
                        {/* Use o MaterialIcons em vez de Icon */}
                        <MaterialIcons name="arrow-back" size={30} color="#666" />
                    </TouchableOpacity>                
                </View>

                <View style={styles.imageEstudante}>
                    <Image
                        source={require('./assets/estudante.png')}
                        style={styles.estudante}
                    />
                </View>

                <View style={styles.espacoTexto}>
                    <Text style={styles.user}>Bem Vindo(a), {nome}!</Text>
                    <Text style={styles.texto}>
                        "Para personalizar sua experiência de
                        aprendizado, vamos começar com
                        um breve quiz sobre você. Pronto
                        para nos contar um pouco mais?"
                    </Text>
                </View>

                <TouchableOpacity onPress={handleRegister} style={styles.btnStart}>
                    <Text style={styles.buttonText}>Vamos Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Definindo o StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#13191f',
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: '#13191f',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    voltar: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    imageEstudante: {
        alignItems: 'center',
        marginBottom: 20,
    },
    estudante: {
        width: 380,
        height: 430,
    },
    espacoTexto: {
        marginBottom: 20,
        alignItems: 'center',
    },
    user: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#33c4fe',
        fontFamily: 'Poppins',
        marginBottom: 10,
    },
    texto: {
        width: '90%',
        fontSize: 14,
        textAlign: 'center',
        color: '#ddd',
        fontFamily: 'Poppins',
    },
    btnStart: {
        width: '70%',
        backgroundColor: '#33c4fe',
        padding: 11,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 50,
    },
    buttonText: {
        color: '#13191f',
        fontSize: 15,
        fontFamily: 'Poppins'
    },
});

