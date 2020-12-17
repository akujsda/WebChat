import React, { ReactElement, useEffect } from "react"
import {TextField, Box, Button} from "@material-ui/core"
import {useMutation} from "@apollo/client"
import {SendMessageM} from "./query"
import {Message} from "./types"
import {Formik, FormikProps} from "formik"
import * as yup from 'yup'
import {useHistory} from "react-router-dom"
import { rootRoutes } from "../route/routes"
import Cookies from "js-cookie"

interface SendMessageInput {
  senderId: string
  text:string
}

const initialValues:SendMessageInput = {
  senderId: "",
  text:""
}

const validationSchema = yup.object().shape({
  text: yup.string().required(),
  senderId: yup.string().required(),
})

interface Props{
  userId: string | null
}
export const SendMessage = ({
  userId
}:Props):ReactElement =>{
  const [sendMessage] = useMutation<Message>(SendMessageM)
  const history= useHistory()
  const id= Cookies.get("userId")

  useEffect(():void => {
    if(!id){
      history.push(rootRoutes.login)
    }
  }, [id])


  const setTextValue = (formikBag:any): void=>{
    const sendMessageInput:any = document.getElementById("sendMessageInput")
    if(sendMessageInput){
    formikBag.setFieldValue("text", sendMessageInput.value)
    }
  }


  const  sendMessageAsync = async(values:SendMessageInput):Promise<void> =>{
    if(values){
    try {
     await sendMessage({
        variables: {
          input: {
            senderId:id,
            text: values.text
          },
        },
      })
    } catch {}
  }
  }

  return (
    <Formik
    onSubmit={(values):void => console.log(values)}
    initialValues={initialValues}
    validationSchema={validationSchema}
    component={(
      formikBag
    ): ReactElement<FormikProps<SendMessageInput>> =>{
      return(
      <form>

        <TextField id="sendMessageInput" required  variant="outlined" onChange={():void=> setTextValue(formikBag)} />

        <Box marginTop="10px">
          <Button variant="contained" color="primary" onClick={():Promise<void>=> sendMessageAsync(formikBag.values)} >send </Button>
        </Box>

      </form>

)
}}
/>
  )}
