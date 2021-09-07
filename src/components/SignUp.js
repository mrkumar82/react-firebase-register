import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/fbconfig";

function SignUp() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signUp container">
      <div className="row">
        <form className="col s12" onSubmit={signUp}>
          <h5>Sign Up</h5>
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
                SignUp
              </button>
            </div>
          </div>
          <h6 className="left-align">
            Login here<Link to="/signin">Sign in</Link> here
          </h6>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
