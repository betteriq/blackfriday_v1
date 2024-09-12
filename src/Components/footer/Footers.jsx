import React from "react";
import { Link } from "react-router-dom";
import "./Footers.css";
function Footers() {
  return (
    <>
      <div className="footers">
        <hr style={{ color: "#ffffff", width: "100vw", margin: 0 }} />
        <div className="footers_container">
          <h3>Copyright © 2024 Black Friday | Powered by Black Friday</h3>
        </div>
      </div>
    </>
  );
}

export default Footers;
