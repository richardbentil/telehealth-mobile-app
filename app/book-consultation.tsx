import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { setStatusBarStyle } from "expo-status-bar";
import { useRoute } from '@react-navigation/native';

const BookConsultation = () => {
  const route: any = useRoute();
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("dark");
    }, 0);
  }, []);

  const { doctorId, doctorName } = route?.params || {};

  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event: any, date: any) => {
    setShowDatePicker(false);
    if (date) setSelectedDate(date);
  };

  const handleTimeChange = (event: any, time:any) => {
    setShowTimePicker(false);
    if (time) setSelectedTime(time);
  };

  const handleAppointmentBooking = () => {
    // Here you would handle the booking logic (e.g., saving to a database)
    alert('Your consultation is booked successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book Consultation with {doctorName}</Text>

      {/* Doctor Info */}
      <View style={styles.doctorInfo}>
        <Text style={styles.label}>Doctor</Text>
        <Text style={styles.doctorName}>{doctorName}</Text>
      </View>

      {/* Service Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Service</Text>
        <Picker
          selectedValue={selectedService}
          onValueChange={(itemValue: any) => setSelectedService(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="General Consultation" value="general" />
          <Picker.Item label="Specialist Consultation" value="specialist" />
          <Picker.Item label="Follow-up" value="followUp" />
        </Picker>
      </View>

      {/* Date Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="calendar"
            onChange={handleDateChange}
          />
        )}
      </View>

      {/* Time Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Time</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>{selectedTime || 'Select Time'}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="time"
            display="clock"
            onChange={handleTimeChange}
          />
        )}
      </View>

      {/* Appointment Note */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Additional Notes</Text>
        <TextInput
          placeholder="Enter any notes for the doctor"
          style={styles.input}
          multiline
        />
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity onPress={handleAppointmentBooking} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookConsultation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  doctorInfo: {
    backgroundColor: '#e8f4f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007ACC',
  },
  inputContainer: {
    marginBottom: 20,
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  dateButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
