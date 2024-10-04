import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "../components/NavBar";
import TelaCadastro from "../pages/TelaCadastro";
import Home from "../pages/Home"
import TelaLogin from "../pages/TelaLogin";


const RoutesPath = () => {
   return(
    <Routes>
        <Route element = { <TelaCadastro/> }  path="/register" />
        <Route element = {<TelaLogin/>} path="/login"/>
        <Route element = { <Home/> }  path="/" />
    </Routes>
   )
}

export default RoutesPath;