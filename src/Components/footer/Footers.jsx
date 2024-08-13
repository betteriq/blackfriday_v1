import React from "react";
import { Link } from "react-router-dom";
import "./Footers.css";
function Footers() {
  return (
    <>
    <hr style={{color:"#ffffff",padding:0,margin:0}}/>
    <div className="footers">
      <div className="footers_container">
        <h3>Copyright © 2024 Black Friday | Powered by Black Friday</h3>
        <div className="footer-menu">
          <Link to="/home">home</Link>
          <Link to="/shop">shop</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footers;
