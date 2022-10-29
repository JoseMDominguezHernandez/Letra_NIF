import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Title } from 'react-native-paper';
import Dni from './components/Dni';
import Titulo from './components/Titulo';

export default class App extends Component {
  render() {
    return (
      <>
        <Titulo />
        <Dni />
      </>
    );
  }
}
