import React, { ReactElement, useEffect, useState } from "react"
import {Box} from "@material-ui/core"
import { useQuery, useSubscription } from "@apollo/react-hooks"
import {GetMessagesQ, NewMessageS} from "./query"
import Cookies from "js-cookie"
import styled from 'styled-components'


const StyledList= styled.ul`
  padding-left:10px;
  padding-right:10px;
  list-style:none;
`

const StyledItemList= styled.li`
  padding-bottom: 10px;
  padding-top: 10px;
  border: 1px solid rgb(63, 81, 181);
  border-radius: 10px;
  margin-top:10px;
  margin-bottom:10px;
`



export const MessageList = ():ReactElement =>{
  const id = Cookies.get("userId")
  const [messageList, setMessageList]= useState([""])
  const { data, loading } = useQuery(GetMessagesQ, {
    variables: {
      senderId: id
    },
  })

  useEffect(() => {

    setMessageList(data.getMessages)
  }, [loading, data])

  const {data: subData, loading: subLoading} = useSubscription(NewMessageS)



  useEffect(() => {
    const list = document.getElementById("messageList")
    if(!!subData && list ){

      const newMessageList= [...messageList, subData.newMessage]

      setMessageList(newMessageList)
      list.scrollTop = list.scrollHeight
    }

  }, [subLoading, subData])




  return (
    <Box width="100vw" height="70vh" id="messageList" overflow="scroll">
      <StyledList >
        {!loading && messageList  && messageList.map((message:any, index:number)=> <StyledItemList key={index} >
          <Box textAlign="left" marginLeft="10px">{message.senderName}: </Box>
          <Box marginTop="20px" >{message.text}</Box>
        </StyledItemList>
        )}
      </StyledList>
    </Box>
  )
}
