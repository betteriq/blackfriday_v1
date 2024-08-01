import React, { useEffect, useState } from "react";

function Getdata() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.wallex.ir/v1/markets")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network ErroR");
          console.log("err");
        }
        return response.json();
      })
      .then((data) => setData(data.result.symbols));
  }, []);
  console.log("not err");
  const btcprice = data?.NOTUSDT.stats.lastPrice;
  console.log(data?.NOTUSDT.stats);
  return (
    <div>
      <h1>getdata</h1>
      <h1>{btcprice}</h1>
    </div>
  );
}

export default Getdata;
