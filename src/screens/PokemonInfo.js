import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";
import {Card, Image} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";
import Tipo from '../components/Tipo';
import * as Animatable from 'react-native-animatable';

const PokemonInfo = ({pokemon}) => {
    const [pokemonInfo, setPokemonInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerInformacionPoke = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
            const res = await fetch(url);
            const data = await res.json();
            setPokemonInfo(data);
            setLoading(false);
        };
        obtenerInformacionPoke();
    }, [pokemon]);

    const peso = pokemonInfo.weight / 10;
    const altura = pokemonInfo.height / 10;
    
    const navigation = useNavigation();
    if (loading) {
        return <ActivityIndicator size="large" color="#00ff00"/>;
    }

        return (
            <Animatable.View animation="flipInX">
                <TouchableOpacity onPress = {() => {navigation.navigate ('Pokemon',{pokemon})}}>
                    <Card>
                        <Text
                            style={{
                                textTransform: 'capitalize'
                            }}>{pokemon.name}</Text>
                        <Card.Divider/>
                        <Image
                            style={{
                                width: 150,
                                height: 150
                            }}
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`
                            }}/>
                        <Text>Peso: {peso}
                            Kg</Text>
                        <Text>Altura: {altura}
                            M</Text>
                        {
                            pokemonInfo
                                .types
                                .map((tipos) => {
                                    return <Tipo
                                        key={tipos.type.name}
                                        tipoObtenido={tipos}
                                        datos={{
                                            fontSize: 5
                                        }}/>
                                })
                        }
                    </Card>
                </TouchableOpacity>
            </Animatable.View>
        )
    }

export default PokemonInfo;