import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Linking, TouchableOpacity, ScrollView, View } from 'react-native';
import { Text } from '@/components/Themed';
import React from 'react';

export default function ModalScreen() {
  const teamMembers = [
    {
      name: 'John Doe',
      image: { uri: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg' },
      specialization: 'Criminal Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      phoneNumber: '+1234567890',
      email: 'john@example.com',
      website: 'https://www.example.com/john',
    },
    {
      name: 'Jane Smith',
      image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg' },
      specialization: 'Intellectual Property Law',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phoneNumber: '+9876543210',
      email: 'jane@example.com',
      website: 'https://www.example.com/jane',
    },
    {
      name: 'David Johnson',
      image: { uri: 'https://www.shutterstock.com/image-vector/woman-advocate-lawyer-icon-profile-260nw-521781088.jpg' },
      specialization: 'Family Law',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      phoneNumber: '+1122334455',
      email: 'david@example.com',
      website: 'https://www.example.com/david',
    },
    {
      name: 'Emily Williams',
      image: { uri: 'https://as2.ftcdn.net/v2/jpg/01/37/89/95/1000_F_137899529_tDNYG6cKpxGzZ46SQeqrOIlg5VG5qKNa.jpg' },
      specialization: 'Corporate Law',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      phoneNumber: '+9988776655',
      email: 'emily@example.com',
      website: 'https://www.example.com/emily',
    },
    {
      name: 'John Doe',
      image: { uri: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg' },
      specialization: 'Criminal Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      phoneNumber: '+1234567890',
      email: 'john@example.com',
      website: 'https://www.example.com/john',
    },
    {
      name: 'Jane Smith',
      image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg' },
      specialization: 'Intellectual Property Law',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phoneNumber: '+9876543210',
      email: 'jane@example.com',
      website: 'https://www.example.com/jane',
    },
    {
      name: 'David Johnson',
      image: { uri: 'https://www.shutterstock.com/image-vector/woman-advocate-lawyer-icon-profile-260nw-521781088.jpg' },
      specialization: 'Family Law',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      phoneNumber: '+1122334455',
      email: 'david@example.com',
      website: 'https://www.example.com/david',
    },
    {
      name: 'Emily Williams',
      image: { uri: 'https://as2.ftcdn.net/v2/jpg/01/37/89/95/1000_F_137899529_tDNYG6cKpxGzZ46SQeqrOIlg5VG5qKNa.jpg' },
      specialization: 'Corporate Law',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      phoneNumber: '+9988776655',
      email: 'emily@example.com',
      website: 'https://www.example.com/emily',
    },
    {
      name: 'John Doe',
      image: { uri: 'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg' },
      specialization: 'Criminal Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      phoneNumber: '+1234567890',
      email: 'john@example.com',
      website: 'https://www.example.com/john',
    },
    {
      name: 'Jane Smith',
      image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg' },
      specialization: 'Intellectual Property Law',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phoneNumber: '+9876543210',
      email: 'jane@example.com',
      website: 'https://www.example.com/jane',
    },
    {
      name: 'David Johnson',
      image: { uri: 'https://www.shutterstock.com/image-vector/woman-advocate-lawyer-icon-profile-260nw-521781088.jpg' },
      specialization: 'Family Law',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      phoneNumber: '+1122334455',
      email: 'david@example.com',
      website: 'https://www.example.com/david',
    },
    {
      name: 'Emily Williams',
      image: { uri: 'https://as2.ftcdn.net/v2/jpg/01/37/89/95/1000_F_137899529_tDNYG6cKpxGzZ46SQeqrOIlg5VG5qKNa.jpg' },
      specialization: 'Corporate Law',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      phoneNumber: '+9988776655',
      email: 'emily@example.com',
      website: 'https://www.example.com/emily',
    },

  ];

  const handlePhoneNumberClick = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailClick = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleWebsiteClick = (website: string) => {
    Linking.openURL(website);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Meet Our Legal Team</Text>
        <View style={styles.separator} />
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.memberContainer}>
            <View style={styles.memberBox}>
              <Image source={member.image} style={styles.memberImage} />
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
              <Text style={styles.memberSpecialization}>{member.specialization}</Text>
              <Text style={styles.memberDescription}>{member.description}</Text>
              <TouchableOpacity onPress={() => handlePhoneNumberClick(member.phoneNumber)}>
                <Text style={styles.contactLink}>📞 Phone: {member.phoneNumber}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEmailClick(member.email)}>
                <Text style={styles.contactLink}>✉️ Email: {member.email}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleWebsiteClick(member.website)}>
                <Text style={styles.contactLink}>🌐 Website: {member.website}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000', // Dark background color
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000', // Dark background color
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    color: '#fff', // White text color for dark theme
    fontFamily: 'Roboto',
    letterSpacing: 1,
  },
  separator: {
    marginVertical: 20,
    height: 2,
    width: '90%',
    backgroundColor: '#555', // Dark gray separator color
  },
  memberContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  memberBox: {
    borderWidth: 1,
    borderColor: '#777', // Gray border color
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
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
    marginBottom: 10,
    color: '#fff', // White text color for dark theme
    fontFamily: 'Roboto',
  },
  memberRole: {
    fontSize: 18,
    marginBottom: 5,
    color: '#ccc', // Light gray text color for dark theme
    fontFamily: 'Roboto',
  },
  memberSpecialization: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ccc', // Light gray text color for dark theme
    fontFamily: 'Roboto',
  },
  memberDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#aaa', // Gray text color for dark theme
    lineHeight: 24,
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  contactLink: {
    color: '#ADD8E6', // Light blue link color for dark theme
    textDecorationLine: 'underline',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
});
