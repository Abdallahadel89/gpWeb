import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

function Register({ isAuth, setIsAuth }) {
  const [registerEmail, setregemail] = useState("");
  const [registerpass, setregPass] = useState("");
  const [registername, setrename] = useState("");
  const [registerphone,setrephone] = useState();


  let navgigate = useNavigate();

  const reg = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerpass
      );
      const userdata = {
        email: registerEmail,
        password: registerpass,
        phone: registerphone,
        user: auth.currentUser,
      };
      await updateProfile(auth.currentUser, { displayName: registername });
      await sendEmailVerification(auth.currentUser);
      alert("verification email has been sent ");
      window.localStorage.setItem("user", JSON.stringify(userdata));
      setregemail("");
      setregPass("");
      setrephone("");
      alert("Email sent");
    ;

     
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="blue-background">
        <div className=" d-flex  justify-content-center  my-5 py-5  ">
          <div className=" ">
            <form className="mt-4 bg-white rounded-3 px-3 py-3">
              <h2 className="mt-3 text-center">Sign up</h2>
              <p className="text-center">
                Enter your information to creat an account .
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group d-flex flex-column">
                    <label className="form-label text-dark" htmlFor="uname">
                      Full name
                    </label>
                    <input
                      className="form-control rounded border"
                      id="Fname"
                      type="text"
                      placeholder="Full Name"
                      onChange={(event) => {
                        setrename(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-2">
                  <label className="form-label text-dark" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="form-control rounded"
                    id="email"
                    type="email"
                    placeholder="enter your Email"
                    onChange={(event) => {
                      setregemail(event.target.value);
                    }}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <PhoneInput
                  country={'eg'}
                  value={registerphone}
                  onChange={setrephone}
                 >

                  </PhoneInput>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label text-dark" htmlFor="pwd">
                    Password
                  </label>
                  <input
                    className="form-control rounded"
                    id="pwd"
                    type="password"
                    placeholder="enter your password"
                    onChange={(event) => {
                      setregPass(event.target.value);
                    }}
                  ></input>
                </div>

                <div className=" text-center mt-4">
                  <button
                    type="button"
                    className="btn w-50 btn-dark rounded"
                    onClick={reg}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="col-lg-12 text-center mt-5">
                already have an account?{" "}
                <a href="#" className="text-danger">
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
