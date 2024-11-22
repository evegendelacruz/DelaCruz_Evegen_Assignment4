import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../../src/styles/styles";
import { TextInput, Button } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { Link, useRouter } from 'expo-router';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoginPressed, setIsLoginPressed] = useState(false);
    const [isForgotPasswordPressed, setIsForgotPasswordPressed] = useState(false);
    const [isRegisterPressed, setIsRegisterPressed] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 
    const [isLoginLoading, setIsLoginLoading] = useState(false); // Login button loading state
    const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false); // Forgot Password button loading state
    const [isRegisterLoading, setIsRegisterLoading] = useState(false); // Register button loading state
    const [logoSize, setLogoSize] = useState(150);
    const logo = require("../../assets/Logo.png");

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
    

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#0f55e3', justifyContent: 'center' }}>
    <KeyboardAvoidingView 
        style={{ justifyContent: 'center', alignItems: 'center' }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      ></KeyboardAvoidingView>
        <Image source={logo} style={[styles.logoImage, { width: logoSize, height: logoSize }]} />
        <View style={loginStyle.header}>
          <Text style={loginStyle.headingTitle}>Welcome, Rider!</Text>
          <Text style={loginStyle.subheadingTitle}>
            Guarding Your Ride, Wherever You Roam!
          </Text>
          <Text style={loginStyle.pageTitle}>Log In</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TextInput
            placeholder="Email"
            value={email}
            mode="outlined"
            activeOutlineColor="green"
            outlineColor="#a6a6a6"
            textColor="black"
            onChangeText={(newEmail) => setEmail(newEmail)}
            left={<TextInput.Icon icon="email" color="gray" />}
            style={[loginStyle.textInput, { fontFamily: "PoppinsBold" }]}
          />
          
          <TextInput
            placeholder="Password"
            value={password}
            mode="outlined"
            activeOutlineColor="green"
            outlineColor="#a6a6a6"
            textColor="black"
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry={!isPasswordVisible}
            left={<TextInput.Icon icon="key" color="gray" />}
            right={
              <TextInput.Icon
                icon={isPasswordVisible ? "eye-off" : "eye"}
                color="gray"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            }
            style={[loginStyle.textInput, { fontFamily: "PoppinsBold" }]}
          />
        </View>
    
        <View style={{ alignItems: 'center' }}>
        <Button
            mode="elevated"
            onPress={() => router.replace('dashboard')}  // Navigate to Dashboard
            buttonColor={isLoginPressed ? "#bbeda6" : "#46d808"} 
            labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold", marginBottom:-5 }} 
            style={[styles.button, { borderRadius: 5, width: 290, height: 50 }]}>
            LOG IN
        </Button>


            <View style={{ alignItems: 'center', marginBottom: isKeyboardVisible ? -50 : 0 }}>
            <Button
                mode="text"
                onPress={() => router.push('recover')}  // Navigate to Forgot Password
                labelStyle={{
                    fontSize: 14,
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: "Poppins"
                }}
                style={{ padding: 0 }}
            >
                Forgot Password?
            </Button>
            </View>

            {/* Conditionally render both Forgot Password and Register buttons based on keyboard visibility */}
            {!isKeyboardVisible && (
            <>
                <View style={{ height: 0.5, width: "80%", alignSelf: 'center', backgroundColor: 'white', marginVertical: 15 }} />

                <View style={{ alignItems: 'center' }}>
                <Button
                    mode="elevated"
                    onPress={() => router.push('register')}  
                    buttonColor={isRegisterPressed ? "#e6d2a2" : "#ffb600"} 
                    labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
                    style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50 }}
                
                >
                    REGISTER
                </Button>
                </View>
            </>
            )}
        </View>
    </SafeAreaView>
  )
}

export default Login;


const loginStyle = StyleSheet.create(styles);