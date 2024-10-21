import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Image, Icon} from 'react-native';

export default function Welcome({navigation}){

    const handleRegister = () => {

    };

    const backRegister = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                
                <View style={styles.voltar}>
                    <TouchableOpacity onPress={backRegister} style={styles.back}>
                    <Icon name="arrow-back" size={30} color="#000" />
                    </TouchableOpacity>                
                </View>

                <View style={styles.imageEstudante}>
                    <Image
                        source={require('./assets/estudante.png')}
                        style={styles.estudante}
                    />
                </View>


                <View style={styles.espacoTexto}>
                    <Text style={styles.user}>Bem Vindo(a) Michele</Text>
                    <Text style={styles.texto}>
                        "Para personalizar sua experiência de
                        aprendizado, vamos começar com
                        um breve quiz cobre você. Pronto
                        para nos contar um pouco mais?"
                    </Text>
                </View>

                <TouchableOpacity onPress={handleRegister} style={styles.btnStart}>
                    <Text style={styles.buttonText}>Vamos Começar</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.card3}>
                
            </View>

            <View style={styles.card4}>
                
            </View> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#172128',
    },
    voltar: {
        width: "100%",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    card:{
        alignItems: 'center',
    },
    user: {
        width: '100%',
        fontSize: '25px',
        fontFamily: 'Poppins',
        color: '#33c4fe',
        margin: 10,
    },
    btnStart: {
        backgroundColor: '#33c4fe',
        padding: 12,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#33c4fe',
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins',
        color: '#000',
        fontWeight: 'bold',
        fontSize:'16px'
    },
    buttonBack: {
        color: 'white',
    },
    espacoTexto: {
        display: 'flex',
        textAlign: 'center',
        width: '50%',
    },
    texto: {
        fontFamily: 'Poppins',
        color: 'white',
    },
})