import React from "react";
import { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const register = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      alert("Please input email and password");
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => alert(err.message));
  };

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
          <span className="signupScreen__link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
