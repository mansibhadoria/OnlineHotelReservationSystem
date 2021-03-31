import React from 'react'

import { NavLink } from 'react-router-dom';
import '../css/navBar.css';

function NavBarG() {
  return (
    <div>
      <nav className=" fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Hotel Swan Inn</NavLink>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="/homeGuest">Home</NavLink>
              </li>
              <li className="navbar-nav">
                <NavLink className="nav-link" to="/room">Room</NavLink>
              </li>
              <li className="navbar-nav">
                <NavLink className="nav-link" to="/event">Events</NavLink>
              </li>
            </ul>
          </div>
          <div>

            <div className="dropdown">
              <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown"  >Account
  <span className="caret"></span></button>
              <ul className="dropdown-menu">
              <li><NavLink className="nav-link" to="/myProfile">My Profile</NavLink></li>
                <li><NavLink className="nav-link" to="/guest/bookings">My Bookings</NavLink></li>
                <li><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBarG
