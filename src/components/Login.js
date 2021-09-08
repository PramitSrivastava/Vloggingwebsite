import React from 'react'
import back_config from './config';
import '../stylesheets/login.css';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
export default function Login() {
  const Login = () => {

    const url = back_config.back_url;
    const classes = myStyles();

    const loginform = {
        email: '',
        password: ''
    }

    const formSubmit = (values) => {

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
          
          <div className="login-page">
  <div className="form">
    <form className="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    {/* <form className="login-form"> */}
    <Formik
            initialValues={loginform}
                            onSubmit={formSubmit}
                        >{({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
    <label className="mt-5 w-100">Email</label>
     <input className="form-control" onChange={handleChange} value={values.email} name="email" />
      {/* <input type="text" placeholder="username"/> */}
      {/* <input type="password" placeholder="password"/> */}
      <label className="mt-4">Password</label>
     <input className="form-control" onChange={handleChange} value={values.password} type="password" name="password" />
      <button>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
     )}
     </Formik>
  </div>
</div>
        </div>
    )
}
}
