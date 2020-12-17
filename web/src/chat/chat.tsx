import React, { ReactElement } from "react"
import {Box} from "@material-ui/core"
import {MessageList} from "./messageList"
import {SendMessage} from "./sendMessage"
import Cookies from "js-cookie"

interface Props{
  userId: string | null
}
const Chat =({
  userId
}:Props):ReactElement =>{
  const id= Cookies.get("userId")
  if (id){
    return (
      <Box>
        <MessageList />
        <SendMessage userId={userId} />
      </Box>
    )
  }
  return <></>
}

export default Chat
