import React from "react"
import {Box} from "@material-ui/core"
import {GetMyChatsQ} from "./query"
import { useQuery } from "@apollo/react-hooks"
import Cookies from "js-cookie"


interface Props {
  isListClose: boolean
  setCurrentChat: (arg: string | null) => void
}


export const FriendList = ({
  isListClose,
  setCurrentChat
}:Props) => {
 const userId = Cookies.get('userId')
  console.log(userId);

  const {data, loading} = useQuery(GetMyChatsQ,{
    variables:{
      token: Cookies.get("token")
    }
  })

  return (
    <Box border="1px solid black">
      {!loading && data && !isListClose  && data.getMyChats.map((message:any, index:number)=> {
          return (
            <ul key={index}  onClick={():void => setCurrentChat(message.id)}>
              <Box textAlign="left" marginLeft="10px" padding="5px">{message.senderName}: </Box>
              <Box marginTop="20px" padding="5px">{message.text}</Box>
            </ul>
          )
        }
      )
      }
    </Box>
  )
}
