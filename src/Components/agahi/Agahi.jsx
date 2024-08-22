import React, { useState } from "react";
import "./Agahi.css";

function Agahi() {
  const [positions, setPosition] = useState("flex");

  const chbg = () => {
    setPosition("none");
  };
  return (
    <div className="agahi">
      <div className="agahi_main" style={{ display: positions }}>
        <p>
          This is a demo store for testing purposes — no orders shall be
          fulfilled . {"    "}
        </p>
        <p onClick={chbg}>   Dismiss</p>
      </div>
    </div>
  );
}

export default Agahi;
