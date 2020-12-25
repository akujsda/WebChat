import React, { ReactElement, useRef } from "react"
import { View, StyleSheet} from 'react-native'
import {Formik, FormikProps} from "formik"
import {Input} from "../ui/input"
import {FormTypes} from "./auth-page"
import {  useMutation } from "@apollo/client"
import {UserSignIn} from "./query"
import {Button} from "../ui/button"

interface AuthFormProps {
  formikBag:FormikProps<FormTypes>
}

const styles=StyleSheet.create({
  container:{
    alignItems:'center'
  }
})


export const AuthForm = ({
  formikBag,
}):ReactElement =>{
  const [userSignIn]=useMutation<string>(UserSignIn)

  const  userSignIpAsync = async():Promise<void> =>{
    if(!formikBag.errors.email && !formikBag.errors.password){
    try {
     await userSignIn({
        variables: {
          input: {
            email: formikBag.values.email,
            password: formikBag.values.password
          },
        },
      }).then((response)=>{
        console.log(response)
      })
  } catch {}
  finally{
    console.log("test")
  }
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
              placeholder="Password"
              name="password"
              formikBag={formikBag}
              secureTextEntry={true}
            />
            <View style={styles.container}>
              <Button text="login" onPress={userSignIpAsync} />
            </View>
          </View>
        )
}
