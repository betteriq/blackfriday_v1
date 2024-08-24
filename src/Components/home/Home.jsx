import React from "react";
import "./Home.css";
import Boxes from "../boxes/Boxes";
import Agahi from "../agahi/Agahi";
import Tempone from "../temp_one/Tempone";
import Temptwo from "../temp_two/Temptwo";
import Tempthree from "../tempthree/Tempthree";
import Tempfour from "../tempfour/Tempfour";
import Temp_five from "../temp_five";

function Home() {
  return (
    <>
      <div className="home">
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
      <Boxes />
      <Agahi />
      <Tempone />
      <Temptwo />
      {/* <Tempthree /> */}
      {/* <Tempfour /> */}
      {/* <Temp_five /> */}
    </>
  );
}

export default Home;
