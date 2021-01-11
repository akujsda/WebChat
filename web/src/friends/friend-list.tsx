import React, {useState, useEffect} from "react"
import {Box} from "@material-ui/core"
import {GetMyChatsQ} from "./query"
import { useQuery, useSubscription } from "@apollo/react-hooks"
import Cookies from "js-cookie"
import {NewChatS} from "./query"
import {makeStyles} from "@material-ui/core/styles"
interface Props {
  isListClose: boolean
  setCurrentChat: (arg: string | null) => void
}

const useStyles = makeStyles({
  user:{
    border:"1px solid #3f51b5",
    margin:"10px"
  }
})
export const FriendList = ({
  isListClose,
  setCurrentChat
}:Props) => {
  const userId = Cookies.get('userId')
  const [chats, setChats] = useState([''])
  const classes= useStyles()
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
    <Box overflow="scroll">
      {!loading && chats && !isListClose  && chats.map((message:any, index:number)=> {
          return (
            <ul key={index}  onClick={():void => setCurrentChat(message.id)} className={classes.user}>
              <Box textAlign="left" marginLeft="10px" padding="5px">{userId === message.senderId ? message.recipientName : message.senderName}</Box>
            </ul>
          )
        }
      )
      }
    </Box>
  )
}
