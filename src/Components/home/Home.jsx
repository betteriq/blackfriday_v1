import React from "react";
import "./Home.css";
import Nav from "../Nav"
function Home() {
  return (
    <>
      <div className="home">
        <Nav/>
        <div className="home_l1">
          <div className="home_l2">
            <h3>Hurry, Black Friday is Almost Here!</h3>
            <h1>
              <span>Time Left Until Our </span>Biggest Sale of the Year Begins
            </h1>
            <button className="btn">set reminder</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
