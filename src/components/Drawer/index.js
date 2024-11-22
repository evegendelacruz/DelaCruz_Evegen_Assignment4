import { View, Image, Text } from 'react-native' 
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer' 
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from 'react-native-safe-area-context' 
import { useRouter } from 'expo-router'

export default function DrawerContent(props) {

    const [loaded] = useFonts({
        Poppins: require("../../assets/font/Poppins-Medium.ttf"),
        PoppinsBold: require("../../assets/font/Poppins-Bold.ttf"),
    });
      
    if (!loaded) {
        return null; 
    }

    const router = useRouter();
    const year = new Date().getFullYear();  

    const handleLogout = async () => {
        router.replace('/');
    }

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20 + top,
                        paddingBottom: 20,
                        marginTop: 20
                    }}
                > 
                    <Image source={require('../../assets/profile.jpg')} style={{ alignSelf: 'center', height: 120, width: 120, borderRadius:100, borderColor: '#0f55e3', borderWidth: 5 }} /> 
                </View>
                <Text style={{fontFamily: 'Poppins', color:'gray', fontSize: 18, textAlign: 'center', justifyContent:'center', alignItems:'center'}}>Evegen P. Dela Cruz</Text>
                <Text style={{fontFamily: 'Poppins', color:'gray', fontSize: 12, textAlign: 'center', justifyContent:'center', alignItems:'center', marginBottom: 10}}>delacruz.evegen30@gmail.com</Text>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Sign Out"
                    icon={({ focused }) => (
                        <Ionicons name={focused ? 'log-out' : 'log-out'} size={22} color={focused ? '#0f55e3' : 'gray'} marginLeft={3} />
                    )}
                    labelStyle={{ fontFamily: 'Poppins', fontSize: 15, marginLeft:-2 }}
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20
                }}
            >
                <Text style={{fontFamily:'Poppins', color:'gray', fontSize: 10}}>
                    Copyright &copy; {year}. All rights reserved.
                </Text>
            </View> 
        </View>
    )
}
