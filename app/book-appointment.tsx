import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, date: any) => {
    setShowDatePicker(false);
    if (date) setSelectedDate(date);
  };

  const handleAppointmentBooking = () => {
    // Here you would handle the booking logic
    alert('Appointment booked successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fill in the details</Text>

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

      {/* Doctor Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Doctor</Text>
        <Picker
          selectedValue={selectedDoctor}
          onValueChange={(itemValue) => setSelectedDoctor(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Dr. Sarah Smith" value="sarahSmith" />
          <Picker.Item label="Dr. John Doe" value="johnDoe" />
          <Picker.Item label="Dr. Emma Brown" value="emmaBrown" />
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
        <TextInput
          placeholder="e.g., 10:30 AM"
          style={styles.input}
        />
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity onPress={handleAppointmentBooking} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookAppointment;

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
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
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
