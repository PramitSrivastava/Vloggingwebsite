import React from 'react'
import '../stylesheets/navbar.css';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
export default function Navbar() {
    return (
        <div className="abc">
            <div className="b-example-divider"></div>

<div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
    </a>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    <li className="nav-item">
          <Link className="nav-link active"   to='/home'>Home</Link>
        </li>
     
       
       
        <li className="nav-item">
          <Link className="nav-link" to='/signup' >Signup/Signin</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/AddVlogs' >Add Vlogs</Link>
        </li>
    </ul>

    <div className="col-md-3 text-end">
    <form  noValidate autoComplete="off">
    <TextField id="standard-basic" label="Standard" />
    <Button variant="contained"  color="Primary">
  Primary
</Button>
      </form>
     
    </div>
  </header>
</div>

<div className="yui">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Category</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active"  to='/'>Lifestylingvlogging</Link>
        </li>
        
       
       
        <li className="nav-item">
          <Link className="nav-link" to='/' >Motovlogging</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/' >Fashionvlogging</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/' >Gamingvlogging</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/' >Travelvlogging</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/' >Fitnessvlogging</Link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
  
</nav>
        </div>
        </div>
        
    )
}
