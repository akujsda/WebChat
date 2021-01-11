import gql from "graphql-tag"

export const UserSignUpM = gql`
  mutation createUser($input: NewUser!){
    createUser(input: $input)
  }
`

export const UserSignIn = gql`
  mutation userSignIn($input: UserSignInInput!){
    userSignIn(input: $input){
      id
      userName
      token
    }
  }
`
