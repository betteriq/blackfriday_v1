import React from "react";
import "./Tempone.css";
import gooshi from "../../assets/Images/headphone-01.png";
function Tempone() {
  return (
    <div className="momo">
      <div className="tempone">
        <div className="tempone_first">
          <h3>Up to 50% Off</h3>
          <h1>Grab Your Favorites Before They're Gone</h1>
          <p>
            You can trust us to bring you the latest technology at unbeatable
            prices. Don’t miss this limited-time opportunity to upgrade your
            audio game. Grab your perfect pair now!
          </p>
          <button className="btn">shop now</button>
        </div>
        <div className="tempone_second">
          <img src={gooshi} alt="" />
        </div>
      </div>
      <div className="temponenull">
        <div className="tempone_second">
          <img src={gooshi} alt="" />
        </div>
        <div className="tempone_first">
          <h3>Up to 50% Off</h3>
          <h1>Grab Your Favorites Before They're Gone</h1>
          <p>
            You can trust us to bring you the latest technology at unbeatable
            prices. Don’t miss this limited-time opportunity to upgrade your
            audio game. Grab your perfect pair now!
          </p>
          <button className="btn">shop now</button>
        </div>
      </div>
    </div>
  );
}

export default Tempone;
