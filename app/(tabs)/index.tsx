import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: '' }}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to LegalEase</Text>
          <View style={styles.functionality}>
            <Text style={styles.functionalityText}>1. IPC Sections</Text>
            <Text style={styles.functionalityDescription}>View and search through IPC sections.</Text>
          </View>
          <View style={styles.functionality}>
            <Text style={styles.functionalityText}>2. Bail Procedures</Text>
            <Text style={styles.functionalityDescription}>Learn about bail procedures and legal rights.</Text>
          </View>
          <View style={styles.functionality}>
            <Text style={styles.functionalityText}>3. Book Lawyer</Text>
            <Text style={styles.functionalityDescription}>Find and book a lawyer for legal advice or representation.</Text>
          </View>
          <View style={styles.functionality}>
            <Text style={styles.functionalityText}>4. Chatbot</Text>
            <Text style={styles.functionalityDescription}>Ask legal questions and get instant answers from our chatbot.</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff', // Text color for dark theme
  },
  functionality: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Background color for dark theme
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  functionalityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Text color for dark theme
  },
  functionalityDescription: {
    fontSize: 16,
    color: '#333', // Text color for dark theme
  },
});

export default MainPage;
