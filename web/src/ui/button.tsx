import { Button } from '@material-ui/core';
import React, { ReactElement, PropsWithChildren } from "react"
import Box from '@material-ui/core/Box'

interface Props{
  text: string
  onClick: ()=>void
}
export const ButtonBase = ({
  text,
  onClick
}:Props):ReactElement =>{
  return (
    <Box>
      <Button >{text}</Button>
    </Box>
    )
}
