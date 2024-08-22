import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import { cSlicer } from "../Redux/cSlicer";
import { Apprider1, Apprider2, Apprider3 } from "../../App";

function Basket(props) {
  const selectorz = useSelector((state) => state.child_store.productz);

  const jadid1 = useContext(Apprider1);
  const jadid2 = useContext(Apprider2);
  const toggleSectionFalse = useContext(Apprider3);

  const dispatch = useDispatch();
  const [addad, setAddad] = useState(0);
  const setted = (a) => {
    setAddad((addad) => addad + a);
  };
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
        onClick={toggleSectionFalse}
      >
        box {selectorz.length}
      </i>
      <div className={`sliding-section ${jadid1 ? "open" : ""}`}>
        {/* محتوای بخش شما */}
        <p>Shopping cart</p>
        <hr />
        <h1>
          {selectorz.map((data) => {
            // setted(data.product.price);

            return (
              <div className="basket" key={data.product.id}>
                <div className="basket-one">
                  <div className="basket-one-pro">
                    <img src={data.product.img} alt="" />
                    <div>{data.product.title}</div>
                    <button>-</button>
                    {data.qty}{setAddad(1)}
                    <button
                      onClick={() =>
                        dispatch(cSlicer.actions.decream(data.product))
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>{data.product.price}</p>
                </div>
              </div>
            );
          })}
        </h1>
      </div>
    </div>
  );
}

export default Basket;
