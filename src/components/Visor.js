import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  visor: {
    fontSize: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    textAlign: 'center',
  },
  box: {
    padding: 15,
  },
});

const Visor = props => (
  <View style={styles.box}>
    <TextInput
      style={styles.visor}
      placeholder="Resultado"
      editable={false}
      value={props.resultado}
    />
  </View>
);
export default Visor;
