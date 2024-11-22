import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SegmentedButtons, Button } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

const Upgrade = () => {
  const [value, setValue] = React.useState('');
  const upgrade = require("../../assets/upgrade.png");

  // Function to render the price details based on selected value
  const renderPriceDetails = () => {
    switch (value) {
      case '1':
        return (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Monthly Pricing: $9.99</Text>
            <Text style={[styles.priceDescription, {marginHorizontal:20}]}>Billed monthly for full premium access.</Text>
          </View>
        );
      case '2':
        return (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Yearly Pricing: $99.99</Text>
            <Text style={styles.priceDescription}>Save 20% with an annual subscription!</Text>
          </View>
        );
      case '3':
        return (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Lifetime Pricing: $199.99</Text>
            <Text style={styles.priceDescription}>One-time payment for lifetime access.</Text>
          </View>
        );
      default:
        return (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Monthly Pricing: $9.99</Text>
            <Text style={[styles.priceDescription, {marginHorizontal:20}]}>Billed monthly for full premium access.</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headertitle}>Go Premium Now!</Text>
        <Text style={{ fontFamily: 'Poppins', textAlign: 'center', color: 'gray' }}>and guard your ride wherever you roam!</Text>
      </View>

      <Text style={{ fontFamily: 'Poppins', textAlign: 'center', fontSize: 18 }}>Select Pricing</Text>

      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        style={{
          width: '80%',
          borderRadius: 10,
          backgroundColor: '#ededed',
          alignSelf: 'center',
          marginVertical: 10,
        }}
        buttons={[
          {
            value: '1',
            label: 'Monthly',
            style: {
              backgroundColor: value === '1' ? '#b8e0ff' : 'transparent',
              borderWidth: 0,
              borderRadius: 10,
            },
            labelStyle: {
              color: value === '1' ? 'black' : 'gray', fontFamily: 'Poppins',
            },
          },
          {
            value: '2',
            label: 'Yearly',
            style: {
              backgroundColor: value === '2' ? '#b8e0ff' : 'transparent',
              borderWidth: 0,
              borderRadius: 10,
            },
            labelStyle: {
              color: value === '2' ? 'black' : 'gray', fontFamily: 'Poppins',
            },
          },
          {
            value: '3',
            label: 'Lifetime',
            style: {
              backgroundColor: value === '3' ? '#b8e0ff' : 'transparent',
              borderWidth: 0,
              borderRadius: 10,
            },
            labelStyle: {
              color: value === '3' ? 'black' : 'gray', fontFamily: 'Poppins',
            },
          },
        ]}
      />

      {renderPriceDetails()}
      <Image source={upgrade} style={{width: 250, height: 250, alignSelf:'center', marginBottom: 10}}/> 
      <Button
              mode="elevated"
              buttonColor={"#0f55e3"}
              labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
              style={{ paddingVertical: 7, paddingHorizontal: 5, margin: 10, borderRadius: 5, width: 290, height: 50, alignSelf:'center'}}
            >
              SUBCRIBE
        </Button>
    </SafeAreaView>
  );
};

export default Upgrade;

const styles = StyleSheet.create({
  headertitle: {
    fontFamily: "PoppinsBold",
    textAlign: 'center',
    fontSize: 23,
    color: "#0f55e3",
  },
  headerContainer: {
    marginVertical: 30,
  },
  priceContainer: {
    marginTop: 5,
    alignItems: 'center',

  },
  priceText: {
    fontSize: 20,
    color: '#0f55e3',
    fontFamily: 'PoppinsBold'
  },
  priceDescription: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins'
  },
});
