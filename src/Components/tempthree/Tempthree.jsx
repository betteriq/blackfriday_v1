import React from "react";
import "./Tempthree.css";
import shekleyek from "../../assets/Images/8-product-400x463.jpg";
function Tempthree() {
  return (
    <div className="tempthree">
      <h3>Unbelievable Discounts Await You</h3>
      <h4>Black Friday Madness is Here!</h4>
      <div className="tempthree_boxes">
        <section>
          <img src={shekleyek} alt="" />
        </section>
        <section>
          <img src={shekleyek} alt="" />
        </section>
        <section>
          <img src={shekleyek} alt="" />
        </section>
        <section>
          <img src={shekleyek} alt="" />
        </section>
      </div>
    </div>
  );
}

export default Tempthree;
