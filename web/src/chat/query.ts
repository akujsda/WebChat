import gql from "graphql-tag"


export const SendMessageM = gql`
  mutation sendMessage($input: NewMessage!){
    sendMessage(input: $input){
      text
    }
  }
`

export const GetMessagesQ = gql`
  query getMessages($chatId: String){
    getMessages(chatId: $chatId){
      text
      date
      senderName
    }
  }
`

export const NewMessageS = gql`
  subscription{
    newMessage {
    text
    date
  }
  }

`
