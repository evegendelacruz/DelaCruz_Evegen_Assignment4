import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from 'expo-router'; // Use expo-router's routing system
import ReturnButton from "../components/ReturnButton/returnButton";

const ForgotPassword = ({ navigation }) => {
  const router = useRouter(); 
  const logo = require("../../assets/ForgotPassword.png");
  const [logoSize, setLogoSize] = useState({ width: 190, height: 190 });
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 
  const [email, setEmail] = useState(""); // Initialize the email state
  const [isLoading, setIsLoading] = useState(false); // Initialize the isLoading state

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setLogoSize({ width: 100, height: 100 }); // Shrink logo when keyboard is visible
      setIsKeyboardVisible(true); // Set keyboard visible
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setLogoSize({ width: 190, height: 190 }); // Restore logo size when keyboard is hidden
      setIsKeyboardVisible(false); // Set keyboard not visible
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const [isRegisterPressed, setIsRegisterPressed] = useState(false);

  return (
    <SafeAreaView style={forgotStyle.container}>
      <ReturnButton onPress={() => router.back()} />
      
      <View>
        <Text style={[forgotStyle.headingTitle, {alignSelf:'center', marginBottom: 1, marginTop: -70}]} >
          Reset Password
        </Text>
        <Text style={[styles.subheadingTitle, {marginLeft: 22, marginRight: 22, textAlign: 'center', marginBottom: 10, fontSize: 12}]} >
          Please enter your email address to receive instructions for resetting your password.
        </Text>
        <Image
          source={logo}
          style={[forgotStyle.logoImage, logoSize]} 
        />
      </View>

      <View>
        <TextInput
          placeholder="Email"
          left={<TextInput.Icon icon="email" color="gray" />}
          value={email} // Set the value to the email state
          mode="outlined"
          activeOutlineColor="green"
          outlineColor="#a6a6a6"
          textColor="black"
          onChangeText={setEmail} // Use the setEmail function to update the email state
          style={[styles.textInput, { fontFamily: "PoppinsBold", marginTop: isKeyboardVisible ? 20 : 20 }]} 
        />
      </View>

      <View style={{ alignItems: 'center', marginBottom: isKeyboardVisible ? -150 : 0 }}> 
        <Button
          mode="elevated"
          onPress={() => router.push('/')}
          loading={isLoading} // Show loading spinner when the request is in progress
          onPressIn={() => setIsRegisterPressed(true)}
          onPressOut={() => setIsRegisterPressed(false)}
          buttonColor={isRegisterPressed ? "#bbeda6" : "#46d808"}
          labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
          style={{ paddingVertical: 7, margin: 5, borderRadius: 5, width: 290, height: 50, marginTop: 20 }}
        >
          RECOVER
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const forgotStyle = StyleSheet.create(styles);
