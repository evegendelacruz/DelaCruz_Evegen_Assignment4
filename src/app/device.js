import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, PaperProvider } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Use expo-router's routing system
import styles from "../styles/styles";
import ReturnButton from "../components/ReturnButton/returnButton";

const Device = () => {
  const router = useRouter(); // Initialize router from expo-router
  const [logoSize, setLogoSize] = useState(150);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [deviceID, setDeviceID] = useState("");
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listener for keyboard events
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setLogoSize(50); // Size when keyboard is visible
      setIsKeyboardVisible(true); // Set keyboard visible state
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setLogoSize(150); // Original size
      setIsKeyboardVisible(false); // Reset keyboard visible state
    });
    // Cleanup listeners on unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ReturnButton onPress={() => router.back()} />
        {visible && (
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              onPress={hideModal}
            />
            <View style={{
              width: '65%',
              height: '30%',
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <MaterialIcons name="verified-user" size={50} color="#0097ff" />
              <Text style={{ marginBottom: 10, marginVertical: 10, fontFamily: 'PoppinsBold', color: '#0f55e3', fontSize: 20, textAlign: 'center' }}>
                Registration Complete
              </Text>
              <Button
                mode="elevated"
                buttonColor="#0f55e3"
                labelStyle={{
                  fontSize: 14,
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: "PoppinsBold"
                }}
                style={{
                  borderRadius: 5,
                  width: 180,
                  height: '23%'
                }}
                onPress={() => {
                  hideModal();
                  router.push('/')
                }}
              >
                Proceed to Login
              </Button>
            </View>
          </View>
        )}

        {/* Main Content */}
        <Image source={require("../../assets/Logo.png")} style={[styles.logoImage, { width: logoSize, height: logoSize }]} />
        <Text style={[styles.headingTitle, { textAlign: 'center' }]}>
          Register your Device
        </Text>
        <Text style={styles.subheadingTitle}>
          Guarding Your Ride, Wherever You Roam!
        </Text>

        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder="Enter your Device ID"
            value={deviceID}
            mode="outlined"
            activeOutlineColor="green"
            outlineColor="#a6a6a6"
            textColor="black"
            onChangeText={setDeviceID}
            style={[styles.textInput, { fontFamily: "PoppinsBold" }]} // Fixed style reference
          />
        </View>

        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: isKeyboardVisible ? -60 : 140 }}>
          <Button
            mode="elevated"
            onPress={showModal} // Trigger the modal on button press
            onPressIn={() => setIsRegisterPressed(true)}
            onPressOut={() => setIsRegisterPressed(false)}
            buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
            labelStyle={{
              fontSize: 18,
              textAlign: 'center',
              color: 'white',
              fontFamily: "PoppinsBold"
            }}
            style={{
              paddingVertical: 7,
              paddingHorizontal: 5,
              margin: 10,
              borderRadius: 5,
              width: 290,
              height: 50
            }}
          >
            REGISTER
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Device;

const registerStyle = StyleSheet.create(styles);
