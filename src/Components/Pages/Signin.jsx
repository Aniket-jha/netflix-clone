import React, { useRef } from "react";
import classes from "./Signin.module.css";
import { auth } from "../../Firebase";
const Signin = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signinHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={classes.screen}>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email-addresss" ref={emailref} />
        <input type="password" placeholder="Password" ref={passwordref} />
        <button
          type="submit"
          className={classes.button}
          onClick={signinHandler}
        >
          Sign In
        </button>
        <h4>
          <span className={classes.signupgrey}>New to Attention?</span>{" "}
          <span className={classes.signupLink} onClick={register}>
            Sign up Now
          </span>{" "}
        </h4>
      </form>
    </div>
  );
};

export default Signin;
