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
      <Box width="100vw" height="90vh" display="flex" justifyContent="center" >
        <Box>
          <MessageList />
        </Box>

        <Box width="50vw" display="flex" justifyContent="center" alignItems="center">
          <SendMessage userId={userId} />
        </Box>
      </Box>
    )
  }
  return <></>
}

export default Chat
