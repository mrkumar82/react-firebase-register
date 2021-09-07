import React from "react";
import { auth } from "../config/fbconfig";
function Home() {
  return (
    <div>
      <h2>Home </h2>
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  );
}

export default Home;
