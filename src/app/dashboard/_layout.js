import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            drawerLabel: 'Home',
            title: 'MOTORSIKYO',
            headerStyle: {
              backgroundColor: '#0f55e3', // Example background color
            },
            headerTintColor: 'white', // Change the text color of the header
            headerTitleStyle: {
              fontFamily: 'PoppinsBold', // Apply the custom font
              fontSize: 20,
              justifyContent: 'center' // Adjust the font size if needed
            },
            drawerLabelStyle: {fontFamily: 'Poppins', fontSize: 15, marginTop: 5},
            headerTitleAlign: 'center', // Center the header title
            drawerIcon: ({ focused }) => (
              <Ionicons name={focused ? 'home' : 'home'} size={22} color={focused ?'#0f55e3': 'gray'}/>
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            title: 'PROFILE',
            headerStyle: {
              backgroundColor: '#0f55e3', // Set header background color
            },
            headerTintColor: 'white', // Set header text color
            headerTitleStyle: {
              fontFamily: 'PoppinsBold', // Apply custom font
              fontSize: 20, // Customize font size
            },
            drawerLabelStyle: {fontFamily: 'Poppins', fontSize: 15, marginTop: 5},
            headerTitleAlign: 'center', // Center the header title
            drawerIcon: ({ focused }) => (
              <Ionicons name={focused ? 'person' : 'person'} size={22} color={focused ?'#0f55e3': 'gray'}/>
            ),
          }}
        />
        <Drawer.Screen
          name="upgrade"
          options={{
            drawerLabel: 'Upgrade',
            title: 'UPGRADE',
            headerStyle: {
              backgroundColor: '#0f55e3',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'PoppinsBold',
              fontSize: 20,
            },
            drawerLabelStyle: {fontFamily: 'Poppins', fontSize: 15, marginTop: 5},
            headerTitleAlign: 'center', 
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'crown' : 'crown'} size={23} color={focused ?'#0f55e3': 'gray'}/>
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'SETTINGS',
            headerStyle: {
              backgroundColor: '#0f55e3',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'PoppinsBold',
              fontSize: 20,
            },
            drawerLabelStyle: {fontFamily: 'Poppins', fontSize: 15, marginTop: 5, marginLeft:-3},
            headerTitleAlign: 'center', // Center the header title
            drawerIcon: ({ focused }) => (
              <Ionicons name={focused ? 'settings-sharp' : 'settings-sharp'} size={20} color={focused ?'#0f55e3': 'gray'} marginHorizontal={3}/>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
