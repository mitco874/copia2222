import {FC} from "react";
import { Grid, Modal , Typography } from "@mui/material";
import "./EditEmployeeModal.css"
import { EditEmployeeForm } from "../EditEmployeeForm/EditEmployeeForm";

interface Props {
  isOpen: boolean;
  onCloseModal: ()=> void; 
}

export const EditEmployeeModal: FC<Props> = ({ isOpen = false, onCloseModal }) => {

  return (
      <Modal
      open={isOpen}
      onClose={onCloseModal}
    >

        <Grid container 
          className="edit-employee-modal" 
          width="350px"
          padding="20px"
          spacing={1}
        >
        
        <Typography variant="h3" margin="auto"> Edit Employee information</Typography>

        <EditEmployeeForm onCancel={onCloseModal}/>

      </Grid>

  </Modal>
  )
}