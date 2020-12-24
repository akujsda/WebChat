import React, { ReactElement } from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {AuthButton} from "../ui/auth-button"
import {AuthPage} from "./auth-page"
import {SignInIcon} from "./signin-icon"
import { Actions } from 'react-native-router-flux';
import {rootRoutes} from "../../routes/rootRoutes"
import {Header} from "../ui/header"

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



export const Auth = ():ReactElement =>{

  const goToRegister = () =>{
    Actions.register()
  }


  return(
    <>
    <Header />
    <View style={styles.container}>
      <SignInIcon />
      <AuthPage />
      <AuthButton />
      <TouchableOpacity onPress={goToRegister}>
        <Text>Create new account</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}
