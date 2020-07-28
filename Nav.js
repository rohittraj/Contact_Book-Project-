import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark mb-1 w-100">
        <a className="navbar-brand text-white" href="#">Contact-Book</a>
        <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav text-center ml-auto"> 
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/About">About</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/Contact">Contact</Link></li>
       </ul>
       <button className="btn"><Link className="nav-link text-white" to="/adduser">Add-Contact</Link></button>
       </div>
    </nav>
    );
} 
export default Nav;