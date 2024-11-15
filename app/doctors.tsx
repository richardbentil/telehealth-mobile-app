import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons if you're using Expo

const DoctorListPage = () => {
  const navigation: any = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const doctors = [
    { id: '1', name: 'Dr. Sarah Smith', specialty: 'Cardiology', image: 'https://via.placeholder.com/80', bio: 'Specialist in heart health and cardiology with 15 years of experience.' },
    { id: '2', name: 'Dr. John Doe', specialty: 'Neurology', image: 'https://via.placeholder.com/80', bio: 'Expert in neurological disorders and treatment.' },
    { id: '3', name: 'Dr. Emma Brown', specialty: 'Dermatology', image: 'https://via.placeholder.com/80', bio: 'Experienced dermatologist, treating skin, hair, and nail conditions.' },
    { id: '4', name: 'Dr. Alan White', specialty: 'Pediatrics', image: 'https://via.placeholder.com/80', bio: 'Specialist in children’s health and well-being.' },
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedSpecialty === '' || doctor.specialty === selectedSpecialty)
  );

  const openDoctorDetail = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsModalVisible(true);
  };

  const closeDoctorDetail = () => {
    setIsModalVisible(false);
  };

  const navigateToBookConsultation = () => {
    closeDoctorDetail();
    console.log(selectedDoctor)
    navigation.push('book-consultation', { doctorId: selectedDoctor.id, doctorName: selectedDoctor.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctors</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Specialty:</Text>
        <Picker
          selectedValue={selectedSpecialty}
          onValueChange={(itemValue) => setSelectedSpecialty(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Cardiology" value="Cardiology" />
          <Picker.Item label="Neurology" value="Neurology" />
          <Picker.Item label="Dermatology" value="Dermatology" />
          <Picker.Item label="Pediatrics" value="Pediatrics" />
        </Picker>
      </View>

      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.doctorCard} onPress={() => openDoctorDetail(item)}>
            <Image source={{ uri: item.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{item.name}</Text>
              <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Doctor Detail Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={closeDoctorDetail}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            {selectedDoctor && (
              <>
                <Image source={{ uri: selectedDoctor.image }} style={styles.modalDoctorImage} />
                <Text style={styles.modalDoctorName}>{selectedDoctor.name}</Text>
                <Text style={styles.modalDoctorSpecialty}>{selectedDoctor.specialty}</Text>
                <Text style={styles.modalDoctorBio}>{selectedDoctor.bio}</Text>
                <TouchableOpacity style={styles.bookButton} onPress={navigateToBookConsultation}>
                  <Text style={styles.bookButtonText}>Book Consultation</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DoctorListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchInput: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  picker: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#666',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalDoctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  modalDoctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  modalDoctorSpecialty: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  modalDoctorBio: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
