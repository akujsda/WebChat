import React, { ReactElement } from "react"
import {View, Text, StyleSheet} from "react-native"

const styles=StyleSheet.create({
  circle:{
    width:150,
    height:150,
    backgroundColor:'red',
    borderRadius: 75,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:36,
  }
})

export const SignUpIcon = ():ReactElement =>{
  return (
  <View style={styles.circle}>
    <Text style={styles.text}>Register</Text>
  </View>
  )
}
