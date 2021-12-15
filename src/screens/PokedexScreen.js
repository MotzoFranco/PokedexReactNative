import React, {useState, useEffect} from "react";
import {Button, Text} from 'react-native-elements'
import {View, StyleSheet, ActivityIndicator, ImageBackground, ScrollView} from "react-native";
import PokemonInfo from '../screens/PokemonInfo';
import {SafeAreaView} from "react-native-safe-area-context";

function Pokedex() {

    const styles = StyleSheet.create({
        bonito: {
            alignItems: 'center',
            flex: 1
        },
        scroll: {
            backgroundColor: 'pink',
            marginHorizontal: 20
        }
    });
    const [poke, setPoke] = useState([]);
    const [buscarpoke, setbuscarPoke] = useState(null);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    const consultarApi = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`;
        const res = await fetch(url);
        const data = await res.json();
        setPoke(data.results);
        setTimeout(() => {
            setLoading(false);
        }, 100);
    };

    useEffect(() => {
        consultarApi();
    }, [offset]);

    const paginaSiguiente = () => {
        setOffset(offset + 10);
    };
    const paginaAnterior = () => {
        if (offset === 0) 
            return;
        setOffset(offset - 10);
    };

    const buscarPokemon = () => {

    }

    if (loading) {
        return <ActivityIndicator size="large" color="#00ff00"/>;
    }
    return (
        <View>
            <ImageBackground
                source={require("../../assets/img/pokeup.png")}
                style={{}}
                resizeMode='cover'>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.bonito}>
                            {
                                buscarpoke == null
                                    ? poke.map((pokemon) => {
                                        return <PokemonInfo key={pokemon.name} pokemon={pokemon}/>
                                    })
                                    : 
                                    <Text>asd</Text>
                            }
                            <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                            <View style={{paddingLeft: "20%", paddingRight: "20%"}}>
                            <Button onPress={paginaAnterior} title="Anterior" style={styles.bonito}>paginaAnterior</Button>
                            </View>
                            <View style={{paddingLeft: "20%", paddingRight: "20%"}}>
                            <Button onPress={paginaSiguiente} title="Siguiente">paginaSiguiente</Button>
                            </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Pokedex;