import React, { useState, useEffect, lazy } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useCameraPermissions } from 'expo-camera';

import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

const ConsultVideoButton = lazy(() => import('@/modules/ConsultVideoButton'));

export default function ConsultationScreen() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isJoined, setIsJoined] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState('');
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status }: any = await requestPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

 

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    setMessages((prevMessages: any[]) => [
      ...prevMessages,
      { id: Date.now().toString(), text: inputText, type: 'text', sender: true },
    ]);
    setInputText('');
  };

  const uploadFile = async () => {
    try {
      const result: any = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'cancel') return;

      const fileMessage = {
        id: Date.now().toString(),
        text: result.name,
        fileUri: result.uri,
        type: 'file',
        sender: true,
      };

      setMessages((prevMessages: any[]) => [...prevMessages, fileMessage]);
      Alert.alert('File uploaded successfully!', `You uploaded: ${result.name}`);
    } catch (error) {
      Alert.alert('Upload Error', 'Failed to upload the file. Please try again.');
    }
  };

  const renderMessage = ({ item }: any) => {
    const isSender = item.sender;
    const messageStyle = isSender ? styles.senderMessage : styles.receiverMessage;
    const textColor = isSender ? '#fff' : '#333';

    return (
      <View style={[styles.messageCard, messageStyle]}>
        {item.type === 'text' ? (
          <Text style={[styles.messageText, { color: textColor }]}>{item.text}</Text>
        ) : (
          <TouchableOpacity onPress={() => Alert.alert('File', `Open file: ${item.text}`)}>
            <View style={styles.fileMessage}>
              <Ionicons name="document" size={20} color={textColor} />
              <Text style={[styles.messageText, { color: textColor, marginLeft: 8 }]}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  if (hasPermission === null) {
    return <Text style={styles.permissionText}>Requesting permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.permissionText}>No access to camera</Text>;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
       <ConsultVideoButton />
      </View>

      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
        />
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={uploadFile}>
          <Ionicons name="add-circle" size={32} color="#007BFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  permissionText: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#555',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
  },

  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageCard: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '75%',
    alignSelf: 'flex-start',
  },
  senderMessage: {
    backgroundColor: '#007BFF',
    alignSelf: 'flex-end',
  },
  receiverMessage: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  fileMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 10,
    height: 40,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
  },
});
