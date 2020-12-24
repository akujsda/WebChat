import React, { ReactElement, useRef, LegacyRef, MutableRefObject } from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import {Formik} from "formik"
import {Input} from "./ui/input"
import {AuthForm} from "./auth-form"

export interface FormTypes {
  email: string
  password: string
}

const initialValues:FormTypes = {
  email:"adsasda",
  password:""
}

export const AuthPage = ():ReactElement =>{
  const emailReference = useRef<any>(null)
  const passwordReference = useRef<any>(null)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={():void=>console.log("test")}
      component={(
        formikBag
      ):ReactElement =>{
        return(
          <AuthForm formikBag={formikBag} />
        )
      }}
    />
  )
}
