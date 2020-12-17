import React, { ReactElement, useEffect, useState } from "react"
import {Box} from "@material-ui/core"
import { useQuery, useSubscription } from "@apollo/react-hooks"
import {GetMessagesQ, NewMessageS} from "./query"
import Cookies from "js-cookie"
import styled from 'styled-components'


const StyledList= styled.ul`
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
  const { data, loading, refetch, subscribeToMore } = useQuery(GetMessagesQ, {
    variables: {
      senderId: id
    },
  })

  useEffect(() => {
    console.log(data);

    setMessageList(data.getMessages)
  }, [loading, data])

  const {data: subData, loading: subLoading} = useSubscription(NewMessageS)
  console.log(data, subData);


  useEffect(() => {
    if(!!subData ){

      const newMessageList= [...messageList, subData.newMessage]

      setMessageList(newMessageList)
    }

  }, [subLoading, subData])



const formatDate=(date:string):string => {
  return (
    date.split(".")[0].split("T").join("  ")
  )
}



  return (
    <Box height="90vh" width="50vw" overflow="scroll">
      <StyledList>
        {!loading && messageList  && messageList.map((message:any, index:number)=> <StyledItemList key={index} >

          <Box marginTop="20px" >{message.text}</Box>

        </StyledItemList>
        )}
      </StyledList>
    </Box>
  )
}
