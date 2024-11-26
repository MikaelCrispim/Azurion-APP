import React, { useRef, useState } from 'react';
import { ScrollView, Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get("window");

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState(null); // Estado para armazenar a opção selecionada
  const pages = [
    {
      id: 1,
      title: '1. Qual dessas disciplinas você mais gosta?',
      materias: ['Matematica', 'Ciências', 'História', 'Línguas', 'Geografia'],
    },
    {
      id: 2,
      title: '2. Qual método de estudo você prefere?',
      materias: ['Estudo sozinho, em silêncio', 'Estudo em grupo, trocando ideias', 'Assistindo vídeos e tutoriais', 'Resolvendo exercícios práticos', 'Leitura de livros e resumos'],
    },
    {
      id: 3,
      title: '3. Qual o seu nível de escolaridade?',
      materias: ['Cursando o Ensino Fundamental', 'Concluí o Ensino Fundamental', 'Cursando o Ensino Médio', 'Concluí o Ensino Médio', 'Não concluí o Ensino Médio'],
    },
    {
      id: 4,
      title: '4. Qual forma de estudo você mais utiliza?',
      materias: ['Anotações e resumos escritos', 'Mapas mentais e esquemas', 'Estudo com vídeo aulas', 'Estudo com áudio e podcasts', 'Leitura e compreensão de artigos e livros'],
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Progress Bar */}
        <View style={styles.progressBar}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressSegment,
                index <= currentPage ? styles.activeSegment : styles.inactiveSegment,
              ]}
            />
          ))}
        </View>


        {/* Title */}


        {/* Options */}
        <View style={styles.bulletContainer}>
          <View style={styles.bullet} />
          <Text style={styles.line}></Text>
          <View style={styles.bullet} />
          <Text style={styles.line}></Text>
          <View style={styles.bullet} />
          <Text style={styles.line}></Text>
          <View style={styles.bullet} />
          <Text style={styles.line}></Text>
          <View style={styles.bullet} />
          <Text style={styles.line}></Text>
        </View>

        <View style={styles.optionsContainer}>


          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            // style={{ flex: 1 }}
            contentContainerStyle={{ width: width * pages.length }}
          >
            {pages.map((page) => (
              <View key={page.id} style={[styles.page, { width }]}>
                <Text style={styles.title}>{page.title}</Text>
                {page.id != 0 && page.materias ? (
                  page.materias.map((materia, index) => (

                    <TouchableOpacity
                      key={index}
                      onPress={() => setSelectedOption(materia)} // Define a matéria selecionada
                      style={[
                        styles.option,
                        selectedOption === materia && styles.selectedOption, // Aplica o estilo para a matéria selecionada
                      ]}
                    >
                      
                      <Text
                        style={[
                          styles.optionText,
                          selectedOption === materia && styles.selectedOptionText, // Estilo do texto selecionado
                        ]}
                      >
                        {materia}
                      </Text>
                    </TouchableOpacity>
                    
                  ))
                ) : (
                  <Text style={styles.placeholderText}>Conteúdo desta página</Text>
                )}
              </View>
            ))}
          </ScrollView>



          {/* <View style={styles.option}>
                <View style={styles.bullet} />
                <Text style={styles.optionText}>
                  Matemática
                </Text>
              </View> */}
        </View>
        {/* Buttons */}

        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Text style={styles.skipButton}>Pular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPage} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Próxima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0f486b',
  },
  progressBar: {
    paddingTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  progressSegment: {
    height: 10,
    flex: 1,
  },
  activeSegment: {
    backgroundColor: '#00C2FF',
  },
  inactiveSegment: {
    backgroundColor: '#00C2FF',
    opacity: 0.2,
  },
  title: {
    textAlign: 'center',
    color: '#FaFaFa',
    fontSize: 18,
    marginBottom: 26,
  },
  optionsContainer: {
    marginBottom: 16,
    marginTop: 30,
    paddingLeft: 18
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 24,
  },
  bulletContainer: {
    marginTop: 255,
    marginLeft: 4,
    position: 'absolute',
  },
  line: {
    marginLeft: 15,
    height: 51,
    borderLeftWidth: 0.6,
    borderColor: "#f0f0f0"
  },
  bullet: {
    width: 30,
    height: 30,
    borderRadius: 50,  // Isso vai deixar o círculo arredondado
    backgroundColor: '#00b2Ff', // Cor do bullet
    marginRight: 10, // Espaçamento entre o bullet e o texto
  },
  optionText: {
    width: '80%',
    color: '#FFFFFF',
    fontSize: 14,
    padding: 10,
    marginBottom: 3,
    marginLeft: 55,
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#f0f0f0',
    borderRadius: 8,
  },
  selectedOption: {
    width: '80%',
    borderRadius: 8,
    backgroundColor: '#00C2FF', // Destaque da opção selecionada
    // marginLeft: 35,
  },
  selectedOptionText: {
    color: '#0A2540', // Cor do texto quando a opção é selecionada
    fontWeight: 'bold',
    borderColor: 'transparent',
    padding: 5,
    fontSize: 14,
    marginLeft: 35,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  skipButton: {
    color: '#00C2FF',
  },
  nextButton: {
    backgroundColor: '#00C2FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#FFFFFF',
  },
});



