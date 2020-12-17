import React, { ReactElement, useEffect } from "react"
import {TextField, Box, Button} from "@material-ui/core"
import { useQuery, useMutation } from "@apollo/react-hooks"
import {SendMessageM} from "./query"
import {Message} from "./types"
import {Formik, FormikProps} from "formik"
import * as yup from 'yup'
import {useHistory} from "react-router-dom"
import { rootRoutes } from "../route/routes"
import Cookies from "js-cookie"
import styled from 'styled-components'

const StyledTextField=styled(TextField)`
  width:300px;
`

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
  const userName= Cookies.get("userName")
  useEffect(():void => {
    if(!id){
      history.push(rootRoutes.login)
    }
  }, [history, id])


  const setTextValue = (formikBag:any): void=>{
    const sendMessageInput:any = document.getElementById("sendMessageInput")
    if(sendMessageInput){
    formikBag.setFieldValue("text", sendMessageInput.value)
    }
  }


  const  sendMessageAsync = async(formikBag:FormikProps<SendMessageInput>):Promise<void> =>{

    if(formikBag.values.text){
    try {
     await sendMessage({
        variables: {
          input: {
            senderId: id,
            text: formikBag.values.text,
            senderName: userName
          },
        },
      })
    } catch {}
    finally{
      formikBag.resetForm()
    }
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
        <Box width="300px" height="300px"  >


        <StyledTextField id="sendMessageInput" required  variant="outlined"
         onChange={():void=> setTextValue(formikBag)}
         inputProps={{
           autoComplete:"none"
         }}
          />

        <Box marginTop="10px" >
          <Button  variant="contained" color="primary" onClick={():Promise<void>=> sendMessageAsync(formikBag)} >send </Button>
        </Box>


      </Box>
)
}}
/>
  )}
