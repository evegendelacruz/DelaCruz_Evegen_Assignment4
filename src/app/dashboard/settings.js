import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Divider, RadioButton } from "react-native-paper";

const Settings = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false); // About Us state
  const [darkModeExpanded, setDarkModeExpanded] = useState(false); // Dark Mode dropdown state
  const [animation] = useState(new Animated.Value(0)); // Animation for About Us

  const toggleDarkModeDropdown = () => setDarkModeExpanded(!darkModeExpanded);

  const toggleAboutUs = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const expandStyle = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 150],
    }),
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return (
    <SafeAreaView
      style={[
        settingsStyle.insideContainer,
        isDarkMode ? settingsStyle.darkContainer : settingsStyle.lightContainer,
      ]}
    >

      {/* Dark Mode Menu Button */}
      <TouchableOpacity
        style={{ width: "100%", fontFamily: "Poppins", marginTop: 10 }}  // Adjusted to full width
        onPress={toggleDarkModeDropdown}
      >
        <View style={settingsStyle.menuItem}>
          <Ionicons
            name="moon"
            size={22}
            color={isDarkMode ? "white" : "gray"}
            marginBottom={5}
          />
          <Text style={[isDarkMode ? settingsStyle.menuTextDark : settingsStyle.menuText]}>
            Dark Mode
          </Text>
          <MaterialIcons
            name={darkModeExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color={isDarkMode ? "white" : "gray"}
            style={{ marginLeft: "auto" }}
          />
        </View>
        {!darkModeExpanded && <Divider style={settingsStyle.divider} />}
      </TouchableOpacity>

      {/* Dark Mode Dropdown Content */}
      {darkModeExpanded && (
        <View style={settingsStyle.dropdownContainer}>
          <RadioButton.Group
            onValueChange={(value) => setIsDarkMode(value === "on")}
            value={isDarkMode ? "on" : "off"}
          >
            <View style={settingsStyle.radioItem}>
              <RadioButton value="on" color="#0f55e3" />
              <Text
                style={[
                  settingsStyle.radioText,
                  isDarkMode ? settingsStyle.darkText : settingsStyle.lightText,
                ]}
              >
                On
              </Text>
            </View>
            <View style={settingsStyle.radioItem}>
              <RadioButton value="off" color="blue" />
              <Text
                style={[
                  settingsStyle.radioText,
                  isDarkMode ? settingsStyle.darkText : settingsStyle.lightText,
                ]}
              >
                Off
              </Text>
            </View>
          </RadioButton.Group>
        </View>
      )}

      {/* About Us Dropdown */}
      <TouchableOpacity
        style={{ width: "100%", fontFamily: "Poppins" }}  // Adjusted to full width
        onPress={toggleAboutUs}
      >
        <View style={settingsStyle.menuItem}>
          <MaterialIcons
            name="info"
            size={23}
            color={isDarkMode ? "white" : "gray"}
            marginBottom={5}
          />
          <Text style={[isDarkMode ? settingsStyle.menuTextDark : settingsStyle.menuText]}>
            About us
          </Text>
          <MaterialIcons
            name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color={isDarkMode ? "white" : "gray"}
            style={{ marginLeft: "auto" }}
          />
        </View>
        {!expanded && <Divider style={settingsStyle.divider} />}
      </TouchableOpacity>

      <Animated.View style={[settingsStyle.aboutUsContainer, expandStyle]}>
        {expanded && (
          <View style={settingsStyle.aboutUsContent}>
            <Text
              style={[
                settingsStyle.aboutUsText,
                isDarkMode ? settingsStyle.darkText : settingsStyle.lightText,
              ]}
            >
              Motorsikyo aims to enhance motorcycle rider safety and convenience
              through a mobile app and hardware device that provide safety for
              motorcycle riders' vehicles. Our goal is to empower riders with
              essential tools for a safer and more connected experience on the
              road.
            </Text>
          </View>
        )}
        <Divider style={settingsStyle.divider} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Settings;

const settingsStyle = StyleSheet.create({
  insideContainer: {
    flex: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  lightContainer: {
    backgroundColor: "#f3f3f3",
  },
  insideHeaderCon: {
    marginBottom: 20,
  },
  insideHeader: {
    fontFamily: "PoppinsBold",
    fontSize: 28,
    color: "#0f55e3",
    textAlign: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,  // Removed margin and padding for full width
  },
  menuText: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginLeft: 10,
  },
  menuTextDark: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
  dropdownContainer: {
    paddingVertical: 10,
    borderRadius: 8,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 30,
  },
  radioText: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "gray",
    marginLeft: 5,
  },
  aboutUsContainer: {
    width: "100%",  // Ensure full width
    padding: 10,
    borderRadius: 8,
  },
  aboutUsContent: {
    paddingHorizontal: 20,
    marginTop: -10,
    marginBottom: 15,
  },
  aboutUsText: {
    fontSize: 12,
    color: "gray",
    fontFamily: "Poppins",
    textAlign: "justify",
  },
  divider: {
    marginVertical: 10,
  },
});
