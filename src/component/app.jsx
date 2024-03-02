import React ,{ useState }  from "react";
import Home from "./home";
import Navbar from "./navbar";
import Login from "./Login"
import Intro from "./Q/intro"
import Qestion1 from "./Q/q1"
import Q2 from "./Q/q2";
import { Route, Routes,useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Register from "./register";
import OtpScreen from "./Q/otpScreen";


function App() {
  const location = useLocation();
  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"))

  

  return (

    <>
    <AnimatePresence>
    <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="Login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth}/>}></Route>
    <Route path="intro" element={<Intro/>}></Route>
    <Route path="q1" element={<Qestion1/>}></Route>
    <Route path="q2" element={<Q2/>}></Route>

    <Route path="re" element={<Register setIsAuth= {setIsAuth} isAuth={isAuth}/>}></Route>

    
    </Routes>
    </AnimatePresence>
   
   



   
    
    </>
  );
}
export default App;
