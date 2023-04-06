import {useCallback, useEffect, useContext} from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"

import { NavBar } from "../../ui/components"
import { EmployeeSideBar } from "../components"
import { UpdateProfilePage, WatchProfilePage, WelcomePage } from "../pages"
import { existUserLogged } from "../../utils/apiMethods";
import { decodeJWT } from "../../utils";
import { UserContext } from "../../context";
 
export const EmployeePanelRoutes = () => {
  const navigate =useNavigate();
  const { loadLoggedUserData } = useContext(UserContext);


  const verifyUserLogged= useCallback(
    async() =>{
      const isUserLogged = await existUserLogged();
      
      if( !isUserLogged ){
        navigate("/auth/login");
      }

      const { id_rol, id } = decodeJWT.decodeJWT();
      loadLoggedUserData(id);
      if(id_rol === 0){
        navigate("/panel/home");
      }
  } , [navigate])

 useEffect(
  ()=>{
    verifyUserLogged()
  },[verifyUserLogged]
  )

  return (
    <>      
        <NavBar  />
        <Grid container spacing={2} >

          <Grid item xs={12} sm={4} md={2}>
            <EmployeeSideBar/>  
          </Grid>

          <Grid item xs={12} sm={8} md={10}>
            <Routes>
                <Route path="/update-profile" element={<UpdateProfilePage/>} />
                <Route path="/watch-profile" element={<WatchProfilePage/>} />
                <Route path="/" element={<WelcomePage/>} />
            </Routes>
          </Grid>
          
        </Grid>
    </>
  )
}
