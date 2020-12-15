import React,{ReactElement} from 'react'
import { List, Box } from '@material-ui/core';
import {User} from './user'

const UsersList = ():ReactElement => {
  return (
    <Box marginLeft="20px" border="1px solid red" width="max-content" height="100vh">
      <List>
        <User />
      </List>
    </Box>
  )
}

export default UsersList
