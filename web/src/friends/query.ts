import gql from "graphql-tag"

export const GetMyChatsQ = gql`
  query getMyChats($token: String!){
    getMyChats(token: $token){
      id
      senderName
      recipientName
      senderId
      recipientId
    }
  }
`

export const UsersQ = gql`
  query users{
    users{
      name
      id
      email
    }
  }
`

export const CreateChatM = gql`
  mutation createChat($input: NewChatInput!){
    createChat(input: $input){
      id
    }
  }
`

export const NewChatS = gql`
 subscription{
   newChat{
    id
      senderName
      recipientName
      senderId
      recipientId
   }
  }
`
