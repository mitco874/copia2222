import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

import { decodeJWT, validations } from "../../../utils";
import { employeesApi } from "../../../api";

import "./LoginPage.css"

type FormData = {
  username: string,
  password: string,
};

const initialFormValues: FormData = {
  username: "",
  password: ""
}

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});
  const [hasError,setHasError]= useState(false);

  const navigate = useNavigate();


 const onSubmitLogin =  async ( data: FormData ) => {
    try {
      const response = await employeesApi.post("auth/login",data);
      const token=response.data.token;
      localStorage.setItem('token',token);
      const { id_rol } = decodeJWT.decodeJWT();
      
      if(id_rol === 0){
        setTimeout(()=>{navigate("/panel/home")}, 1000);
      }
      else{
        setTimeout(()=>{navigate("/")}, 1000);
      }

    } catch (error) {
      setHasError(true);
      setTimeout(()=>{setHasError(false)}, 4000);
    }

 }

  return (
    <Box 
      className="login-backgorund"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
        <Box 
          display=" flex"
          flexDirection="column"
          alignItems="center"
          padding="30px"
          className="form-container"
          boxShadow={2} 
        >
        <Typography variant="h2"> Log in to your account </Typography>
        {
          hasError && <Alert severity="warning" >wrong username or password, please check it</Alert>
        }
        
          <form 
            className="login-form" 
            noValidate
            onSubmit={ handleSubmit(onSubmitLogin) }
          >

            <TextField 
              variant='filled'
              placeholder="Email" 
              type="email" 
              size="small"
              { ...register("username", {
                required: "This field is required",
                validate: validations.isEmail
              })}
              error={!!errors.username}
              helperText={ errors.username?.message }
            />

            <TextField 
              variant='filled'
              placeholder="Password" 
              type="password" 
              size="small"
              { ...register("password", {
                required: "This field is required",
              })}
              error={!!errors.password}
              helperText={ errors.password?.message }
            />

            <Button 
              variant="contained"
              type='submit'
            >Log in</Button>

          </form>
      </Box>
    </Box>
  )
}
