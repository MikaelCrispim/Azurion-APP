import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function welcome({navigation}){

    const handleRegister = () => {

    };

    const backRegister = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card1}>
                <TouchableOpacity onPress={backRegister} style={styles.back}>
                   <Text style={styles.buttonBack}> k-- </Text>
                </TouchableOpacity>                
            </View>

            <View style={styles.card2}>
                <View style={styles.imageEstudante}>
                    <Image
                        source={require('./assets/estudante.png')}
                        style={styles.estudante}
                    />
                </View>
            </View>

            <View style={styles.card3}>
                
            </View>

            <View style={styles.card4}>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#13191f',
    },

})