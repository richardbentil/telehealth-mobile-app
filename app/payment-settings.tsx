import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const PaymentSettings = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment Settings</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput style={styles.input} placeholder="Enter card number" keyboardType="numeric" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Expiration Date</Text>
        <TextInput style={styles.input} placeholder="MM/YY" keyboardType="numeric" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>CVV</Text>
        <TextInput style={styles.input} placeholder="Enter CVV" keyboardType="numeric" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Payment Method</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentSettings;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 16, color: '#333' },
  input: { height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, backgroundColor: '#fff' },
  saveButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
