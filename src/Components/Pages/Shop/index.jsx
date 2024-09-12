import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Nav from "../../Navbar/Nav";
import Footers from "../../footer/Footers";

function Shop() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch("./datas.json")
      .then((res) => res.json())
      .then((data) => setProducts(data), setLoad(true))
      .catch((error) => console.error("Errod dade dadash"));
  }, []);
  return (
    <div className="shop">
      <div className="shop_container">
      <Nav/>
        <div className="shop_l1">
          <h1 className="shop_logo">Shop</h1>
        </div>
      </div>
      <div className="shop_between">
        <section>Showing 1–8 of 16 result</section>
        <section></section>
      </div>
      <div className="shop_lists">
        {load &&
          products.map((data) => {
            return (
              <Link to={`/product/${data.id}`} key={data.id}>
                <div className="lists">
                  <div className="list">
                    <div className="list_container">
                      <div className="img-con">
                        <img src={data.img} alt="" />
                      </div>
                      <h2>{data.title}</h2>
                      <div>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                      <p>
                        <section className="popo">$600 price</section>$475 price
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <Footers/>
    </div>
  );
}

export default Shop;
