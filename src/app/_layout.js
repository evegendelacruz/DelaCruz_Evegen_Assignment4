import React from 'react'
import { useFonts } from "expo-font";
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout = () => {

  const [loaded] = useFonts({
    Poppins: require("../../assets/font/Poppins-Medium.ttf"),
    PoppinsBold: require("../../assets/font/Poppins-Bold.ttf"),
  });
  

  if (!loaded) {
    return null; 
  }

  return (
    <PaperProvider>
        <SafeAreaProvider>
          <Stack
            screenOptions={{        
              animation: 'slide_from_right',
            }}
          >
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="register" options={{ title: 'Registration', headerShown: false}} />
            <Stack.Screen name="device" options={{ title: 'Device Registration', headerShown: false}} />
            <Stack.Screen name="recover" options={{ title: 'Forgot Password?', headerShown: false}} />
            <Stack.Screen name="dashboard" 
              options={{ 
                title: 'Dashboard', 
                headerShown: false
              }} 
            />
          </Stack>
        </SafeAreaProvider>       
    </PaperProvider>
   
  )
}

export default RootLayout