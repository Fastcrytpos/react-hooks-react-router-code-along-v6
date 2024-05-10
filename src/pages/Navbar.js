import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/Login" className="nav-link">Login</NavLink>
        <NavLink to="/About" className="nav-link">About</NavLink>

    </nav>
  )
}

export default Navbar