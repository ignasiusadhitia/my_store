import React from "react";
import { withAuth } from "../context/AuthContext";

const LogInLogOut = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <span onClick={props.logout}>Logout</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default withAuth(LogInLogOut);
