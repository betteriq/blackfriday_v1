import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/Images/logo-me.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
function Nav() {
  const selectorz = useSelector((state) => state.child_store.productz);
  // const nSelectorz=selectorz.lenght()
  const items = ["apple", "mapple"];



  return (
    <div className="nav-main">
      <img src={logo} alt="" className="nav-logo" />
      <div className="nav-menu">
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
      <Basket />
    </div>
  );
}

export default Nav;
