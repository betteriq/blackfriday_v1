import React from "react";
import "./Temptwo.css";
import gooshi from "../../assets/Images/headphones-img-02.jpg";
function Temptwo() {
  return (
    <div className="mom">
      <div className="temptwo">
        <div className="temptwo_second">
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
      <div className="temptwonull">
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

export default Temptwo;
