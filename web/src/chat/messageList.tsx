import React, { ReactElement, useEffect } from "react"
import Box from "@material-ui/core"
import {useQuery} from "@apollo/client"
import {GetMessagesQ, NewMessageS} from "./query"
import Cookies from "js-cookie"

export const MessageList = ():ReactElement =>{
  const id = Cookies.get("userId")

  const { data, loading, subscribeToMore, refetch } = useQuery(GetMessagesQ, {
    variables: {
      senderId: id

    },
  })



useEffect(():void => {
subscribeToMore({
  document: NewMessageS
})

}, [subscribeToMore])


  return (
    <div>
      {!loading && data.getMessages.map((message:any)=> <li >{message.text}</li>)}
    </div>
  )
}
