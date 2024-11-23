import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const ConsultVideoButton = ({setIsJoined}: any) => {
    const startConsultation = async () => {
        try {
          // Replace with your backend logic for Agora token and channel
          const response = await axios.post('https://your-backend-url.com/consultation/token', { /* params */ });
          const { token, channelId } = response.data;
    
          const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    
          await client.join('your-agora-app-id', channelId, token, null);
    
          const localVideoTrack = await AgoraRTC.createCameraVideoTrack();
          await client.publish(localVideoTrack);
    
          setIsJoined(true);
        } catch (error) {
          console.error('Failed to join consultation:', error);
        }
      };
  return (
 
      <Pressable style={styles.callButton} onPress={startConsultation}>
          <Ionicons name="call" size={24} color="#fff" />
          <Text style={styles.callButtonText}>Call</Text>
        </Pressable>
   
  )
}

export default ConsultVideoButton

const styles = StyleSheet.create({
    callButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
      },
      callButtonText: {
        color: '#fff',
        marginLeft: 8,
        fontWeight: 'bold',
      },
})