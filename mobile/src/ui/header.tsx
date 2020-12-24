import { View, Text, StyleSheet } from "react-native";
import React from 'react'
import {AuthButton} from "../ui/auth-button"
import { Actions } from 'react-native-router-flux';
import {rootRoutes} from "../../routes/rootRoutes"

const styles=StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:"center",
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
  headerText:{
    color:'white',
    fontSize:28,
    paddingLeft:10,
    paddingBottom:10,
  }
})


export const Header = () =>{


  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>WebChat</Text>
      <AuthButton isHeader/>
    </View>
  )
}
