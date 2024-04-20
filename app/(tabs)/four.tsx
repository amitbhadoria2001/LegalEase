import { StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from '@/components/Themed';
import Chatbot from '../../src/chatbot';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Chatbot />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title:{
    
  }
});