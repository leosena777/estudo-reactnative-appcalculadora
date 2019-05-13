import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    padding: 15,
    justifyContent: 'center',
  },
});

const Comando = props => (
  <View style={styles.box}>
    <Button title="Calcular" onPress={props.acao} />
  </View>
);

export default Comando;
