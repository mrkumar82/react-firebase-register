import React, { Component, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../config/fbconfig";

const ProctedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      };
      if (userAuth) {
        setUser(user);
        setLoading(true);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          if (user) {
            return <Component {...props} />;
          } else {
            return <Redirect to={{ pathname: "/signin" }} />;
          }
        }
      }}
    />
  );
};

export default ProctedRoute;
