import gql from "graphql-tag"


export const SendMessageM = gql`
  mutation sendMessage($input: NewMessage!){
    sendMessage(input: $input){
      text
    }
  }
`

export const GetMessagesQ = gql`
  query getMessages($senderId: String){
    getMessages(senderId: $senderId){
      text
      senderId
      date
    }
  }
`

export const NewMessageS = gql`
  subscription{
    newMessage {
    text
    senderId
    date
  }
  }

`
