import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to TeleHealth</Text>
      <Text style={styles.description}>
        Get instant access to certified doctors and schedule appointments or consultations at your convenience.
      </Text>
      <Link href="/login" style={styles.button}>Get Started</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        marginVertical: 20,
        lineHeight: 24,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 40,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Home;
