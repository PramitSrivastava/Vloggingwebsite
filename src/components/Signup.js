import { Button } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import "../stylesheets/signup.css";
import back_config from '../config';
import app_config from "../config";


export default function Signup() {
//   const url = app_config.ap;
const url = app_config
  const loginform = {
	email: '',
	password: ''
}
const signupform ={
	username:'',
	password:'',
	confirmpassword:'',
	email:''
}


const formSubmit = (values) => {
	console.log(values);
	fetch(url + 'user/getbyemail/' + values.email)
		.then(res => res.json())
		.then(data => {
			if (data) {
				console.log(data);

				if (data.password == values.password) {
					console.log('login success');

					Swal.fire({
						icon: 'success',
						title: 'Login Success',
					})

					sessionStorage.setItem('user', JSON.stringify(data));
					window.location.replace('/product');

					return
				}
			}

			Swal.fire({
				icon: 'error',
				title: 'Email or Password Incorrect'
			})

		})


}

  return (
    <div>
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
		  <div className="signup-form">
		  <Formik initialValues={signupform} onSubmit={formSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="group">
                <label for="user" className="label">
                  Username
                </label>
                <input id="email" type="email" className="input" value={values.email} onChange={handleChange} />
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
                <input id="check" type="checkbox" className="check" checked />
                <label for="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <button type="submit" className="button" >Sign In</button>
              </div>

                  </form>
                )}
              </Formik>

		  </div>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
			  
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <Formik initialValues={loginform} onSubmit={formSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="group">
                <label for="user" className="label">
                  Username
                </label>
                <input id="email" type="email" className="input" value={values.email} onChange={handleChange} />
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
                <input id="check" type="checkbox" className="check" checked />
                <label for="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <button type="submit" className="button" >Sign In</button>
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
              <div className="group">
                <label for="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Email Address
                </label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
