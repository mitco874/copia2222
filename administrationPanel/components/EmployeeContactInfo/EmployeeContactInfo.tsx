import { FC } from "react";

import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


interface Props {
    email: string;
    phone: string;
}

export const EmployeeContactInfo: FC<Props> = ({ email, phone }) => {
  return (
    <Box display="block">
    <Box display="flex" flexDirection="row" alignItems="center">
        <EmailIcon/>
        <Typography variant="body2"> {email} </Typography>
    </Box>
    <Box display="flex" flexDirection="row" alignItems="center">
        <LocalPhoneIcon/>
        <Typography variant="body2"> {phone} </Typography>
    </Box>
</Box>
  )
}
