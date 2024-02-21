/* eslint-disable no-useless-escape */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useState} from "react"
import Header from "../../components/Header"

export default function Form() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      value: 'User',
      label: 'User',
    },
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    
  ];
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,formState: { errors }} = useForm();
  const onSubmit = () =>handleClick() ;
  const emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const phoneNumberPattern=/^(\+\d{1,3}[- ]?)(?!0+$)(?!1+$)\d{11}$/ ;
   
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
     <Box component="form" onSubmit={handleSubmit(onSubmit)}
      sx={{
        display:'flex',
        flexDirection:"column",
        gap:2
      }}
      noValidate
      autoComplete="off"
    >
    <Header titel={"CREATE USER"} subtitel={"Create a new user profile"}/>
    <Stack direction={"row"} sx={{gap:3}}>
      <TextField sx={{flex:1}} label="First Name" variant="filled" 
       error={errors.firstName}  helperText={errors.firstName &&"This field is required."} {...register("firstName", { required: true, minLength: 3 })}  />
      <TextField sx={{flex:1}} label="Last Name" variant="filled"  error={errors.lastName}  helperText={errors.lastName &&"This field is required."} {...register("lastName", { required: true, minLength: 3 })} />
    </Stack>
      <TextField  label="Email" variant="filled"  error={errors.email}  helperText={errors.email &&"Email not valid"} {...register("email", { required: true,pattern: emailPattern })} />
      <TextField  label="Phone Number" variant="filled"   error={errors.phoneNumber}  helperText={errors.phoneNumber &&"Phone Number not valid"} {...register("phoneNumber", { required: true,pattern:phoneNumberPattern })}/>
      <TextField  label="Address 1" variant="filled"  />
      <TextField  label="Address 2" variant="filled"  />
      <TextField  variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant='contained' type="submit" >
          Create New User
        </Button>
        <Snackbar anchorOrigin={{vertical: "top",horizontal: "right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="info" variant="filled" sx={{ width: '100%' }}>Successeful Creation for acount!</Alert>
        </Snackbar>
    </Box>
    </>
  
    )
}
