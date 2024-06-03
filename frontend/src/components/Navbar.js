import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" className="nav-link">
            Login 
          </NavLink>
        </li>
        <li>
          <NavLink to="/Registration" activeClassName="active" className="nav-link">
            Register 
          </NavLink>
        </li>
        <li>
          <NavLink to="/Tracker" activeClassName="active" className="nav-link">
            Task Tracker 
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="active" className="nav-link">
            Completed Tasks
          </NavLink>
        </li>
        <li className="dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;