import React, { ReactElement, useEffect, Fragment } from "react"
import {TextField, Box, Button} from "@material-ui/core"
import {  useMutation } from "@apollo/react-hooks"
import {SendMessageM} from "./query"
import {Message} from "./types"
import {Formik, FormikProps} from "formik"
import * as yup from 'yup'
import {useHistory} from "react-router-dom"
import { rootRoutes } from "../route/routes"
import Cookies from "js-cookie"
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTextField=styled(TextField)`
  width:300px;
  border:1px solid #3f51b5;
  border-radius:5px;
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
  text: yup.string().required().max(500),
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
  // useEffect(():void => {
  //   if(!id){
  //     history.push(rootRoutes.login)
  //   }
  // }, [history, id])


  const setTextValue = (formikBag:any): void=>{
    const sendMessageInput:any = document.getElementById("sendMessageInput")
    if(sendMessageInput){
    formikBag.setFieldValue("text", sendMessageInput.value)
    }
  }


  const  sendMessageAsync = async(formikBag:FormikProps<SendMessageInput>, event:any):Promise<void> =>{
    event.preventDefault()
    if(formikBag.values.text && !formikBag.errors.text){
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
  }else{
    toast.error("Max lenght 500 simbols",{
      position: toast.POSITION.BOTTOM_RIGHT
    })
    formikBag.resetForm()
  }
  }

  return (
    <Fragment>
    <Formik
    onSubmit={(values):void => console.log(values)}
    initialValues={initialValues}
    validationSchema={validationSchema}
    component={(
      formikBag
    ): ReactElement<FormikProps<SendMessageInput>> =>{
      return(
        <Box width="300px" height="150px"  >


        <StyledTextField
         id="sendMessageInput" required  variant="outlined"
         autoComplete="off"
         onChange={():void=> setTextValue(formikBag)}
         inputProps={{
           autoComplete:"none"
         }}
          />

        <Box marginTop="10px" >
          <Button  variant="contained" color="primary" onClick={(event):Promise<void>=> sendMessageAsync(formikBag, event)} >send </Button>
        </Box>


      </Box>
)
}}
/>
<ToastContainer />
</Fragment>
  )}
