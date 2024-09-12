import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/Images/logo-me.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
function Nav() {
  const selectorz = useSelector((state) => state.child_store.productz);
  const items = ["apple", "mapple"];
  const [clicked, setClicked] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const setty = () => {
    setClicked(!clicked);
  };
  const sery=()=>{
    setBlocked(!blocked)
  }
  useEffect(() => {
    sery();
    console.log("llll :" ,blocked);
  }, [clicked]);
  console.log("clicked is : ", clicked);
  return (
    <div className="nav-container">
      <div className="nav-main">
        <img
          src={logo}
          alt=""
          className={`nav-logo ${blocked ? "blocked" : ""}`}
        />
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
        <div className={`humberger ${blocked ? "blocked" : ""}`} onClick={setty}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="basketbal">
          <Basket />
        </div>
      </div>
      <div className={`nav-chain ${clicked ? "open" : ""} `}>
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
