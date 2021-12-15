import React from "react";
import {View, StyleSheet, ImageBackground} from "react-native";
import * as Animatable from 'react-native-animatable';
import {useFonts} from 'expo-font';

function Home() {

    const styles = StyleSheet.create({
        texto: {
            fontFamily: 'Pokemon',
            fontSize: 25,
            color: "white",
            textShadowColor:'black',
            textShadowOffset:{width: 1, height: 1},
            textShadowRadius:10,
        },
        textotwo: {
            fontFamily: 'Pokemon',
            fontSize: 20,
            color: "white",
            textShadowColor:'black',
            textShadowOffset:{width: 1, height: 1},
            textShadowRadius:10,
        }
    });

    let [fontsLoaded] = useFonts(
        {'Pokemon': require('../../assets/font/poke.ttf')}
    );
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
        <ImageBackground source={require("../../assets/img/home.jpg")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            
            <Animatable.Text animation="slideInDown" delay={200} style={styles.texto}>Esta es la Pokedex {"\n"} llamada Pokevinci</Animatable.Text>
            <Animatable.Text animation="bounceIn" delay={200} style={styles.textotwo}>Alumno: Franco Daniel Motzo</Animatable.Text>
            <Animatable.Text animation="slideInUp" delay={200} style={styles.textotwo}>Profesor: Christian Dario Nievas</Animatable.Text>
        </View>
        </ImageBackground>
        </View>
    );
};

export default Home;