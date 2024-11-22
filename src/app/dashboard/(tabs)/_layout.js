import React from 'react'
import { Tabs } from 'expo-router'
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

  

const DashboardLayout = () => {
  return (
     <Tabs
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0f55e3',
        tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Poppins',
            marginTop: 5
        },
        tabBarStyle: {
            height: '10%',
            borderRadius: 30, // This rounds the corners of the tab bar itself
            marginHorizontal: 40, // Optional: adds horizontal space around the tab bar
            marginVertical: 10,
            backgroundColor: '#ffffff', // Default background color for the tab bar
        },
        tabBarIndicatorStyle: {
            borderRadius: 30, // Make the indicator rounded
            height: '10%', // Make sure the active tab's background color covers the full height
        },
        tabBarShowLabel: true,
        }} 
     >
        <Tabs.Screen name='index'
            options={{
                title: 'Home',  
                tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home': 'home-outline'} size={24} color={focused ?'#0f55e3': 'black'} marginTop={5}/>
            }}
        />

        <Tabs.Screen name='notification'
            options={{
                title: 'Notification',
                tabBarIcon: ({focused}) => <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={25} color={focused ?'#0f55e3': 'black'} marginTop={4}/>
            }}
        />
     </Tabs>
  )
}

export default DashboardLayout