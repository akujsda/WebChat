import React from 'react'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box'
import {UsersQ, CreateChatM} from "./query"
import {  useQuery, useMutation } from "@apollo/react-hooks"
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

interface User {
  id:string
  name: string
  email: string
}

interface Props{
  setModalActive:(arg: boolean)=>void
  isModalActive: boolean
}

const useStyles = makeStyles({
  userList:{
    listStyle: "none"
  },
  user:{
    padding: "10px",
    border: "1px solid black",
    margin: "5px",
    marginRight:"30px",
  }
})


export const AddFriendModal = ({
  setModalActive,
  isModalActive
}:Props) =>{
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
      <Modal open={isModalActive}>
        <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
          <Box width="300px" height="300px" border="1px solid red" overflow="scroll" bgcolor="white">
          <Box position="fixed" marginLeft="10px" marginTop="10px" >
            <CloseIcon onClick={()=>setModalActive(false)}/>
          </Box>
            <ul className={classes.userList} onClick= {createChatAsync}>
            {!loading && data.users && data.users.map((user: User)=> <li className={classes.user} key={user.id} id={user.id}>{user.email} : {user.name}</li>)}
            </ul>
          </Box>
        </Box>
      </Modal>
     )
}
