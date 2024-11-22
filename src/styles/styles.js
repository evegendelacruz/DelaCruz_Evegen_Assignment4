import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f55e3',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins'
  },

  lightContainer: {
    flex: 1,
    backgroundColor: '#f1f9ff', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'Poppins',
  },

  darkContainer: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'Poppins',
  },

  lightText: {
    color: '#000', // Default text for light mode
  },

  darkText: {
    color: '#fff', // Text for dark mode
  },

  insideContainer:{
    flex: 1,
    backgroundColor: '#f1f9ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'Poppins',
  },

  insideHeaderCon:{
    backgroundColor:'#0f55e3',
    width:'100%',
    height: '50%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
  },

  insideHeader:{
    fontFamily:'PoppinsBold',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 2,
  },

  deviceControllerCon: {
    backgroundColor: 'white',
    width: 330,
    padding: 10,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },

  deviceControllerTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    textAlign: 'left',
  },

  deviceControllerSubtitle: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#555',
    textAlign: 'left',
    marginLeft: 40,
    alignItems: 'flex-start'
  },

  buttonGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15
  },
  
  galleryButton: {
    backgroundColor: 'white',
    width: '48%', 
    padding: 15,
    borderRadius: 10,
    borderColor: '#ededed',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  
  galleryButtonText: {
    marginTop: 10,
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  
  header: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingTitle: {
    color: 'white',
    fontFamily: 'PoppinsBold',
    fontSize: 26,
  },
  
  subheadingTitle: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 13,
    alignSelf: 'center'
  },

  pageTitle: {
    fontFamily: 'PoppinsBold',
    marginTop: 15,
    color: 'white',
    fontSize: 25,
    marginLeft: -210,
  },

  logoImage: {
    alignSelf: 'center',
    
  },

  textInput: {
    fontFamily: "Poppins",
    fontSize: 15,
    width: 290,
    height: 50,  
    borderColor: '#6edf3e', 
    margin: 10,
  },

  button: {
    fontFamily: 'PoppinsBold',
    fontSize: 20,
    paddingVertical: 7, 
    paddingHorizontal: 5, 
    margin: 10,
  },

  scrollContent: {
    padding: 26,
  },

  checkboxContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    fontFamily: "Poppins",
    marginTop: -10
  },

  checkboxLabel: {
    color: 'white', 
    marginLeft: 8,
    marginTop: 15,
    fontFamily: "Poppins", 
    fontSize: 12, 
    marginLeft:-1
  },

  menuItem: {
    flexDirection: "row", // Align the icon and text in a row
    alignItems: "center", // Center the items vertically
    paddingVertical: 10, // Adds some padding for spacing
  },
  menuText: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    marginLeft: 10, // Adds space between the icon and the text
  },
  aboutUsContainer: {
    width: "100%", // Ensuring the About Us section has the same width as the menu
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9", // Adding a background color to visually separate it
  },
  aboutUsContent: {
    padding: 10,
  },
  aboutUsText: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins",
  },
  divider: {
    marginVertical: 5, // Space for divider
  },
  nestedContent: {
    paddingLeft: 20,
    paddingVertical: 5,
  },
  nestedText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins",
  },
  
});

export default styles;
