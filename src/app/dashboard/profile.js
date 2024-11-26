import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const profile = require("../../assets/profile.jpg");

const Profile = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={profile}
          style={[
            styles.profileImage,
            { borderColor: isDarkMode ? "#bbb" : "#0f55e3" },
          ]}
        />
        <Text style={[styles.name, isDarkMode && styles.darkText]}>
          Evegen P. Dela Cruz
        </Text>
        <Text
          style={[
            styles.email,
            isDarkMode && styles.darkText,
          ]}
        >
          delacruz.evegen30@gmail.com
        </Text>

        <View style={styles.statsContainer}>
          <View>
            <Text style={[styles.statsValue, isDarkMode && styles.darkText]}>1</Text>
            <Text style={[styles.statsTitle, isDarkMode && styles.darkSubtitle]}>Following</Text>
          </View>
          <View>
            <Text style={[styles.statsValue, isDarkMode && styles.darkText]}>5.4M</Text>
            <Text style={[styles.statsTitle, isDarkMode && styles.darkSubtitle]}>Followers</Text>
          </View>
          <View>
            <Text style={[styles.statsValue, isDarkMode && styles.darkText]}>1 yr</Text>
            <Text style={[styles.statsTitle, isDarkMode && styles.darkSubtitle]}>Joined</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: isDarkMode ? "#bbb" : "#0f55e3" }]}>
          Profile
        </Text>

        <TouchableOpacity style={[styles.button, isDarkMode && styles.darkButton]}>
          <FontAwesome5 name="user" size={20} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.buttonLabel, { color: isDarkMode ? "white" : "black" }]}>
            Edit Profile
          </Text>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: isDarkMode ? "#bbb" : "#0f55e3" }]}>
          Settings
        </Text>

        <TouchableOpacity style={[styles.button, isDarkMode && styles.darkButton]}>
          <Ionicons name="settings-outline" size={23} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.buttonLabel, { color: isDarkMode ? "white" : "black" }]}>
            General Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, isDarkMode && styles.darkButton]}>
          <Ionicons name="wallet-outline" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.buttonLabel, { color: isDarkMode ? "white" : "black" }]}>
            Payment Methods
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, isDarkMode && styles.darkButton]}>
          <Ionicons name="help-circle-outline" size={25} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.buttonLabel, { color: isDarkMode ? "white" : "black" }]}>
            FAQ
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 16,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 18,
    borderWidth: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontFamily:'PoppinsBold'
  },
  darkText: {
    color: "white",
  },
  email: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily:'Poppins'
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
    width: "100%",
  },
  statsValue: {
    fontSize: 18,
    textAlign: "center",
    fontFamily:'PoppinsBold'
  },
  statsTitle: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    fontFamily:'Poppins'
  },
  darkSubtitle: {
    color: "#bbb",
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'PoppinsBold',
    alignSelf: "flex-start", // Aligns the text to the left
    marginLeft: 30, 

  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    paddingLeft:'50',
    width: "90%",
  },
  darkButton: {
    backgroundColor: "#444",
  },
  buttonLabel: {
    marginLeft: 16,
    fontSize: 15,
    fontFamily:'Poppins'
  },
});
