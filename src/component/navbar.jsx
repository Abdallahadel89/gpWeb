import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import OtpScreen from "./Q/otpScreen";

function Navbar({ isAuth, setIsAuth }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const handleVerifyPhoneNumberClick = () => {
    setShowOtpScreen(true);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
    });
  };

  const show = () => {
    console.log(localStorage.getItem("isAuth"))
    
  };
  console.log(isAuth);

  return (
    <div className="blue-background ">
      <div className="container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary text-dark">
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="nav-link px-2 text-dark"
                onClick={handleVerifyPhoneNumberClick}
            
              >
                Features
              </button>
            </li>
            <li>
              {!isAuth   && (
                <Link to="Login" className="nav-link px-2 text-dark">
                  Login
                </Link>
              ) } 
              {isAuth && (
                <button
                  type="button"
                  className="nav-link px-2 text-dark"
                  onClick={signUserOut}
                >
                  {" "}
                  sign out{" "}
                </button>
                )}
              
            </li>
            {currentUser != null && (
              <li>
                <button type="button" className="nav-link px-2 text-dark">
                  {currentUser.displayName}
                </button>
              </li>

            )}
          </ul>
          {showOtpScreen && <OtpScreen />}

        </header>
      </div>
    </div>
  );
}

export default Navbar;
