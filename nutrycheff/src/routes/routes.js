import React from "react";
import { Route, Routes} from "react-router-dom";

import Navbar from "../components/NavBar";
import TelaCadastro from "../pages/TelaCadastro";
import Home from "../pages/Home"


const RoutesPath = () => {
   return(
       <Routes>
           
         
           <Route element = { <TelaCadastro/> }  path="/register" />
           <Route element = { <Home/> }  path="/" />
       </Routes>
   )
}

export default RoutesPath;