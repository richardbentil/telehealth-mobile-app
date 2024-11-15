import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

const notificationsData = [
  { id: 1, message: 'Your appointment with Dr. Sarah is confirmed.', timestamp: '10 mins ago', details: 'Appointment confirmed for October 18 at 10:30 AM.', read: false },
  { id: 2, message: 'New health tips are available.', timestamp: '1 hr ago', details: 'Stay hydrated and get 8 hours of sleep each night.', read: true },
  { id: 3, message: 'Reminder: Appointment with Dr. John tomorrow.', timestamp: '2 hrs ago', details: 'Your consultation with Dr. John is scheduled for tomorrow at 9:00 AM.', read: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState<any>(notificationsData);
  const [selectedNotification, setSelectedNotification] = useState<any>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification: any) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const openModal = (notification: any) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedNotification(null);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {notifications.map((notification: any) => (
        <TouchableOpacity
          key={notification.id}
          style={[styles.notificationCard, notification.read ? styles.read : styles.unread]}
          onPress={() => openModal(notification)}
        >
          <View style={styles.notificationContent}>
            <Text style={styles.messageText}>{notification.message}</Text>
            <Text style={styles.timestampText}>{notification.timestamp}</Text>
          </View>
          {!notification.read && (
            <TouchableOpacity
              style={styles.markAsReadButton}
              onPress={() => markAsRead(notification.id)}
            >
              <Text style={styles.markAsReadText}>Mark as Read</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      ))}

      {/* Notification Detail Modal */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {selectedNotification && (
              <>
                <Text style={styles.modalTitle}>Notification Details</Text>
                <Text style={styles.modalMessage}>{selectedNotification.message}</Text>
                <Text style={styles.modalDetails}>{selectedNotification.details}</Text>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => {
                    closeModal();
                    // Logic for booking a consultation if applicable
                  }}
                >
                  <Text style={styles.bookButtonText}>Book Consultation</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Notifications;

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
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  read: {
    backgroundColor: '#e0e0e0',
  },
  unread: {
    backgroundColor: '#fff',
  },
  notificationContent: {
    flex: 1,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestampText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  markAsReadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  markAsReadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalContainer: {
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
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#333',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  modalDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
