import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RegisterEmployeeForm } from "../../components";

export const RegisterEmployeePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography 
        variant="h2" 
        component="h1"
        margin="auto"
        marginY="10px"
      > Register employee form</Typography>

      <RegisterEmployeeForm />

    </Box>
  )

}
