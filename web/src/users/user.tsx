import React, { ReactElement } from 'react'
import {Box} from "@material-ui/core"
import { ListItem } from '@material-ui/core';

export const User = (): ReactElement => {
  return (
    <Box border="1px solid black" width="100vw" fontSize="92px" fontWeight={500} color="red">
      ARTEM UXODI!!!!!
    </Box>
  )
}
