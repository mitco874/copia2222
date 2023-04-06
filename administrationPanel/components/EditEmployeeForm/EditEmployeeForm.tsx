import { Button, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { validations } from "../../../utils";

interface Props { 
    onSubmit?: ()=> void;
    onCancel: ()=> void;
}

type FormData = {
    identityCard: string;
    name: string;
    lastName: string;
    email: string;
  }
  
  const initialFormValues = {
    identityCard: "",
    name: "",
    lastName: "",
    email: "",
  }

export const EditEmployeeForm: FC<Props> = ({ onSubmit, onCancel }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});

    const onSubmitLogin = ( data: FormData ) => {
        console.log(data)
       if(onSubmit){
        onSubmit();
       }
    }

  return (
    <form 
        className="register-employee-form" 
        noValidate
        onSubmit={ handleSubmit(onSubmitLogin) }
    >
        <Grid container spacing={1}>
                
                <Grid item xs={6}>
                    <TextField 
                        label="Identity card*:"
                        variant='filled'
                        type="text"
                        size="small"
                        fullWidth
                        { ...register("identityCard", {
                            required: "This field is required",
                            validate: validations.isIdentityCard,
                            maxLength: { value: 10, message: 'The identity card must contain ten characters' },
                            minLength: { value: 10, message: 'The identity card must contain ten characters' }
                        })}
                        error={!!errors.identityCard}
                        helperText={ errors.identityCard?.message } 
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        label="Email*:"
                        variant='filled'
                        type="email" 
                        size="small"
                        fullWidth
                        { ...register("email", {
                            required: "This field is required",
                            validate: validations.isEmail,
                        })}
                        error={!!errors.email}
                        helperText={ errors.email?.message }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                    label="Name*:" 
                    variant='filled'
                    type="text" 
                    size="small"
                    fullWidth
                    { ...register("name", {
                        required: "This field is required",
                        validate: validations.isNameOrLastName,
                    })}
                    error={!!errors.name}
                    helperText={ errors.name?.message }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Last name*:"     
                        variant='filled'
                        type="text" 
                        size="small"
                        fullWidth 
                        { ...register("lastName", {
                            required: "This field is required",
                            validate: validations.isNameOrLastName,
                        })}
                        error={!!errors.lastName}
                        helperText={ errors.lastName?.message }
                    />
                </Grid>

                <Grid item xs={6} my="10px" display="flex" justifyContent="space-between" >
                    <Button  variant="contained" type='submit'> Save </Button>
                    <Button  variant="contained" color="error" onClick={onCancel} > Cancel </Button>
                </Grid>

        </Grid>
  </form>
  )
}
