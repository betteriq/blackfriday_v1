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
      </div>
    </div>
    </>
  );
}

export default Footers;
