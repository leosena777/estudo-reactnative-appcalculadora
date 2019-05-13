import React from 'react';
import {
  TextInput, View, Text, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  numero: {
    width: 150,
    fontSize: 20,
    backgroundColor: '#ddd',
    borderRadius: 12,
  },
});

const Numero = props => (
  <View>
    <Text>{props.titulo}</Text>
    <TextInput
      style={styles.numero}
      value={props.num}
      onChangeText={valor => props.atualizaValor(props.nome, valor)}
      keyboardType="numeric"
    />
  </View>
);

export default Numero;
