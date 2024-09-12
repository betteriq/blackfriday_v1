import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { useDispatch } from "react-redux";
import { cSlicer } from "../../Redux/cSlicer";
import Nav from "../../Navbar/Nav";
import Footers from "../../footer/Footers";
function Product() {
  const [product, setProducts] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/datas.json")
      .then((res) => {
        if (!res) {
          console.log("nagerefte");
        }
        console.log("gerefte");
        return res.json();
      })
      .then((data) => {
        const product = data.find((item) => item.id === parseInt(id));
        setProducts(product);
      })
      .catch((error) => console.error(error));
  }, []);
  if (!product) return <p>در حال بارگذاری...</p>;
  return (
    <div className="product">
      <Nav/>
      <div className="product_main">
        <div className="main_one">
          <img src={product.img} alt="" />
        </div>
        <div className="main_two">
          <div className="main_two_p_one">
            <section>{product.daste}</section>

            <h1>{product.title}</h1>
            <section>${product.price}</section>
            <p>{product.description}</p>
            <button
              className="btn"
              onClick={() => dispatch(cSlicer.actions.increament(product))}
            >
              Add
            </button>
          </div>
          <div className="main_two_p_two">
            <section>Category : {product.daste}</section>
            <p>Free shiping on orders over 50$ </p>
            <div>
              <input type="radio" name="sdsds" id="first" />
              <label htmlFor="first"> No-Risk Money Back Guarantee!</label>
            </div>
            <div>
              <input type="radio" name="" id="second" />
              <label htmlFor="second"> No Hassle Refunds</label>
            </div>
            <div>
              <input type="radio" name="" id="third" />
              <label htmlFor="third"> Secure Payments</label>
            </div>
            <div className="main_two_p_two_g">
              <h4>Guaranteed Safe Checkout</h4>
            </div>
          </div>
        </div>
      </div>
      <Footers/>
    </div>
  );
}

export default Product;
