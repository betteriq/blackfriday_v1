import React, { useEffect, useState } from "react";
import "./Product.css";
import img1 from "../../../assets/Images/1.jpg";
function Product() {
  const [onvan, setOnvan] = useState();
  const [pic, setPic] = useState();
  useEffect(() => {
    fetch("./datas.json")
      .then((res) => res.json())
      .then((data) => {
        setOnvan(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="product">
      <div className="product_p1">
        <div className="product_p1_p1">
          {onvan.map((data) => {
           return  <img src={data.img} alt="" />;
          })}
        </div>
        <div className="product_p1_p2">
          <div className="product_p1_p2_index">
            <h5>lahtops</h5>
            <h1>AeroSync Elite Laptops</h1>
            <section>$475.00</section>
            <p>
              These notebooks redefine the boundaries of what’s possible with
              cutting-edge technology and seamless design. They offer a quantum
              leap in computing, delivering power and elegance in one.
              Meticulously crafted to inspire creativity and productivity, they
              invite you to unleash your potential with top-tier performance
            </p>
          </div>
          <div className="product_p1_p2_mindex">sss</div>
        </div>
      </div>
      <div className="product_p2"></div>
      <div className="product_p3"></div>
    </div>
  );
}

export default Product;
