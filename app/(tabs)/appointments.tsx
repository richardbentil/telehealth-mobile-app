import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import { setStatusBarStyle } from "expo-status-bar";

const Appointments = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("dark");
    }, 0);
  }, []);

  const appointments = [
    { id: 1, doctor: 'Dr. Sarah Smith', date: 'Oct 18, 2024', time: '10:30 AM' },
    { id: 2, doctor: 'Dr. John Doe', date: 'Oct 20, 2024', time: '2:00 PM' },
    // Add more sample appointments as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Appointments</Text>
      {appointments.map((appointment) => (
        <Link
          key={appointment.id}
          style={styles.appointmentCard}
          href={"/appointment-details/" + appointment.id}
        >
          <Text style={styles.doctorName}>{appointment.doctor}</Text>
          <Text style={styles.date}>{appointment.date}, {appointment.time}</Text>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333', 
    marginTop: 40, },
  appointmentCard: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, elevation: 2 },
  doctorName: { fontSize: 18, fontWeight: '600', color: '#333' },
  date: { fontSize: 14, color: '#555', marginTop: 5 },
});
