import React, { createContext } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import AuthContext from "../../../Context/AuthContext";

const Login = () => {
  const { user, googleSignInUsers, text, logoutUser } = UseAuth();
  //   const {user,text,googleSignInUsers}=createContext(AuthContext)
  console.log(text);
  console.log(googleSignInUsers);

  // handleGoogle login

  const handleGoogleSignIn = () => {
    googleSignInUsers()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Good job!",
          text: `Google sign in Successfull`,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const handleLogOut = () => {
    logoutUser().then((result) => {
      Swal.fire({
        // title: "Good job!",
        text: "Log Out Successfull",
        icon: "success",
      });
    });
  };

  return (
    <div className="my-5 pt-20 flex flex-col ">
      <button
        onClick={handleGoogleSignIn}
        className="bg-light-primary text-4xl px-2"
      >
        Log in
      </button>
      {/* <p>{user && user?.email: `${user.email}`:`No user`}</p> */}
      {user && user?.email ? <p>{user.email}</p> : <p>No user found</p>}
      {user && user?.email ? (
        <button
          onClick={handleLogOut}
          className="bg-light-primary text-4xl px-2"
        >
          {" "}
          Log Out
          {/* {user && user?.email? 'Log Out':'Login With Google'} */}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
