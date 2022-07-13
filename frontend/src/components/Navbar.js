import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";
import { UserContext } from "../App";

const Navbar = () => {

  const { state, } = useContext(UserContext);

  const RenderList = () => {
    if (state) {
      return (
        <>
          <li><NavLink to="/header" >Home</NavLink></li>
          <li><NavLink to="/services"  >Services</NavLink></li>
          <li><NavLink to="/about"  >About us</NavLink></li>
          <li><NavLink to="/logout"  >logout</NavLink></li>
        </>
      )
    } else {
      return (
        <>
          <li><NavLink to="/header" >Home</NavLink></li>
          <li><NavLink to="/services"  >Services</NavLink></li>
          <li><NavLink to="/about"  >About us</NavLink></li>
          <li><NavLink to="/signin"  >Signin</NavLink></li>
          <li><NavLink to="/register"  >signup</NavLink></li>

        </>
      )
    }
  }

  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <nav className={nav ? 'nav active' : 'nav'} >
        <a href="#" className="logo"  >
          <img src={logo} alt="img" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" >
          <span className="nav-icon"></span>
        </label>

        <ul className="menu" >
        <RenderList/>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
