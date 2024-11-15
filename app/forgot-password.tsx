import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Button from '@/components/ui/Button';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password</Text>

      <Text style={styles.instructions}>
        Enter your email to receive password reset instructions.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

<Button text='Reset Password' onPress={() => {}} />

      <View style={styles.linksContainer}>
        <Text style={styles.linkPrompt}>Remember your password?</Text>
        <Link href="/login" style={styles.linkText}>
          Log In
        </Link>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  linkPrompt: {
    fontSize: 16,
    color: '#666',
    marginRight: 5,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
