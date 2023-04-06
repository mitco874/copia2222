import { FC} from "react"
import { Box, Button, Modal, Typography } from "@mui/material";

import "./InfoModal.css"

interface Props {
    success?: boolean;
    isOpen: boolean;
    description: string;
    handleClose?: ()=> void; 
}

const successRegistrationGif= "https://media.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif";
const failRegistrationGif= "https://media.tenor.com/Gbp8h-dqDHkAAAAj/error.gif";

export const InfoModal: FC<Props> = ({ success = false, description, isOpen = false, handleClose }) => {

    return (
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <Box 
          className="info-modal" 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
          padding="20px"
        >

        <Typography variant="h6" component="h2" > 
          Successful registration
        </Typography>

          <Box
            height="30%"
            width="30%" 
            component="img"
            alt={ success? "registration success" :  "registration fail" }
            src={ success? successRegistrationGif : failRegistrationGif  }
          />
          <Box m="20px">
            <Typography id="modal-modal-description">
              {description}
            </Typography>
          </Box>

          <Button variant="contained" onClick={handleClose}>
            Accept
          </Button>

        </Box>          
      </Modal>

  )

}
