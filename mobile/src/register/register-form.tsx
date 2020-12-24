import React, { ReactElement, useRef, LegacyRef, MutableRefObject } from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import {Formik, FormikProps} from "formik"
import {Input} from "../ui/input"
import {FormTypes} from "./register-page"

interface AuthFormProps {
  formikBag:FormikProps<FormTypes>
}

export const RegisterForm = ({
  formikBag,
}):ReactElement =>{
  const emailReference = useRef<any>(null)
  const passwordReference = useRef<any>(null)
  const nameReference =useRef<any>(null)
        return(
          <View>
            <Input
              placeholder="Email"
              reference={emailReference}
              name="email"
              formikBag={formikBag}
            />
            <Input
              placeholder="Name"
              reference={nameReference}
              name="name"
              formikBag={formikBag}
            />
            <Input
              placeholder="Password"
              reference={passwordReference}
              name="password"
              formikBag={formikBag}
            />
          </View>
        )
}
