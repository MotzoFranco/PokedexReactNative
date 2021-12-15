import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokedex from "../screens/PokedexScreen";
import Pokemon from '../screens/Pokemon';



function PokedexStackScreen(){
    const PokedexStack = createNativeStackNavigator();
    return (

        <PokedexStack.Navigator>
            <PokedexStack.Screen name="Lista de Pokemons" component={Pokedex} options={{headerShown: false}}/>
            <PokedexStack.Screen name="Pokemon" component={Pokemon} />
        </PokedexStack.Navigator>
    );
};

export default PokedexStackScreen;