import React from "react";
import "./Nav.css";
import logo from "../../assets/Images/logo-me.svg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-main">
      <img src={logo} alt="" className="nav-logo" />
      <div className="nav-menu">
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
      <i class="fa fa-shopping-basket" aria-hidden="true">box</i>
    </div>
  );
}

export default Nav;
