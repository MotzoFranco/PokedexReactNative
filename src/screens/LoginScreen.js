import React from "react";
import {View, StyleSheet, Button, ImageBackground} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as Animatable from 'react-native-animatable';

function LoginScreen({navigation}) {
    const [request, response, promptAsync] = Google.useAuthRequest(
        {expoClientId: '210989948308-76biiqgva6kvi6k5abjukkmp5agi55ma.apps.googleusercontent.com'}
    );

    React.useEffect(() => {
        if (
            response
                ?.type === 'success'
        ) {
            console.log(response);
            navigation.navigate("Home", {auth: response.authentication})
        }
    }, [response]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'transparent'
        },
        loginContainer: {
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center'
        },
        backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: 500,
            height: "100%",
            backgroundColor: 'rgba(0,0,0,.6)',
            opacity: 0.5
        }
    });
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <ImageBackground
                source={require('../../assets/img/home.jpg')}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}>
                <Animatable.View
                    animation="zoomIn"
                    style={{
                        backgroundColor: 'rgba(0,0,0,.6)',
                        opacity: 0.9
                    }}>

                    <Animatable.Image
                        animation="slideInDown"
                        style={{
                            width: 400,
                            height: 200,
                            marginLeft: 150,
                            marginRight: 150,
                            marginBottom: 50
                        }}
                        source={require('../../assets/img/pokeballicon.png')}/>
                    <Button
                        animation="zoomIn"
                        disabled={!request}
                        title="Login with Google"
                        onPress={() => {
                            promptAsync();
                        }}/>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;