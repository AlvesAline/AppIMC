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

    const calcular = ()=> {
        let pesoFinal = peso/(altura*altura)
        let imcFinal = this.state
        imcFinal.result = pesoFinal
        

        if(imcFinal.result <= 18,46){
            imcFinal.resulTexto="Abaixo do peso!"
        } else if (imcFinal.result > 18,46 && imcFinal.result <=24,9){
            imcFinal.resulTexto="Peso normal!"
        } else {
            imcFinal.resulTexto="Acima do Peso!"
        }
    }

    return (
        <View>
            <View>Calculadora de IMC</View>
            <View>
                <TextInput style={styles.form} placeholder='Nome' textContentType="nome" onChangeText={(nome)=>{({nome})}}/>
                <TextInput style={styles.form} placeholder='Peso' keyboardType='numbers-and-punctuation' onChangeText={(peso)=>{({peso})}} />
                <TextInput style={styles.form} placeholder='Altura' keyboardType='numbers-and-punctuation' onChangeText={(altura)=>{({altura})}}/>
                <TouchableOpacity style={styles.botao} onPress={calcular}><Text>Calcular IMC</Text></TouchableOpacity>
            
                <Text style={styles.result}>{result.toFixed(2)}</Text>
                <Text style={styles.result2}>{nome}{resulTexto}</Text>
            </View>
        </View>
    )
}   


  // constructor(props) {
    //     super(props)
    //     this.state = {altura:0, peso:0, nome:"", result:0, resulTexto:""}
    //     this.calcular=this.calcular.bind(this)
    // }