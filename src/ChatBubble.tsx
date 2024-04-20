import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Import StyleSheet
import { Ionicons } from 'react-native-vector-icons';

const ChatBubble = ({ role, text }) => {
  return (
    <View style={[styles.container, role === "user" ? styles.userBubble : styles.modelBubble]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
  },
  modelBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#eee",
  },
  text: {
    color: "#333",
    fontSize: 16,
  },
});

export default ChatBubble;
