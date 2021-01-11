import React, {useState, useEffect} from "react"
import {Box} from "@material-ui/core"
import {GetMyChatsQ} from "./query"
import { useQuery, useSubscription } from "@apollo/react-hooks"
import Cookies from "js-cookie"
import {NewChatS} from "./query"

interface Props {
  isListClose: boolean
  setCurrentChat: (arg: string | null) => void
}


export const FriendList = ({
  isListClose,
  setCurrentChat
}:Props) => {
  const userId = Cookies.get('userId')
  const [chats, setChats] = useState([''])

  const {data, loading} = useQuery(GetMyChatsQ,{
    variables:{
      token: Cookies.get("token")
    }
  })
  const {data: subData, loading: subLoading} = useSubscription(NewChatS)

  useEffect(() => {
    setChats(data.getMyChats)
  }, [loading, data])

  useEffect(() => {
    if(subData){
      const chatList= [...chats, subData.newChat]
      setChats(chatList)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subData, subLoading])


  return (
    <Box border="1px solid black" overflow="scroll">
      {!loading && chats && !isListClose  && chats.map((message:any, index:number)=> {
          return (
            <ul key={index}  onClick={():void => setCurrentChat(message.id)}>
              <Box textAlign="left" marginLeft="10px" padding="5px">{userId === message.senderId ? message.recipientName : message.senderName}</Box>
              <Box marginTop="20px" padding="5px">{message.text}</Box>
            </ul>
          )
        }
      )
      }
    </Box>
  )
}
