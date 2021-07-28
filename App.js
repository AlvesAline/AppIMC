import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/Header/Header'
import Content from './src/Content/Content'
import Footer from './src/Footer/Footer'

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header/>
      <Content/>
      <Footer/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
