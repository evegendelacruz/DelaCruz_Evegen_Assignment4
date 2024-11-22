import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ReturnButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.button} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 26,
    left: 15,
    zIndex: 10,
    padding: 10,
  },
});

export default ReturnButton;