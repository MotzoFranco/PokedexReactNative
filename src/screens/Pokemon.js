import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import {colors, backgroundColors, textColor} from '../../assets/colors';
import * as Animatable from 'react-native-animatable';
function Pokemon({route}) {

    const [poke, setPoke] = useState([]);
    const [especie, setEspecie] = useState([]);
    const [evolucion, setEvolucion] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerPokemon = async () => {
            try{
            const url = `${route.params.pokemon.url}`;
            const res = await fetch(url);
            const data = await res.json();
            setPoke(data);
            setLoading(false)
            } catch (e){
                console.log(e)
            }
        };
        // const getEspecie = async () => {
        //     try{
        //     const url = `https://pokeapi.co/api/v2/pokemon-species/${poke.id}`;
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     setEspecie(data);

        //     }catch(e){
        //         console.log(e)
        //     }
        // };
        obtenerPokemon();
        // getEspecie();
    }, []);


    // const getEvolucion = async () => {
    //     try{
    //     const url = `${especie.evolution_chain.url}`;
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     setEvolucion(data);
    //     }catch(e){
    //         console.log(e)
    //     }
    // };
    
    // useEffect(() => {
    //     getEvolucion();
    // }, [])

    // console.log(especie);
    const imagenPoke = [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`];
    const styles = StyleSheet.create({
        titulo: {
            textAlign: "center",
            textTransform: 'capitalize',
            fontSize: 40
        }
    });
    if (loading) {
        return <ActivityIndicator size="large" color="#00ff00"/>;
    }
    return (
        <Animatable.View animation="slideInDown">
            <View
                style={{
                    backgroundColor: colors[
                        poke
                            .types[0]
                            .type
                            .name
                    ],

                }}>
                <Text style={styles.titulo}>{poke.name}
                </Text>
                <View
                    style={{
                        alignItems: "center"
                    }}>
                    <ScrollView
                        style={{
                            width: 200,
                            height: 200,
                            
                        }}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        persistentScrollbar={true}>
                        {
                            imagenPoke.map((imagen) => (

                                <Image
                                    style={{
                                        width: 200,
                                        height: 200,
                                        borderRadius: 200 / 2,
                                        borderWidth:2,
                                        borderColor: "black",
                                        backgroundColor: backgroundColors[
                                            poke
                                                .types[0]
                                                .type
                                                .name
                                        ]
                                    }}
                                    source={{
                                        uri: imagen
                                    }}/>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "baseline",
                    direction: "inherit"
                }}>
                {
                    poke
                        .types
                        .map((tipos) => {
                            return <Text
                                style={{
                                    color: textColor.white,
                                    backgroundColor: colors[tipos.type.name],
                                    textTransform: 'capitalize',
                                    borderRadius: 10,
                                    padding: 5
                                }}>{tipos.type.name}</Text>
                        })
                }
            </View>
            <View
                style={{
                    marginLeft: 50,
                    marginRight: 50
                }}>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "baseline",
                        direction: "inherit"
                    }}>
                    <Text
                        style={{
                            fontSize: 20
                        }}>Habilidades</Text>
                    {
                        poke
                            .abilities
                            .map((abi) => {
                                return <Text
                                    style={{
                                        textTransform: 'capitalize'
                                    }}>{abi.ability.name}</Text>
                            })
                    }
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                        direction: "inherit",
                        marginTop: -65
                    }}>
                    <Text
                        style={{
                            fontSize: 20
                        }}>Experiencia base</Text>
                    {
                        poke
                            .stats
                            .map((estadi) => {
                                return <Text
                                    style={{
                                        textTransform: 'capitalize'
                                    }}>{estadi.stat.name}: {estadi.base_stat}</Text>
                            })
                    }
                </View>
                <Text style={{fontSize: 20}}>Evoluciones</Text>
                {/* {
                    evolucion.chain.map((evolve) => {
                        return <Text> {evolve.name} </Text>
                    })
                } */}
            </View>
        </Animatable.View>
    );
};

export default Pokemon;