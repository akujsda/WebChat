import React from "react"
import {Box} from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


interface Props {
  isListClose: boolean
  setModalActive:(arg:boolean) => void
}
export const AddFriend = ({
  isListClose,
  setModalActive
}:Props) => {
  return (
    <Box display="flex" justifyContent="flex-start" margin="10px">
      {!isListClose && (<AddCircleOutlineIcon onClick={()=>setModalActive(true)} />)}
    </Box>
  )
}
