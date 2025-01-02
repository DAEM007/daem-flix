import React from "react";
import { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const userNameRef = useRef<HTMLInputElement | null>(null);
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
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={userNameRef} type="email" placeholder="username" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupScreen;
