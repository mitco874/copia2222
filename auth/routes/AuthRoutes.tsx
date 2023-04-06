import { useCallback, useEffect } from "react";
  
import { Routes, Route, useNavigate } from "react-router-dom";

import { LoginPage } from "../pages";
import { existUserLogged } from "../../utils/apiMethods";
import { decodeJWT } from "../../utils";

export const AuthRoutes = () => {

  const navigate =useNavigate();

  const verifyUserLogged= useCallback(async() =>{
    const isUserLogged=await existUserLogged();
    
     if(isUserLogged){
      const { id_rol } = decodeJWT.decodeJWT();

        if(id_rol===0){
          navigate("/panel/home");
        }
        
        else{
          navigate("/");
        }
     }
  }, [navigate])

  useEffect(()=>{
    verifyUserLogged()
  },[verifyUserLogged])

  return (
    <Routes>
        <Route path="login" element={<LoginPage/>} />
    </Routes>
  )
}
