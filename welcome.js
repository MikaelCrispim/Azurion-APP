import React, { useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default function Welcome({navigation, route}){

     

    const pages = [
        {
          id: 1,
          image: require('./assets/estudante.png'),
          title: 'Bem-vindo ao App!',
          description: 'Aqui você aprenderá como otimizar seus estudos.',
        },
        {
          id: 2,
          image: require('./assets/estudante.png'),
          title: 'Aproveite os recursos!',
          description: 'Explore as ferramentas exclusivas que oferecemos.',
        },
        {
          id: 3,
          image: require('./assets/estudante.png'),
          title: 'Comece agora!',
          description: 'Inicie sua jornada de aprendizado e conquiste seus objetivos.',
        },
      ];
    const scrollViewRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    
    const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width); // Calcula a página atual
    setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
          scrollViewRef.current.scrollTo({ x: (currentPage + 1) * width, animated: true });
          setCurrentPage(currentPage + 1);
        } 
        if (currentPage == 2){
            navigation.navigate('Login'); //colocar a prox pagina aqui
        }
      };
    
    const handlePreviousPage = () => {
        if (currentPage > 0) {
          scrollViewRef.current.scrollTo({ x: (currentPage - 1) * width, animated: true });
          setCurrentPage(currentPage - 1);
        }
      };
    
    const {nome} = route.params || {};

    const handleRegister = () => {
        // Adicione sua lógica aqui
    };

    const backLogin = () => {
        navigation.navigate('Login', { nome: route.params.nome });
    };

    return (
        

        <View style={styles.container}>
            {/* ScrollView horizontal para o carrossel */}
            

            <View style={styles.card}>
                
                <View style={styles.voltar}>
                    <TouchableOpacity onPress={backLogin} style={styles.back}>
                        {/* Use o MaterialIcons em vez de Icon */}
                        <MaterialIcons name="arrow-back" size={30} color="#666" />
                    </TouchableOpacity>                
                </View>
                <View style={styles.espacoTexto}>
                    <Text style={styles.user}>Bem Vindo(a), {nome}!</Text>
                    <Text style={styles.texto}>
                    Nosso app foi desenvolvido para ajudar você a estudar de forma mais eficiente.
                    </Text>
                </View>
                {/* <View style={styles.imageEstudante}>
                    <Image
                        source={require('./assets/estudante.png')}
                        style={styles.estudante}
                    />
                </View>

                <View style={styles.espacoTexto}>
                    <Text style={styles.user}>Bem Vindo(a), {nome}!</Text>
                    <Text style={styles.texto}>
                    Nosso app foi desenvolvido para ajudar você a estudar de forma mais eficiente.
                    </Text>
                </View> */}

                {/* <View style={styles.displayHB}>  */}
                <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16} // Controle de eventos de scroll
                >
                {pages.map((page) => (
                <View key={page.id} style={styles.page}>
                    <Image source={page.image} style={styles.pageImage} />
                    <Text style={styles.texto}>{page.title}</Text>
                    <Text style={styles.texto}>{page.description}</Text>
                </View>
                ))}
            </ScrollView>
            
            
                {/* Indicador de bolinhas */}
                <View style={styles.indicatorContainer}>
                    {pages.map((page, index) => (
                    <View
                        key={page.id}
                        style={[
                        styles.indicator,
                        currentPage === index ? styles.activeIndicator : styles.inactiveIndicator,
                        ]}
                    />
                    ))}
                    </View>

                    <TouchableOpacity onPress={handleNextPage} style={styles.btnStart}>
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
        height: '90%',
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
        marginTop: 65,
        marginLeft: 50,
        height: 50,
    },
    buttonText: {
        color: '#13191f',
        fontSize: 15,
        fontFamily: 'Poppins'
    },
    page: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 70,
      },
      text: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
      },
      activeIndicator: {
        backgroundColor: '#33c4fe', // Cor ativa
      },
      inactiveIndicator: {
        backgroundColor: '#d3d3d3', // Cor inativa
      },
});

