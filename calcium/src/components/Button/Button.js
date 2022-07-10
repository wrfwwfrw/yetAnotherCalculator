import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native'

const Button = ({onPress, text, type="Primary", bgc, fgc}) => {
  return (
    <Pressable onPress={onPress}
    style={styles.buttonStyle,
       styles['buttonStyle_${type}'],
       bgc ? {backgroundColor:'#4A6D72'} : {backgroundColor:"#4A6D7C"}
     }>
      <View style={styles.text_container}>
        <Text style={styles.text, fgc ? {color:fgc} : {}}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding:15,
    marginVertical:10,
  },
  buttonStyle_PRIMARY:{
    backgroundColor: '#F67E7D'
  },
  text_container:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    height:80,
  },
  text: {
    frontWeight: 'bold',
    color: 'white',
  }
})

export default Button
