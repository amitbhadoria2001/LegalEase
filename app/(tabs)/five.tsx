import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import React from 'react';

// Import images for each team member
// import teamMember1Image from './assets/team_member_1.jpg';
// import teamMember2Image from './assets/team_member_2.jpg';
// import teamMember3Image from './assets/team_member_3.jpg';
// import teamMember4Image from './assets/team_member_4.jpg';

export default function ModalScreen() {
  // Define team members data
  const teamMembers = [
    {
      name: 'John Doe',
      // image: teamMember1Image,
      role: 'Lead Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      phoneNumber: '+1234567890',
      email: 'john@example.com',
      website: 'https://www.example.com/john',
    },
    {
      name: 'Jane Smith',
      // image: teamMember2Image,
      role: 'UI/UX Designer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phoneNumber: '+9876543210',
      email: 'jane@example.com',
      website: 'https://www.example.com/jane',
    },
    {
      name: 'David Johnson',
      // image: teamMember3Image,
      role: 'Software Engineer',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      phoneNumber: '+1122334455',
      email: 'david@example.com',
      website: 'https://www.example.com/david',
    },
    {
      name: 'Emily Williams',
      // image: teamMember4Image,
      role: 'Quality Assurance',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      phoneNumber: '+9988776655',
      email: 'emily@example.com',
      website: 'https://www.example.com/emily',
    },
  ];

  // Function to handle phone number click
  const handlePhoneNumberClick = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Function to handle email click
  const handleEmailClick = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  // Function to handle website click
  const handleWebsiteClick = (website: string) => {
    Linking.openURL(website);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Lawyer</Text>
      <View style={styles.separator} />
      {/* Render each team member section */}
      {teamMembers.map((member, index) => (
        <View key={index} style={styles.memberContainer}>
          <Image source={member.image} style={styles.memberImage} />
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberRole}>{member.role}</Text>
          <Text style={styles.memberDescription}>{member.description}</Text>
          <TouchableOpacity onPress={() => handlePhoneNumberClick(member.phoneNumber)}>
            <Text style={styles.contactLink}>Phone: {member.phoneNumber}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEmailClick(member.email)}>
            <Text style={styles.contactLink}>Email: {member.email}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleWebsiteClick(member.website)}>
            <Text style={styles.contactLink}>Website: {member.website}</Text>
          </TouchableOpacity>
        </View>
      ))}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    </ScrollView>
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
    marginTop: 10,
    marginBottom: 8,
    color: '#333',
    fontFamily: 'Roboto',
    letterSpacing: 2,
  },
  separator: {
    marginVertical: 20,
    height: 2,
    width: '90%',
    backgroundColor: '#333',
  },
  memberContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  memberImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    fontFamily: 'Roboto',
  },
  memberRole: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#666',
    fontFamily: 'Roboto',
  },
  memberDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    lineHeight: 24,
    fontFamily: 'Roboto',
  },
  contactLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
});
