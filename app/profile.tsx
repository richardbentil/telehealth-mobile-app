import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <IconSymbol name="person.circle.fill" size={80} color="#007BFF" />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>
        
        <Link href="/account-settings" style={styles.optionButton}>
          <Text style={styles.optionText}>Account Settings</Text>
          <IconSymbol name="chevron.right" size={24} color="#888" />
        </Link>

        <Link href="/app-settings" style={styles.optionButton}>
          <Text style={styles.optionText}>App Settings</Text>
          <IconSymbol name="chevron.right" size={24} color="#888" />
        </Link>

        <Link href="/payment-settings" style={styles.optionButton}>
          <Text style={styles.optionText}>Payment Settings</Text>
          <IconSymbol name="chevron.right" size={24} color="#888" />
        </Link>
      </View>

      {/* App Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Features</Text>
        
        <TouchableOpacity style={styles.switchContainer}>
          <Text style={styles.switchText}>Enable Notifications</Text>
          {/* Replace with Switch component if needed */}
          <View style={styles.toggleSwitch}>
            <View style={styles.toggleCircle} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.switchContainer}>
          <Text style={styles.switchText}>Enable Dark Mode</Text>
          <View style={styles.toggleSwitch}>
            <View style={styles.toggleCircle} />
          </View>
        </TouchableOpacity>
      </View>
      
      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  switchText: {
    fontSize: 16,
    color: '#333',
  },
  toggleSwitch: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  toggleCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    marginLeft: 4,
  },
  signOutButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
