import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebaseConfig'
import { useNavigate } from "react-router-dom";



function Login({isAuth,setIsAuth}) {

  let navgigate = useNavigate();

  

  const [Loginemail,setloginemail] = useState("");
  const [loginpass,setloginpass] = useState("");
  
  

  const login = async () =>{
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Loginemail,
        loginpass
      );
      const user = userCredential.user;
      navgigate("/");

  
   
    } catch(error){
        console.log(error)
    }

}






  

 

   
  return (
    <>
      <section className="blue-background py-5 my-5">
        <div className=" d-flex  justify-content-center  my-5 py-5  ">
          <div className=" ">
            <form
              className="mt-4 bg-white rounded-3 px-3 py-3"
            >
              <h2 className="mt-3 text-center">Sign in</h2>
              <p className="text-center">
                Enter your information to creat an account .
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-2">
                    <label className="form-label text-dark" htmlFor="uname">
                      Username
                    </label>
                    <input
                      className="form-control rounded"
                      id="email"
                      type="email"
                      placeholder="enter your username"
                      onChange={(event) =>{
                        setloginemail(event.target.value)
                      }}
                     
                    ></input>
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label text-dark" htmlFor="pwd">
                      Password
                    </label>
                    <input
                      className="form-control rounded"
                      id="pwd"
                      type="text"
                      placeholder="enter your password"
                      onChange={(event) =>{
                        setloginpass(event.target.value)
                      }}
                    ></input>
                  </div>

                  <div className=" text-center mt-4">
                    <button type="button" className="btn w-50 btn-dark rounded"
                    onClick={login}
                    >
                      
                      Sign In
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 text-center mt-5">
                Don't have an account?{" "}
                <a href="#" className="text-danger">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
