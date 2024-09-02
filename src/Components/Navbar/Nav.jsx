import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/Images/logo-me.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
function Nav() {
  const selectorz = useSelector((state) => state.child_store.productz);
  const items = ["apple", "mapple"];

  return (
    <div className="nav-container">
      <div className="nav-main">
        <img src={logo} alt="" className="nav-logo" />
        <div className="nav-menu">
          <Link to="/" className="p_p">
            home
          </Link>
          <Link to="/shop" className="p_p">
            shop
          </Link>
          <Link to="/about" className="p_p">
            about
          </Link>
          <Link to="/contact" className="p_p">
            contact
          </Link>
        </div>
        <div className="humberger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="basketbal">
          <Basket />
        </div>
      </div>
      <div className="nav-chain">
        {" "}
        <Link to="/" className="p_p">
          home
        </Link>
        <Link to="/shop" className="p_p">
          shop
        </Link>
        <Link to="/about" className="p_p">
          about
        </Link>
        <Link to="/contact" className="p_p">
          contact
        </Link>
        
          <Basket />
        
      </div>
    </div>
  );
}

export default Nav;
