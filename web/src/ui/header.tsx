import React, { ReactElement } from 'react'
import {Box, Container} from '@material-ui/core'

const Header = (): ReactElement =>{
  return (
    <Box width="100vw" height="50px" bgcolor="#3f51b5" display="flex" justifyContent="center">
      <Box fontSize="32px" color="white" fontWeight="500" > WebChat </Box>
    </Box>
  )
}

export default Header
