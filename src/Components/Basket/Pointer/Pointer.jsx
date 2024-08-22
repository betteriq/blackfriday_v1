import React from "react";
import "./Pointer.css";
import { useSelector } from "react-redux";

function Pointer() {
  const selectorz = useSelector((state) => state.child_store.productz);
  return <div className="pointer">{selectorz.lenght}</div>;
}

export default Pointer;
