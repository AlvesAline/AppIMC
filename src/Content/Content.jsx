import React from 'react';
import {Text, View} from 'react-native';
import Informacoes from './Informacoes'; 
import Imc from './Imc';
import Noticias from './Informacoes'
import {styles} from './styles'


export default function Content() {
    return(
        <View>
        <View style={styles.informacao}>

            <Noticias titulo='Seja Bem Vindo ao SoulHealth'
                conteudo='Esse App é feito com dicas e orientações sobre saúde e atividade física   para desenvolvedores, a importância de pequenos hábitos que pode melhorar sua saúde.'
            />

            <Noticias titulo='A Alimentaçõa influencia no seu estado de Humor'
                autor='Ramires Monteiro'
                conteudo='Você sabia que a alegria e a tristeza também podem ter sua origem na alimentação? Veja a seguir, alguns dos ALIMENTOS e NUTRIENTES que podem contribuir para seu bom humor.
                • Triptofano e Carboidratos bem humorados!
                • Folato antidepre!
                • Vitamina B6 com muito prazer!
                • O Cálcio nosso de cada dia!
                • Magnésio colaborador do Cálcio
                • Selênio, um mineral magistral!'
                />
                
                <Noticias titulo='Entenda a importância do IMC '
                autor='OMS'
                conteudo='O IMC é o índice de massa corporal. É utilizado para medir a obesidade e o seu grau, o que influencia diretamente em questões de saúde. 
                O sobrepeso e a obesidade, que podem ser revelados ao aplicar o índice, são a porta de entrada para diversas doenças consideradas de alto risco.'
            />
            </View>
            <Imc/>
            <View style={styles.informacao}>

            <Noticias titulo='Alongamentos'
                conteudo='Inicialmente, comece pela região da cabeça, flexionando o pescoço para os dois lados. Nos ombros, faça movimentos de “girá-los” para frente e para trás; A partir disso, continue nos braços — esticando-os para cima, baixo, esquerda e direita; seguindo para a coxa, panturrilhas e lombar, tentando encostar as mãos na ponta dos pés sem flexionar o joelho. Esse exercício pode ser feito com as pernas abertas ou fechadas. 
                Além disso a famosa “espreguiçada” ao acordar já é um ótimo alongamento para o corpo.'
            />
            <Noticias titulo='Exercícios de fortalecimento'
                
                conteudo='Fortalecer a musculatura também é indispensável para evitar as dores. Para a região do tronco, as abdominais, pranchas, agachamento e flexão, são alguns exercícios recomendados. 
                Durante o período de quarentena, as atividades podem ser feitas em casa e, mesmo que não tenha peso, já ativam a região trabalhada.'
            />
            </View>
        </View>

    )
}