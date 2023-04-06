import { FC } from "react";

import { Box, Button, Divider } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


interface Props{
    employeId:string | number
}

export const EmployeOptions: FC<Props> = ({ employeId }) => {
  return (
    <Box display="flex" flexDirection="column" alignContent="space-between">
        <Button 
            size="small" 
            variant="contained"
            startIcon={<EditOutlinedIcon/>}
        > 
            Edit 
        </Button>

        <Divider></Divider>
    <Button 
        size="small" 
        variant="contained" 
        color="error" 
        startIcon={<DeleteOutlineOutlinedIcon/>}
    > 
        Remove 
    </Button>
    </Box>
  )
}
