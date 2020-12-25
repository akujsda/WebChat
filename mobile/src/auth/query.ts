import gql from "graphql-tag"

export const UserSignIn = gql`
  mutation userSignIn($input: UserSignInInput!){
    userSignIn(input: $input){
      id
      userName
      token
    }
  }
`
