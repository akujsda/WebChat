import React, { ReactElement, useEffect } from "react"
import {Box} from "@material-ui/core"
import {useQuery} from "@apollo/client"
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

  const { data, loading, subscribeToMore, refetch } = useQuery(GetMessagesQ, {
    variables: {
      senderId: id

    },
  })



// useEffect(():void => {
// subscribeToMore({
//   document: NewMessageS
// })

// }, [subscribeToMore])

const formatDate=(date:string):string => {
  return (
    date.split(".")[0].split("T").join("  ")
  )
}

  return (
    <Box height="90vh" width="50vw" overflow="scroll">
      <StyledList>
        {!loading && data.getMessages.map((message:any)=> <StyledItemList>
          <Box paddingLeft="10px" display="flex">{formatDate(message.date)}</Box>
          <Box marginTop="20px">{message.text}</Box>

        </StyledItemList>)}
      </StyledList>
    </Box>
  )
}
