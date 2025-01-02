import React, { useState } from "react";
import { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SignupScreen from "./SignupScreen";

function SignInScreen() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      alert("Please input email and password");
      return;
    }

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      {signUp ? (
        <SignupScreen />
      ): (
        <div className="signupScreen">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>

            <h4>
              <span className="signupScreen__gray">New to Netflix? </span>
              <span className="signupScreen__link" onClick={() => setSignUp(true)}>
                Sign Up now
              </span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}

export default SignInScreen;
