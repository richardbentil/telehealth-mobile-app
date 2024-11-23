import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

const AppointmentDetail = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const [appointmentDetails, setAppointmentDetails] = useState<any>(null);
  const appointmentId = route.params?.id;

  useEffect(() => {
    // Fetch or load appointment details based on appointmentId
    // For now, just a mock detail for demonstration
    const mockAppointmentData: any = {
      1: { doctor: 'Dr. Sarah Smith', date: 'Oct 18, 2024', time: '10:30 AM' },
      2: { doctor: 'Dr. John Doe', date: 'Oct 20, 2024', time: '2:00 PM' },
      // Add more mock appointments here
    };
    setAppointmentDetails(mockAppointmentData[appointmentId]);
    
    // Set the title dynamically using navigation
    if (appointmentDetails) {
      navigation.setOptions({
        title: `${appointmentDetails.doctor} - Appointment Details`,
      });
    }
  }, [appointmentId, navigation, appointmentDetails]);

  // Sample appointment details (replace with data fetched based on appointmentId)
  const appointment = {
    id: route.params.appointmentId,
    doctor: 'Dr. Sarah Smith',
    specialty: 'Cardiologist',
    date: 'Oct 18, 2024',
    time: '10:30 AM',
    location: 'Health Clinic, Room 402',
    notes: 'Bring previous test reports if available.',
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>
      
      <View style={styles.infoSection}>
        <Text style={styles.label}>Doctor:</Text>
        <Text style={styles.value}>{appointment.doctor}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Specialty:</Text>
        <Text style={styles.value}>{appointment.specialty}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Date & Time:</Text>
        <Text style={styles.value}>{appointment.date} at {appointment.time}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{appointment.location}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Additional Notes:</Text>
        <Text style={styles.value}>{appointment.notes}</Text>
      </View>

      <Pressable style={styles.button} onPress={() => alert('Reschedule appointment')}>
        <Text style={styles.buttonText}>Reschedule</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.cancelButton]} onPress={() => alert('Cancel appointment')}>
        <Text style={styles.buttonText}>Cancel Appointment</Text>
      </Pressable>
      <Link style={[styles.button, styles.joinButton]} href="/consult-chat-video">
        <Text style={styles.buttonText}>Join Appointment</Text>
      </Link>
    </ScrollView>
  );
};

export default AppointmentDetail;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  infoSection: { marginBottom: 15 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#555' },
  value: { fontSize: 16, color: '#333' },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  cancelButton: { backgroundColor: '#FF3B30' },
  joinButton: { backgroundColor: '#4CAF50', textAlign: "center" },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
