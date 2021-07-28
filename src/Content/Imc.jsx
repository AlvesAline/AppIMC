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
    
    const[pesoFinal, setpesoFinal] = useState('')

    const handleInputChange = (name, value) => {
        setValores({
            ...valores, [name]:value
        })
    }

    const calcular = ()=> {
        let calculoImc = valores.peso/(valores.altura*valores.altura)

        if(calculoImc <= 18.46){
            setpesoFinal("Abaixo do peso!")
        } else if (calculoImc >= 18.5 && calculoImc <=24.9){
            setpesoFinal("Peso Normal!")
        } else {
            setpesoFinal("Acima do peso!");
        }
    }

    return (
        <View>
            <View style={styles.title}><Text style={styles.title}>Calculadora de IMC</Text></View>
            <View style={styles.principal}>
                <TextInput style={styles.form} placeholder='Digite seu Nome'  onChangeText={(valor) => handleInputChange ("nome", (valor))}/>
                <TextInput style={styles.form} placeholder='Digite seu Peso' keyboardType='numeric'  onChangeText={(valor) => handleInputChange ("peso", Number(valor))} />
                <TextInput style={styles.form} placeholder='Digite seu Altura' keyboardType='numeric' onChangeText={(valor) => handleInputChange ("altura", Number(valor))}/>
                <TouchableOpacity style={styles.botao} onPress={() => calcular() }><Text style={styles.botaoTexto} >Calcular IMC</Text></TouchableOpacity>
            
                <Text style={styles.result}>{valores.nome}</Text>
                <Text style={styles.result}>{pesoFinal}</Text>
                
            </View>
        </View>
    )
}   
