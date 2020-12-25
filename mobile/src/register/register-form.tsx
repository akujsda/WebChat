import React, { ReactElement, useRef, LegacyRef, MutableRefObject, useEffect } from "react"
import {TextInput, Text, View, StyleSheet} from 'react-native'
import {Formik, FormikProps} from "formik"
import {Input} from "../ui/input"
import {FormTypes} from "./register-page"
import {Button} from "../ui/button"
import { UserSignUpM } from "./query"
import {  useMutation } from "@apollo/client"
import Toast from 'react-native-simple-toast';


interface AuthFormProps {
  formikBag:FormikProps<FormTypes>
}

const styles=StyleSheet.create({
  container:{
    alignItems:'center'
  }
})

export const RegisterForm = ({
  formikBag,
}):ReactElement =>{
  const [userSignUp]=useMutation<any>(UserSignUpM)
  useEffect(() => {
    Toast.show('This is a long toast.', Toast.LONG);
  }, [])

    const  userSignUpAsync = async():Promise<void> =>{
    if(!formikBag.errors.email && !formikBag.errors.name && !formikBag.errors.password){
      try {
        await userSignUp({
            variables: {
              input: {
                email: formikBag.values.email,
                name: formikBag.values.name,
                password: formikBag.values.password
              },
            },
          })
      } catch {}
    }
  }

        return(
          <View>
            <Input
              placeholder="Email"
              name="email"
              formikBag={formikBag}
            />
            <Input
              placeholder="Name"
              name="name"
              formikBag={formikBag}
            />
            <Input
              placeholder="Password"
              name="password"
              formikBag={formikBag}
              secureTextEntry={true}
            />
            <View style={styles.container}>
              <Button text="Register" onPress={userSignUpAsync} />
            </View>
          </View>
        )
}
