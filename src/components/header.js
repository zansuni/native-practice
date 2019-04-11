import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },

  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    elevation: 2,
    position: 'relative'


  }

})


export default Header;