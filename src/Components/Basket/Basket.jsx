import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import { cSlicer } from "../Redux/cSlicer";
import { Apprider1, Apprider2, Apprider3 } from "../../App";
import Pointer from "./Pointer/Pointer";

function Basket(props) {
  const selectorz = useSelector((state) => state.child_store.productz);
  // console.log(selectorz, "seeeeeeeeeeeeeeeeeee");
  let totalPrice = 0;
  const jadid1 = useContext(Apprider1);
  const toggleSection = useContext(Apprider2);
  const toggleSectionFalse = useContext(Apprider3);
  const dispatch = useDispatch();
  const [addad, setAddad] = useState(0);
  const setted = (a) => {
    setAddad((addad) => a);
  };
  selectorz.map((data) => {
    // console.log("khaneye shomare  : ", data);
    // console.log(data.product.price * data.qty);
    // console.log("Total price is :", totalPrice);
    totalPrice += data.product.price * data.qty;
    // console.log("majmooe is :", totalPrice);
  });
  useEffect(() => {
    console.log(11111);
    setted(totalPrice);
  }, [totalPrice]);
  // useEffect(() => {
  //   let total = 0;
  //   selectorz.array.forEach((element) => {
  //     total += element.product.price;
  //   });
  //   setAddad(total)
  // }, [selectorz]);
  return (
    <div className="basket-main">
      <i
        class="fa fa-shopping-basket"
        aria-hidden="true"
        onClick={toggleSection}
      >
        <div className="ponitor">
          <Pointer /> {selectorz.length}
        </div>
      </i>
      <div className={`sliding-section ${jadid1 ? "open" : ""}`}>
        {/* محتوای بخش شما */}
        <p>Shopping cart</p>
        <hr />
        <h1>
          {selectorz.map((data) => {
            return (
              <div className="basket" key={data.product.id}>
                <div className="basket-one">
                  <div className="basket-one-pro">
                    <img src={data.product.img} alt="" />
                    <div>
                      <div>{data.product.title}</div>
                      <div className="btn-basket">
                        <button>-</button>
                        {data.qty}
                        <button
                          onClick={() =>
                            dispatch(cSlicer.actions.decream(data.product))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>$ {data.product.price}</p>
                </div>
              </div>
            );
          })}
          <h1 className="totalp">Total Price is : ${addad}</h1>
          <button className="btn" onClick={toggleSectionFalse}>
            inha
          </button>
        </h1>
      </div>
      {console.log("Adadd issssssssssssssss : ", addad)}
    </div>
  );
}

export default Basket;
