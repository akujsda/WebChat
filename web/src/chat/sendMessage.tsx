import React, { ReactElement, Fragment } from "react"
import {TextField, Box, Button} from "@material-ui/core"
import {  useMutation } from "@apollo/react-hooks"
import {SendMessageM} from "./query"
import {Message} from "./types"
import {Formik, FormikProps} from "formik"
import * as yup from 'yup'
import Cookies from "js-cookie"
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ExecutionResult } from "graphql"
import {useIntl} from 'react-intl';

const StyledTextField=styled(TextField)`
  width:300px;
  border:1px solid #3f51b5;
  border-radius:5px;
  margin-bottom: 10px;
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


export const SendMessage = ():ReactElement =>{
  const [sendMessage] = useMutation<Message>(SendMessageM)
  const id= Cookies.get("userId")
  const userName= Cookies.get("userName")
  const intl = useIntl().messages

  const setTextValue = (formikBag:any): void=>{
    const sendMessageInput:any = document.getElementById("sendMessageInput")
    if(sendMessageInput){
    formikBag.setFieldValue("text", sendMessageInput.value)
    }
  }

  const  sendMessageAsync = async(formikBag:FormikProps<SendMessageInput>):Promise<void> =>{
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
      onSubmit={():Promise<ExecutionResult<Message>> =>sendMessage()}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={(
        formikBag
      ): ReactElement<FormikProps<SendMessageInput>> =>{
        return(
          <Box width="300px" marginTop = "10px"  >
            <StyledTextField
            id="sendMessageInput" required  variant="outlined"
            onChange={():void=> setTextValue(formikBag)}
            inputProps={{
              autoComplete:"off"
            }}
              />

          <Box marginTop="10px" marginBottom="10px" >
            <Button  variant="contained" color="primary" onClick={():Promise<void>=> sendMessageAsync(formikBag)} >{`${intl.send}`}</Button>
          </Box>

        </Box>
          )
          }}
      />
    <ToastContainer />
  </Fragment>
  )}
