import gql from "graphql-tag"

export const UserSignUpM = gql`
  mutation createUser($input: SignUpInput){
    createUser(input: $input){
      name
      email
      id
    }
  }
`

export const UserSignIn = gql`
  query userSignIn($input: SignInInput){
    userSignIn(input: $input)
  }
`
