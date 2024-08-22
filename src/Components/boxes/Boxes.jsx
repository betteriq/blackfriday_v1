import React, { useEffect, useState } from "react";
import "./Boxes.css";

function Boxes({ duration }) {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormatted = (mili) => {
    let totalsecond = parseInt(Math.floor(mili / 1000));
    let totalminutes = parseInt(Math.floor(totalsecond / 60));
    let totalhours = parseInt(Math.floor(totalminutes / 60));
    let days = parseInt(Math.floor(totalhours / 24));
    let seconds = parseInt(totalsecond % 60);
    let minutes = parseInt(totalminutes % 60);
    let hours = parseInt(totalhours % 24);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };
  return (
    <div className="boxes">
      <div className="box">{getFormatted(time)}</div>
    </div>
  );
}

export default Boxes;
