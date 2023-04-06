import { FC} from "react"
import { Button, Grid, Modal, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import "./DeleteEmpoyeeModal.css"

interface Props {
    isOpen: boolean;
    handleClose?: ()=> void; 
}

export const DeleteEmpoyeeModal: FC<Props> = ({ isOpen = false, handleClose }) => {

  return (
      <Modal
        open={isOpen}
        onClose={handleClose}
      >

        <Grid container 
          className="delete-employee-modal" 
          width="400px"
          padding="10px"
          spacing={2}
        >
            <Grid item xs={12} display="flex" flexDirection="row" > 
                <ErrorOutlineIcon color="error"/>
                <Typography variant="h5" component="h2" > 
                    Do you really want to delete this employee?
                </Typography>
            </Grid>


            <Grid item xs={5} display="flex" flexDirection="row" justifyContent="space-between">
                <Button 
                    variant="contained" 
                    size="small"
                    onClick={handleClose}
                >
                    Accept
                </Button>
                <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleClose}
                    size="small"
                >
                    Cancel
                </Button>
            </Grid>

        </Grid>
      </Modal>

  )
}
