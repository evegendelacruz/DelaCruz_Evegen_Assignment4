import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, BackHandler } from "react-native";
import { Switch } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const banner = require("./../../../assets/banner.png");

const Dashboard = () => {
  // Declare states for dark mode and switch value
  const [isSwitchOn, setIsSwitchOn] = useState(false); // Correctly declare the switch state

  // Function to toggle the switch
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // Determine the icon color based on switch state
  const getIconColor = () => (isSwitchOn ? '#0f55e3' : '#d3d3d3'); // blue if on, gray if off

  // Prevent the back button press
  useEffect(() => {
    const backAction = () => {
      return true; // Disable the default back action
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return (
    <SafeAreaView style={styles.insideContainer}>
      <Image source={banner} style={styles.bannerImage} />

      <View style={styles.deviceControllerCon}>
        <View style={styles.deviceControllerRow}>
          <View style={styles.deviceControllerTitleCon}>
            <MaterialIcons name="verified-user" size={24} color={getIconColor()} style={styles.iconMargin} />
            <Text style={styles.deviceControllerTitle}>Motorsikyo is {isSwitchOn ? 'running...' : 'disabled'}</Text>
          </View>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#0f55e3" style={styles.switchStyle} />
        </View>
        <Text style={[styles.deviceControllerSubtitle, { marginTop: -15, paddingBottom: 10, marginLeft: 40 }]}>
          {isSwitchOn ? 'Device Connected' : 'Device Disconnected'}
        </Text>
      </View>

      <View style={styles.buttonGallery}>
        {['Monitor Vehicle', 'Track Vehicle', 'Emergency Alert', 'Security Footage', 'Recent Activity', 'Settings'].map((label, index) => {
          const icons = [
            
            <MaterialCommunityIcons name="webcam" size={30} color={getIconColor()} />,
            <MaterialIcons name="location-on" size={30} color={getIconColor()} />,
            <MaterialIcons name="warning" size={30} color={getIconColor()} />,
            <Entypo name="folder" size={30} color={getIconColor()} />,
            <MaterialIcons name="history" size={30} color={getIconColor()} />,
            <MaterialIcons name="settings" size={30} color={getIconColor()} />,
    
          ];

          return (
            <TouchableOpacity
              key={index}
              style={styles.galleryButton}
              disabled={!isSwitchOn}  // Disable button when switch is off
              // Removed the onPress function to make it non-navigational
            >
              {icons[index]}
              <Text style={styles.galleryButtonText}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  insideContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f3f3',
  },

  insideHeader: {
    fontFamily: "PoppinsBold",
    fontSize: 28,
    color: "#0f55e3",
    textAlign: "center",
  },

  bannerImage: {
    width: 330,
    height: 111,
    marginVertical: 10,
    borderRadius: 10,
  },
  deviceControllerCon: {
    marginVertical: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    elevation: 5,
  },
  deviceControllerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: 10,
  },
  deviceControllerTitleCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginRight: 5,
  },
  deviceControllerTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#333',
  },
  switchStyle: {
    marginRight: 15,
  },
  deviceControllerSubtitle: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#777',
  },
  buttonGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  galleryButton: {
    width: '48%',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    elevation: 5,
  },
  galleryButtonText: {
    marginTop: 8,
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#333',
  },
});
