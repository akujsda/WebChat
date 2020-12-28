import React, { ReactElement, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {rootRoutes} from '../route/routes'
import {UserSignUpM} from './query'
import { useMutation } from "@apollo/react-hooks"
import {User} from './types'
import { Formik, FormikProps, Form } from "formik"
import * as yup from "yup";
import {useHistory} from "react-router-dom"

interface CreateAccountInput {
  email: string
  password: string
  name: string
}

const initValues: CreateAccountInput = {
  email:"",
  password:"",
  name:""
}


 const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().min(6),
  name: yup.string().required()
})



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const nameInputReference= useRef<HTMLInputElement | null>(null)
  const emailInputReference= useRef<HTMLInputElement | null>(null)
  const passwordInputReference= useRef<HTMLInputElement | null>(null)
  const [userSignUp]=useMutation<User>(UserSignUpM)
  const history =useHistory()

  const setNameValue = (formikBag:any): void=>{
    const nameInput:any = document.getElementById("name")
    if(nameInput ){
      formikBag.setFieldValue("name", nameInput.value)
      console.log(nameInput.value);

    }

  }

  const setPasswordValue = (formikBag:any): void=>{
    const passwordInput:any = document.getElementById("password")
    if(passwordInput){
    formikBag.setFieldValue("password", passwordInput.value)
    }
  }

  const setEmailValue = (formikBag:any): void=>{
    const emailInput:any = document.getElementById("email")
    if(emailInput){
    formikBag.setFieldValue("email", emailInput.value)
    }
  }

  const  userSignUpAsync = async(values:CreateAccountInput):Promise<void> =>{
    try {
     await userSignUp({
        variables: {
          input: {
            email: values.email,
            name: values.name,
            password: values.password
          },
        },
      })
    } catch {}
    finally{
      history.push(rootRoutes.login)
    }
  }


  return (
    <Formik
      onSubmit={userSignUpAsync}
      initialValues={initValues}
      validationSchema={validationSchema}
      component={(
        formikBag: FormikProps<CreateAccountInput>
    ): ReactElement<FormikProps<CreateAccountInput>> =>{
      return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form id="test" className={classes.form}  >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                ref={nameInputReference}
                onBlur={():void=>setNameValue(formikBag)}
                autoComplete= "new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                ref={emailInputReference}
                onBlur={():void=>setEmailValue(formikBag)}
                autoComplete= "new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                ref={passwordInputReference}
                onBlur={():void=>setPasswordValue( formikBag)}
                autoComplete= "new-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={():Promise<void> => userSignUpAsync(formikBag.values)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={rootRoutes.login} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
      )
    }}
    />

  );
}
