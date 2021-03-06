import { ReactElement, LegacyRef, MutableRefObject } from "react"
import React from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import { FormikProps } from "formik"
import { FormTypes } from "../auth-page"

const styles = StyleSheet.create({
  container:{
    width: 200,
    height: 50,
    marginVertical:10,
  },
  input: {
    height: 50,
    borderColor:'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft:10,
  }
})

interface InputProps {
  placeholder:string
  formikBag:FormikProps<FormTypes>
  name:string
  secureTextEntry?:boolean
}


export const Input = ({
  placeholder,
  formikBag,
  name,
  secureTextEntry
}:InputProps):ReactElement =>{
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={text => formikBag.setFieldValue(name, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
