import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ModalScreen() {
  const handleGoogleFormClick = () => {
    // Replace 'YOUR_GOOGLE_FORM_LINK' with the actual link to your Google Forms
    const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeAdpizhOG26voWHAP0TQrpTokni9m7JBwW-bvLDB-3f8AULw/viewform?usp=sf_link';
    Linking.openURL(googleFormLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.separator} />
      <Text style={styles.aboutText}>
        We are a team of four individuals currently pursuing our final year at G.H. Raisoni College of Engineering.
        Our collective aim is to develop a comprehensive law application that will serve as a valuable resource for legal professionals and enthusiasts alike.
        This page is part of our endeavor to create an intuitive and informative platform within the application.
      </Text>
      <Text style={styles.guidanceTeacher}>Guidance Teacher: Dr. Prasad Lokulwar</Text>
      {/* Google Forms link styled as a button */}
      <TouchableOpacity style={styles.button} onPress={handleGoogleFormClick}>
        <Text style={styles.buttonText}>Register as a Lawyer</Text>
      </TouchableOpacity>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    fontFamily: 'Roboto',
    letterSpacing: 1,
  },
  separator: {
    marginVertical: 20,
    height: 2,
    width: '50%',
    backgroundColor: '#333',
  },
  aboutText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    lineHeight: 24,
    fontFamily: 'Roboto',
  },
  guidanceTeacher: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#888',
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto',
  },
});
