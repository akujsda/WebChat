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
import {UserSignIn} from "./query"
import {  useMutation } from "@apollo/react-hooks"
import { Formik, FormikProps } from "formik"
import * as yup from "yup";
import {useHistory} from "react-router-dom"
import get from "lodash/get"
import Cookies from "js-cookie"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignInInput {
  email:string
  password:string
}

const initialValues:SignInInput= {
  email:"",
  password:""
}

const validationSchema = yup.object().shape({
  email: yup.string().required().test("err", "err", ((value): boolean => !!value && value.includes("@"))),
  password: yup.string().required().min(6),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface Props{
  setUserId: (value: string)=>void
  userId: string | null
}

export default function SignIn({
  setUserId,
  userId
}:Props) {
  const classes = useStyles();
  const history = useHistory()
  const [userSignIn]=useMutation<string>(UserSignIn)

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

  const  userSignIpAsync = async(formikBag:FormikProps<SignInInput>):Promise<void> =>{
    if(!formikBag.errors.email && !formikBag.errors.password){
      console.log(formikBag.values);

    try {
     await userSignIn({
        variables: {
          input: {
            email: formikBag.values.email,
            password: formikBag.values.password
          },
        },
      }).then((response: any):void =>{
         if (get(response, "data.userSignIn")){
          setUserId(get(response, "data.userSignIn"))
          Cookies.set("userId", get(response, "data.userSignIn.id"))
          Cookies.set("userName", get(response, "data.userSignIn.userName"))
          history.push(rootRoutes.chat)
         }else{
          toast.error("Email or password entered incorrect", {
            position: toast.POSITION.BOTTOM_RIGHT
          })
         }
        })
    } catch {}
  }else{
    toast.error("Email or password entered incorrect", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
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
    ): ReactElement<FormikProps<SignInInput>> =>{
      return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete= "new-password"
              inputProps={{
                form: {
                  autocomplete: 'off',
                },
              }}
              onChange={():void=>setEmailValue(formikBag)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={():void=>setPasswordValue(formikBag)}
              autoComplete= "new-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={():Promise<void>=> userSignIpAsync(formikBag)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href={rootRoutes.register} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      )
    }}
    />
    <ToastContainer />
    </Fragment>
  );
}
