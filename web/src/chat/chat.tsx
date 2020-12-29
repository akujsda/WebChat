import React, { ReactElement, useEffect } from "react"
import {Box} from "@material-ui/core"
import {MessageList} from "./messageList"
import {SendMessage} from "./sendMessage"
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import {rootRoutes} from "../route/routes"


const Chat = ():ReactElement =>{
  const id= Cookies.get("userId")
  const history = useHistory()

  useEffect(() => {
    !id &&
    history.push(rootRoutes.login)
  }, [history, id])



    return (
      <Box width="100vw"  display="flex" justifyContent="center" >
        <Box >
          <MessageList />
        </Box>

        <Box
          width="100vw"
          position="fixed"
          zIndex="10"
          bgcolor="white"
          bottom="0"
          display="flex"
          justifyContent="center"
        >
          <SendMessage />
        </Box>
      </Box>
    )

}

export default Chat
