import React ,{useState} from 'react'
import {Alert, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import "./Form.css";


const Form=()=>{
  
const [name, setName]=useState("");
const [number, setNumber]=useState("");
const [email, setEmail]=useState("");    
const [alert, setAlert]=useState(false);
const navigate=useNavigate();


const onFormSumbit=(e)=>{
  e.preventDefault();
    if (name === "" || number === "" || email === ""){
   setAlert(true)
  }
  else {
    navigate("/Page 2");
    localStorage.setItem('Name', name);
    localStorage.setItem('Phone No.', number);
    localStorage.setItem('Email', email);
  }
 
    
} 
;

    return(
      <div className="App"> 
    <form onSubmit={onFormSumbit}>

         <Card className="formCard">
        <CardContent>    
        <Typography variant='h4'>Hi There, </Typography>
        
        <TextField 
        label="Name" 
        name='name' 
        placeholder='Enter Your Name'
        onChange={ e=>{setName(e.target.value)}} 
        size='small'
        margin="normal" 
        sx={{width:250}} 
        /><br/>

         <TextField 
        label="Phone Number" 
        name="number"
        placeholder='Enter Phone No.'
        onChange={ e=>{setNumber(e.target.value)}} 
        size='small' 
        margin="normal"
        sx={{width:250}}/><br/>

        <TextField 
        label="Email" 
        name="email" 
        placeholder='Enter Email'
        onChange={ e=>{setEmail(e.target.value)}}  
        size='small'
        margin="normal"  
        sx={{width:250}}/> <br/><br/>

        <Button margin="dense" variant="contained" type='submit' endIcon={<NavigateNextIcon/>}>Proceed</Button>
        </CardContent>
        {
      alert?
      <Alert severity="error">Please Fill in the Details to Access Next page!</Alert>
       :null }
       </Card>
     
    </form>
    </div>
    )
};
export default Form;