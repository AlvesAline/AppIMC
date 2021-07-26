import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../assets/Logo.png'
import {styles} from './styles'

export default function Header() {
    return(
        <View style={styles.container}>
                <Text style={styles.texto}>SoulHealth</Text>
                <Image source={Logo} style={styles.img} />
        </View>
    )
}