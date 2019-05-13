import React, { Component } from 'react';
import { Picker, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#ddd',
    borderRadius: 15,
  },
  box: {
    padding: 15,
    paddingTop: 5,
  },
});

class Operacao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.box}>
        <Picker
          style={styles.operacao}
          selectedValue={this.props.operacao}
          onValueChange={(op) => {
            this.props.atualizaOperacao(op);
          }}
        >
          <Picker.Item label="Soma" value="soma" />
          <Picker.Item label="Subtracao" value="subtracao" />
        </Picker>
      </View>
    );
  }
}

export default Operacao;
