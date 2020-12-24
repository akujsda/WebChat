import React, { ReactElement, useEffect } from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {RegisterPage} from "./register-page"
import {SignUpIcon} from "./signup-icon"
import {Header} from "../ui/header"
import { Actions } from 'react-native-router-flux';
import { rootRoutes } from "../../routes/rootRoutes"
const styles = StyleSheet.create({
  containter:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:'auto',
    marginBottom:'auto'
  }
})

export const Register = ():ReactElement =>{
  const goToLogin = () =>{
    Actions.push(rootRoutes.login)
  }
  return(
    <>
    <Header />
    <View style={styles.containter} >
      <SignUpIcon />
      <RegisterPage />
      <TouchableOpacity onPress={goToLogin}>
        <Text>Already have account?</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}
