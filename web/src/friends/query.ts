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
