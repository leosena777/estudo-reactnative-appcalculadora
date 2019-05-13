import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

const styles = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
const Entrada = props => (
  <View style={styles.numeros}>
    <Numero num={props.num1} atualizaValor={props.atualizaValor} nome="num1" titulo="1.º Numero" />
    <Numero num={props.num2} atualizaValor={props.atualizaValor} nome="num2" titulo="2.º Numero" />
  </View>
);

export default Entrada;
