import React, { ReactElement, useState, useEffect } from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { Actions } from "react-native-router-flux"
import { rootRoutes } from "../../routes/rootRoutes"

const styles=StyleSheet.create({
  container:{
    paddingRight:10,
    width:80,
  },
  authButton:{
    backgroundColor:'blue',
    borderRadius:10,
    height:30,
    marginBottom:10,
  },
  text:{
    color:'white',
    textAlign:'center',
    fontWeight:'600',
    fontSize:15,
    paddingTop:5,
  },
})


interface ButtonProps{
  onPress?: ()=>Promise<void>
  text: string
}

export const Button = ({
  onPress,
  text
}:ButtonProps):ReactElement =>{

    return(

      <View style={styles.container}>
        <TouchableOpacity style={styles.authButton} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
