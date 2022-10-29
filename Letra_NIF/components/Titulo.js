import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Title} from 'react-native-paper';

export default class Titulo extends Component{
  render(){
    return(
      <Title style={styles.nombre}>Escriba el número de su dni</Title>
    );
  }
}


//Estilos que vamos a aplicar en los diferentes componentes
const styles = StyleSheet.create({
  nombre: {
    marginTop: 250,
    fontSize: 20,
    textAlign: 'center',
  },
});
