import React from "react";
import "./Tempthree.css";
import shekleyek8 from "../../assets/Images/8-product-400x463.jpg";
import shekleyek7 from "../../assets/Images/7-product-400x463.jpg";
import shekleyek6 from "../../assets/Images/7-product-400x463.jpg";
import shekleyek5 from "../../assets/Images/5-product-400x463.jpg";
import { Link } from "react-router-dom";
function Tempthree() {
  return (
    <div className="tempthree">
      <h3>Unbelievable Discounts Await You</h3>
      <h4>Black Friday Madness is Here!</h4>
      <div className="tempthree_boxes">
        <Link to="/product/7"  className="kol">
          <section>
            <img src={shekleyek8} alt="" />
            <h3>NEXATONE HEADSET</h3>
            <div className="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p className="dr">price $110</p>
          </section>
        </Link>
        <Link to="/product/4"  className="kol">
          <section>
            <img src={shekleyek7} alt="" />
            <h3>ECHOPULSE SOUNDGEAR</h3>
            <div className="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>price $110</p>
          </section>
        </Link>
        <Link to="/product/8"  className="kol">
          <section>
            <img src={shekleyek6} alt="" />
            <h3>EvoTech Mobile</h3>
            <div className="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>price $110</p>
          </section>
        </Link>
        <Link to="/product/8"  className="kol">
          <section>
            <img src={shekleyek5} alt="" />
            <h3>SONOWAVE HEADPHONES</h3>
            <div className="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>price $110</p>
          </section>
        </Link>
      </div>
    </div>
  );
}

export default Tempthree;
