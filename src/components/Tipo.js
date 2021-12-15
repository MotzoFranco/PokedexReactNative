import {View, Text} from 'react-native';
import React from "react";
import {colors, textColor} from '../../assets/colors';
const Tipo = (tipoObtenido) => {

    return (
        <View style={{
        alignItems: "center"
        }}>
            <Text style={{
                    color: textColor.white,
                    backgroundColor: colors[tipoObtenido.tipoObtenido.type.name],
                    textTransform: 'capitalize',
                    borderRadius: 10,
                    padding: 5}}>{tipoObtenido.tipoObtenido.type.name}</Text>
        </View>
    );
};

export default Tipo;