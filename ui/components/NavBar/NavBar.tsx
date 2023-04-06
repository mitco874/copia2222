import { Logout } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../context";
import { Link } from 'react-router-dom';

import "./NavBar.css"

export const NavBar = () => {

  const { removeUserData } = useContext(UserContext);

  return (
    <AppBar position="sticky">
      <Toolbar >

        <Typography mr="20px" variant="h4" >
          Manager App
        </Typography>

        <Box flex={1} />

        <Button
          variant="contained"
          color="error"
          startIcon={<Logout />}
          onClick={removeUserData}
        >
          <Link to="/auth/login" className='logout-link'>
            Logout
          </Link>
        </Button>

      </Toolbar>
    </AppBar>
  )
}
