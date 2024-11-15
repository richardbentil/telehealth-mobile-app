import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    onPress: () => void, // Function to call when button is pressed
    text: string,
    icon?: any
}

export default function Button({onPress, text, icon}: Props) {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.button}>
        {icon}
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
      },
})