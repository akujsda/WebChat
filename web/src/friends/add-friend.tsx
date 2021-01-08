import React from "react"
import {Box} from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


interface Props {
  isListClose: boolean
}
export const AddFriend = ({
  isListClose
}:Props) => {
  return (
    <Box display="flex" justifyContent="flex-start" margin="10px">
      {!isListClose && (<AddCircleOutlineIcon />)}
    </Box>
  )
}
