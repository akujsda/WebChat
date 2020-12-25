import React, { ReactElement, useRef, LegacyRef, MutableRefObject } from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import {Formik} from "formik"
import {Input} from "../ui/input"
import {AuthForm} from "./auth-form"
import * as yup from 'yup'
export interface FormTypes {
  email: string
  password: string
}

const initialValues:FormTypes = {
  email:"",
  password:""
}

const validationSchema = yup.object().shape({
  email: yup.string().required().test("err", "err", ((value): boolean => !!value && value.includes("@"))),
  password: yup.string().required().min(6),
})

export const AuthPage = ():ReactElement =>{


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={():void=>console.log("test")}
      validationSchema={validationSchema}
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
