
import {NavLink} from 'react-router-dom';
import '../css/navBar.css';


import React, { Component } from 'react'

export class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  render() {
  
    return (
      <div >
       <nav  className=" fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Hotel Swan Inn</NavLink>
  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="navbar-nav">
        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
      </li>
   
      </ul>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    </ul>
    <ul className="navbar-nav mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
    </ul>
  
  </div>
  <div>
  </div>
</div>
</nav>
    </div>
    )
  }
}

export default NavBar
