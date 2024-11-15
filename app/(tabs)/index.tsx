import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link } from 'expo-router';

const Home = () => {
  const [notificationCount, setNotificationCount] = useState(5);

  return (
    <ScrollView style={styles.container}>
      {/* Header with Profile and Notification Icons */}
      <View style={styles.header}>
        {/* Notifications Icon with Badge */}
      <Link href="/notifications" style={styles.iconButton}>
        <IconSymbol name="bell.fill" size={24} color="#333" />
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </Link>
        <Link href="/profile" style={styles.iconButton}>
          <IconSymbol name="person.circle.fill" size={24} color="#333" />
        </Link>
      </View>

      {/* Welcome Banner */}
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>Welcome to TeleHealth</Text>
        <Text style={styles.subText}>Your health, our priority</Text>
      </View>

      {/* Key Feature Buttons */}
      <View style={styles.featureContainer}>
        <Link href="/book-appointment" style={styles.featureButton}>
          <IconSymbol name="calendar.fill" size={32} color="#007BFF" />
          <Text style={styles.featureText}>Book Appointment</Text>
        </Link>

        <Link href="/doctors" style={styles.featureButton}>
          <IconSymbol name="house.fill" size={32} color="#007BFF" />
          <Text style={styles.featureText}>Consult a Doctor</Text>
        </Link>

        <TouchableOpacity style={styles.featureButton}>
          <IconSymbol name="chevron.right" size={32} color="#007BFF" />
          <Text style={styles.featureText}>Health Resources</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Appointments */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          <Link href="/(tabs)/appointments" style={styles.sectionLink}>View all</Link>
        </View>
        <Link
          style={styles.appointmentCard}
          href={"/appointment-details/jh85fgh"}
        >
          <Text style={styles.appointmentText}>Dr. Sarah Smith</Text>
          <Text style={styles.appointmentSubText}>Oct 18, 2024, 10:30 AM</Text>
        </Link>
      </View>

      {/* Health Tips */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Tips</Text>
        <Text style={styles.tipText}>Stay hydrated and exercise regularly for a healthier life!</Text>
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Manage Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 40,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  banner: {
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  featureText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionLink: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#007BFF",
  },
  appointmentCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  appointmentText: {
    fontSize: 16,
    fontWeight: '500',
  },
  appointmentSubText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  tipText: {
    fontSize: 16,
    color: '#333',
  },
  settingsButton: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 10,
  },
  settingsText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    position: 'relative',
    marginRight: 20, // Adjust spacing as needed
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 8,
    height: 16,
    minWidth: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  }
});
