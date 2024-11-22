import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import React from 'react'
import { useRouter } from 'expo-router'

const Notification = () => {
  const router = useRouter();
  const empty = require("./../../../assets/empty.png");

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: "PoppinsBold", textAlign: 'left', fontSize: 20, color: "#0f55e3", paddingTop: 10, paddingLeft: 20, backgroundColor: 'white', elevation:10}}>Notification</Text>
      </View>
      <Text style={{fontFamily: "Poppins", textAlign: 'left', fontSize: 15, color: "gray", marginVertical: 5, marginLeft: 20}}>Recent</Text>
      <View style={styles.container}>
        <Image source={empty} style={{width: 200, height: 200, alignSelf: 'center', marginTop: 100}}/>
        <Text style={{fontFamily: "Poppins", fontSize: 15, color: "gray", textAlign: 'center', marginTop: -20}}>No notifications at the moment...</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    elevation: 100,
    opacity: 1
  },
});