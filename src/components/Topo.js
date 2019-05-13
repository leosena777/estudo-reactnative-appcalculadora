import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2196f3',
    padding: 10,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: '#fff',
  },
});

export default () => (
  <View style={styles.topo}>
    <Text style={styles.titulo}> Calculadora 1.0 </Text>
  </View>
);
