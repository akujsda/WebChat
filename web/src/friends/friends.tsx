import React, {useState} from "react"
import {Box} from "@material-ui/core"
import {FriendList} from "./friend-list"
import {AddFriend} from "./add-friend"
import DehazeIcon from '@material-ui/icons/Dehaze';
import {AddFriendModal} from "./add-friend-modal"

interface Props{
  setCurrentChat: (arg: string | null) => void
}

const FriendsPage = ({
  setCurrentChat
}: Props) => {
  const [isListClose, setListClose] = useState<boolean>(false)
  const [isModalActive, setModalActive] = useState<boolean>(false)
  const toggleList = ():void => {
    setListClose(!isListClose)
  }

  return(
    <Box border="1px solid #3f51b5" width= {isListClose ? "50px" : "300px"} height="100vh" zIndex={10}>
      <Box display="flex" justifyContent="flex-end" margin="10px">
      <DehazeIcon onClick={toggleList} />
      </Box>
      <AddFriend isListClose={isListClose} setModalActive={setModalActive} />
      <FriendList isListClose={isListClose} setCurrentChat={setCurrentChat}  />
      <AddFriendModal isModalActive={isModalActive} setModalActive={setModalActive} />
    </Box>
  )
}

export default FriendsPage
