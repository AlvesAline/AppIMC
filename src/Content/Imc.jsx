import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,  StyleSheet } from 'react-native';
import {styles} from './styles'



export default class Imc extends Component()  {
    constructor(props) {
        super(props)
        this.state = {altura:0, peso:0, nome:"", result:0, resulTexto:""}
        this.calcular=this.calcular.bind(this)
    }

    calcular(){
        let pesoFinal = this.state.peso/(this.state.altura*this.state.altura)
        let imcFinal = this.state
        imcFinal.result = pesoFinal
        this.setState( imcFinal)

        if(imcFinal.result < 18,46){
            imcFinal.resulTexto="Abaixo do peso!"
        } else if (imcFinal.result > 18,46 || imcFinal.result <=24,9){
            imcFinal.resulTexto="Peso normal!"
        } else {
            imcFinal.resulTexto="Acima do Peso!"
        }
    }

        render(){
            return (
                <View>
                    <View>Calculadora de IMC</View>
                    <View>
                        <TextInput style={styles.form} placeholder='Nome' textContentType="nome" onChangeText={(nome)=>{this.setState({nome})}}/>
                        <TextInput style={styles.form} placeholder='Peso' keyboardType='numbers-and-punctuation' onChangeText={(peso)=>{this.setState({peso})}} />
                        <TextInput style={styles.form} placeholder='Altura' keyboardType='numbers-and-punctuation' onChangeText={(altura)=>{this.setState({altura})}}/>
                        <TouchableOpacity style={styles.botao} onPress={this.calcular}><Text>Calcular IMC</Text></TouchableOpacity>
                    
                        <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
                        <Text style={styles.result2}>{this.state.nome}{this.state.resulTexto}</Text>
                    </View>
                </View>
            )
        }   
}