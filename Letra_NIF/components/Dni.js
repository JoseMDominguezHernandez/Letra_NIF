import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


export default function nif() {
  const [dni, setDni] = useState('');
  return (
    <>
      <View style={styles.contenedor1}>
        <TextInput
          style={styles.campo1}
          placeholder="DNI"
          onChangeText={value => setDni(value)}
          keyboardType="numeric"
          maxLength={8}
          placeholderTextColor={'silver'}
          borderBottomColor="black"
        />
        <Text style={styles.campo2}>{letraNif(dni)}</Text>
      </View>
    </>
  );
}

function letraNif(numero) {
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  var letra;
  var resto = numero % 23;
  if (numero.length === 8) {
    letra = letras.charAt(resto).toUpperCase();
  } else {
    letra = '';
  }
  return letra;
}

//Estilos que vamos a aplicar en los diferentes componentes
const styles = StyleSheet.create({
  contenedor1: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'rigth',
  },
  campo1: {
    marginRight: 5,
    fontSize: 22,
    fontWeight: '600',
    padding: 15,
    width: 150,
    textAlign: 'right',
    color: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  campo2: {
    fontSize: 22,
    fontWeight: '600',
    padding: 15,
    width: 50,
    textAlign: 'left',
    color: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  nombre: {
    marginTop: 250,
    fontSize: 20,
    textAlign: 'center',
  },
});


