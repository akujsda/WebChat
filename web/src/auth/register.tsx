/* eslint-disable no-useless-escape */
import React, { ReactElement, Fragment } from 'react';
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
import {useIntl} from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ExecutionResult } from 'graphql';

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
  email: yup.string().required().matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [userSignUp]=useMutation<User>(UserSignUpM)
  const history =useHistory()
  const intl = useIntl().messages

  const setNameValue = (formikBag:any): void=>{
    const nameInput:any = document.getElementById("name")
    if(nameInput ){
      formikBag.setFieldValue("name", nameInput.value)
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

  const  userSignUpAsync = async(formikBag:FormikProps<CreateAccountInput>):Promise<void> =>{
    if (!formikBag.errors.email && !formikBag.errors.name && !formikBag.errors.password){
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
    finally{
      history.push(rootRoutes.login)
    }
  }else{
    toast.error(`${intl.incorrectEmail}`, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
  }


  return (
    <Fragment>
    <Formik
      onSubmit={():Promise<ExecutionResult<User>> =>userSignUp()}
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
          {`${intl.signUp}`}
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
                label={`${intl.name}`}
                autoFocus
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
                label={`${intl.emailLong}`}
                name="email"
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
                label={`${intl.password}`}
                type="password"
                id="password"
                onBlur={():void=>setPasswordValue(formikBag)}
                autoComplete= "new-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={():Promise<void> => userSignUpAsync(formikBag)}
          >
            {`${intl.signUp}`}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={rootRoutes.login} variant="body2">
                {`${intl.alreadyHaveAccount}`}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
      )
    }}
    />
    <ToastContainer />
  </Fragment>
  );
}
