import { Button } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import "../stylesheets/signup.css";
import app_config from "../config";

export default function Signup() {
  //   const url = app_config.ap;
  const url = app_config.api_url;
  const loginform = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);
    fetch(url + "user/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);

          if (data.password == values.password) {
            console.log("login success");

            Swal.fire({
              icon: "success",
              title: "Login Success",
            });

            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.replace("/home");

            return
          }
        }

        Swal.fire({
          icon: "error",
          title: "Email or Password Incorrect",
        });
      });
  };

  const signupform = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const signupSubmit = (values) => {
    console.log(values);

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    // request on server and parse the json response
    fetch(url + "user/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Registered!",
            text: "Now Login to Continue",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong",
          });
        }
      });
  };

 

  return (
    <div className="jbn">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab">
            Sign in
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <Formik initialValues={loginform} onSubmit={loginSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="group">
                      <label for="user" className="label">
                        Username
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label for="pass" className="label">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="input"
                        data-type="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <input
                        id="check"
                        type="checkbox"
                        className="check"
                        checked
                      />
                      <label for="check">
                        <span className="icon"></span> Keep me Signed in
                      </label>
                    </div>
                    <div className="group">
                      <button type="submit" className="button">
                        Sign In
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <Formik initialValues={signupform} onSubmit={signupSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="group">
                      <label for="name" className="label">
                       Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input"
                        onChange={handleChange}
                        value={values.name}
                        name="name"
                      />
                    </div>

                    <div className="group">
                      <label for="username" className="label">
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="input"
                        onChange={handleChange}
                        value={values.username}
                        name="username"
                      />
                    </div>

                    <div className="group">
                      <label for="email" className="label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="text"
                        className="input"
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                      />
                    </div>

                    <div className="group">
                      <label for="password" className="label">
                        Password
                      </label>
                      <input
                        id="password"
                        type="text"
                        className="input"
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                      />
                    </div>
                  
                    

                   

                   <div className="vbn">
                    <button type="submit" className="btn btn-primary mt-5">
                      Submit
                    </button>
                    </div>
                  </form>
                 
                )}
                
              </Formik>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
