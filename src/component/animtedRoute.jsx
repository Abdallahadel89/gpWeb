import React from "react";
import Home from "./home";
import Login from "./Login"
import Intro from "./Q/intro"
import Qestion1 from "./Q/q1"
import { Route, Routes,Router } from "react-router-dom";



function animtedRoute (){
return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Login" element={<Login/>}></Route>
    <Route path="intro" element={<Intro/>}></Route>
    <Route path="q1" element={<Qestion1/>}></Route>
    </Routes>

)

}
export default animtedRoute;