import React, { ReactElement, useRef, LegacyRef, MutableRefObject } from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import {Formik} from "formik"
import {Input} from "../ui/input"
import {RegisterForm} from "../register/register-form"

export interface FormTypes {
  email: string
  password: string
  name: string
}

const initialValues:FormTypes = {
  email:"",
  password:"",
  name:"",
}

export const RegisterPage = ():ReactElement =>{
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
          <RegisterForm formikBag={formikBag} />
        )
      }}
    />
  )
}
