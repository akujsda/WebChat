import gql from "graphql-tag"

export const UserSignUpM = gql`
  mutation createUser($input: NewUser!){
    createUser(input: $input){
      name
      email
      id
    }
  }
`
