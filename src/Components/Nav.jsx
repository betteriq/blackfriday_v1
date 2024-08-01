import React from "react";
import "./Nav.css";
import logo from "../assets/Images/logo-me.svg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-main">
      <img src={logo} alt="" className="nav-logo" />
      <div className="nav-menu">
        <Link href="">home</Link>
        <Link href="">shop</Link>
        <Link href="">about</Link>
        <Link href="">contact</Link>
      </div>
      <i class="fa fa-shopping-basket" aria-hidden="true"></i>
    </div>
  );
}

export default Nav;
