import { FC } from "react"
import { Divider, Grid, Modal, Typography } from "@mui/material";

import "./BasicModal.css"

interface Props {
    title: string;
    bodyComponent: React.ReactNode;
    type: "info" | "confirm" | "form"
    isOpen: boolean;
    handleClose?: ()=> void; 
    width: string;
    padding: string;

}

export const BasicModal:FC<Props> = ({ title, bodyComponent, type, isOpen, handleClose, width, padding }) => {
  return (
    <Modal
    open={isOpen}
    onClose={handleClose}
  >

    <Grid 
        container
        className="basic-modal" 
        display="flex"
        flexDirection="column" 
        padding={padding}
        width={width}
    >
        <Grid item>
            <Typography variant="h4">{title}</Typography>
        </Grid>

        <Divider/>

        <Grid item>
            {bodyComponent}
        </Grid>

        <Divider/>

        <Grid item>

        </Grid>

    </Grid>  

  </Modal>
  )
}
