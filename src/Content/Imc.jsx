import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity,  StyleSheet } from 'react-native';
import {styles} from './styles'



export default Imc = () => {
    const [valores, setValores] = useState({
        altura:0, 
        peso:0, 
        nome:'', 
        result:0, 
        resulTexto:''
    })
    
    const[pesoFinal, setpesoFinal] = useState({valor:0})

    const handleInputChange = (name, value) => {
        setpesoFinal({
            ...pesoFinal, [name]:value
        })
    }

    const calcular = ()=> {
        let pesoFinal = peso/(altura*altura)

        if(pesoFinal <= 18,46){
            pesoFinalexto="Abaixo do peso!"
        } else if (pesoFinal > 18,46 && pesoFinal <=24,9){
            pesoFinalexto="Peso normal!"
        } else {
            pesoFinalexto="Acima do Peso!"
        }
    }

    return (
        <View>
            <View>Calculadora de IMC</View>
            <View>
                <TextInput style={styles.form} placeholder='Nome' textContentType="nome" onChangeText={(valor) => handleInputChange ("nome", (valor))}/>
                <TextInput style={styles.form} placeholder='Peso' keyboardType='numbers-and-punctuation'  onChangeText={(valor) => handleInputChange ("peso", Number(valor))} />
                <TextInput style={styles.form} placeholder='Altura' keyboardType='numbers-and-punctuation' onChangeText={(valor) => handleInputChange ("altura", Number(valor))}/>
                <TouchableOpacity style={styles.botao} onPress={calcular}><Text>Calcular IMC</Text></TouchableOpacity>
            
                {/* <Text style={styles.result}>{pesoFinal.valor.toFixed(2)}</Text>
                <Text style={styles.result2}>{nome}{resulTexto}</Text> */}
            </View>
        </View>
    )
}   
