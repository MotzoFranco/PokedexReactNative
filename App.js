import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Image} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {NativeBaseProvider} from "native-base";
import LoginScreen from './src/screens/LoginScreen';
import PokedexStackScreen from "./src/stacks/PokedexStackScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function HomeTabs() {


    return (<Tab.Navigator tabBarOptions={{
                activeTintColor: "#fff",
        activeBackgroundColor: "red",
    }}>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
                title: 'Home',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/img/iconhome.png')}
                />
              );
            },
            }}/>
        <Tab.Screen
            name="Pokedex"
            component={PokedexStackScreen}
            options={{
                headerShown: false,
                title: 'Pokedex',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/img/iconpokedex.png')}
                />
              );
            },
            activeBackgroundColor : "red"
            }}/>
    </Tab.Navigator>);
};

export default function App() {

    return ( 

    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={HomeTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
);

};
