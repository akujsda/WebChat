import React, { ReactElement, useState, useEffect } from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { Actions } from "react-native-router-flux"
import { rootRoutes } from "../../routes/rootRoutes"

const styles=StyleSheet.create({
  container:{
    paddingRight:10,
    width:80,
  },
  authHeaderButton:{
    backgroundColor:'white',
    borderRadius:10,
    height:30,
    marginBottom:10,
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
  headerText:{
    color:'blue',
    textAlign:'center',
    fontWeight:'600',
    fontSize:15,
    paddingTop:5,
  }
})

interface AuthButtonProps{
  isHeader?: boolean
}

export const AuthButton = ({
  isHeader
}:AuthButtonProps):ReactElement =>{
  const [isLoginButtonVisible, setLoginButtonVisible]=useState<boolean>(true)

  const goToLogin = () =>{
    Actions.push(rootRoutes.login)

  }
  useEffect(() => {
    setLoginButtonVisible(Actions.currentScene === rootRoutes.login ? false : true)

  }, [Actions.currentScene])

  if(isLoginButtonVisible){
    return(

      <View style={styles.container}>
        <TouchableOpacity style={ isHeader ? styles.authHeaderButton : styles.authButton} onPress={goToLogin}>
          <Text style={isHeader ? styles.headerText : styles.text}>login</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return <></>
}
