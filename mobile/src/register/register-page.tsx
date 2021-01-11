import React, { ReactElement, useRef, LegacyRef, MutableRefObject } from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import {Formik} from "formik"
import {Input} from "../ui/input"
import {RegisterForm} from "../register/register-form"
import * as yup from 'yup'
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

const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().min(6),
  name: yup.string().required()
})

export const RegisterPage = ():ReactElement =>{
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={():void=>console.log("test")}
      validationSchema={validationSchema}
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
