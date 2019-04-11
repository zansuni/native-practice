import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { tsPropertySignature } from '@babel/types';

const Button = props => {

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>

  );
}

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginRight: 5,
    marginLeft: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: "#007aff",
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})