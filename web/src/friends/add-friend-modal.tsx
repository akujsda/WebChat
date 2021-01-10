import React from 'react'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box'
import {UsersQ, CreateChatM} from "./query"
import {  useQuery, useMutation } from "@apollo/react-hooks"
import { makeStyles } from '@material-ui/core/styles';

interface User {
  id:string
  name: string
  email: string
}

const useStyles = makeStyles({
  userList:{
    listStyle: "none"
  },
  user:{
    padding: "10px"
  }
})
export const AddFriendModal = () =>{
  const {data, loading}=useQuery(UsersQ)
  const classes = useStyles();
  const [createChat] = useMutation(CreateChatM)
  const createChatAsync = async (event:any):Promise<void>=>{
    if (event && event.target){
      try {
        createChat({
          variables:{
            input: {
              recipientId: event.target.id
            }
          }
        })
      } catch {}
    }
  }



  return (
      <Modal open={true}>
        <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
          <Box width="300px" height="300px" border="1px solid red">
            <ul className={classes.userList} onClick= {createChatAsync}>
            {!loading && data.users && data.users.map((user: User)=> <li className={classes.user} id={user.id}>{user.email} : {user.name}</li>)}
            </ul>
          </Box>
        </Box>
      </Modal>
     )
}
