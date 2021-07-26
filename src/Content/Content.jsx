import React from 'react';
import {Text, View} from 'react-native';
import Informacoes from './Informacoes';
import Imc from './Imc';


export default function Content() {
    return(
        <View>
            <Informacoes/>
            <Imc/>
        </View>
    )
}