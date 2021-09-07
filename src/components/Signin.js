import React, { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../config/fbconfig";

function Signin(props) {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((user) => {
        console.log("userpros", user);
        props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signin container">
      <div className="row">
        <form className="col s12" onSubmit={signIn}>
          <h5>Sign In</h5>
          <div className="row">
            <div className="input-field col s6">
              <input
                ref={emailRef}
                id="input_text"
                type="text"
                data-length="10"
              />
              <label htmlFor="input_text">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                ref={passRef}
                id="input_text"
                type="password"
                data-length="10"
              />
              <label htmlFor="textarea2">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6 left-align">
              <button type="submit" className="btn">
                SignIn
              </button>
            </div>
          </div>
          <h6 className="left-align">
            Not yeat register? <Link to="/signup">Sign Up</Link> here
          </h6>
        </form>
      </div>
    </div>
  );
}

export default Signin;
