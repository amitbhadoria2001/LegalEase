import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React from 'react';

export default function ModalScreen() {
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
    color: '#888',
    fontFamily: 'Roboto',
  },
});
