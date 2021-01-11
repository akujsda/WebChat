import React, { ReactElement, useEffect } from "react"
import {Box} from "@material-ui/core"
import {MessageList} from "./messageList"
import {SendMessage} from "./sendMessage"
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import {rootRoutes} from "../route/routes"
import FriendsPage from "../friends/friends"


interface Props {
  currentChat: string | null
  setCurrentChat: (arg: string | null) => void
}

const Chat = ({
  currentChat,
  setCurrentChat
}:Props):ReactElement =>{
  const id= Cookies.get("userId")
  const history = useHistory()

  useEffect(() => {
    !id &&
    history.push(rootRoutes.login)
  }, [history, id])



    return (
      <Box width="100vw"  display="flex" justifyContent="center" zIndex={0} border="3px solid green">

        <Box display="flex" width="100vw">
          <FriendsPage setCurrentChat={setCurrentChat} />
          <MessageList currentChat={currentChat} />
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
          {currentChat && (<SendMessage currentChat={currentChat} />)}
        </Box>
      </Box>
    )

}

export default Chat
