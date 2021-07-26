// import React, {useState} from 'react';
// import { View, Text, TextInput, TouchableOpacity,  StyleSheet } from 'react-native'

// expor default function ImcDois() {

//     const [valores, setValores] = useState({
//         a:0, 
//         b:0, 
//         resposta: ''
//     });

//     const CalculoImc = () =>{
//         const calcular = this.state.peso/(this.state.altura*this.state.altura)
//         if(calcular  <= 18.4){
//             setValores({
//                 ...valores, resposta:`$(calcular): Abaixo do peso`
//             }) else if(calcular >=18.5 && calcular<=24.9) {
//                 ...valores, resposta:`$(calcular): Peso normal`
//             } else{
//                 ...valores, resposta:`$(calcular): Abaixo do peso`
//             }
//         }
//     }
// }