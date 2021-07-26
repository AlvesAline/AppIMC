import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {styles} from "./styles"

const Noticias = (props) =>{
    return (
        <View>
            <Text>Titulo:{props.titulo} </Text>
            <Text>Autor: {props.autor} </Text>
            <Text>Conteudo:{props.conteudo} </Text>
        </View>
    );
}

export default Informacoes = () => {
    return (
        <View >
            <Noticias  style={styles.info} titulo='A Alimentaçõa influencia no seu etsado de Humor'
                autor='Ramires Monteiro'
                conteudo='Você sabia que a alegria e a tristeza também podem ter sua origem na alimentação? Veja a seguir, alguns dos ALIMENTOS e NUTRIENTES que podem contribuir para seu bom humor.
                • Triptofano e Carboidratos bem humorados!
                • Folato antidepre!
                • Vitamina B6 com muito prazer!
                • O Cálcio nosso de cada dia!
                • Magnésio colaborador do Cálcio
                • Selênio, um mineral magistral!'
                />
                <Noticias  titulo='A Alimentaçõa influencia no seu etsado de Humor'
                autor='Ramires Monteiro'
                conteudo='Você sabia que a alegria e a tristeza também podem ter sua origem na alimentação? Veja a seguir, alguns dos ALIMENTOS e NUTRIENTES que podem contribuir para seu bom humor.'
                />
                <Noticias titulo='A Alimentaçõa influencia no seu etsado de Humor'
                autor='Ramires Monteiro'
                conteudo='Você sabia que a alegria e a tristeza também podem ter sua origem na alimentação? Veja a seguir, alguns dos ALIMENTOS e NUTRIENTES que podem contribuir para seu bom humor.'
                />
        </View>
    );
}

