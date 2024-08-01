import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import Boxes from "./Components/boxes/Boxes";
import Agahi from "./Components/agahi/Agahi";
import Tempone from "./Components/temp_one/Tempone";
import Temptwo from "./Components/temp_two/Temptwo";
import Tempthree from "./Components/tempthree/Tempthree";
function App() {
  return (
    <>
      <Home />
      <Boxes duration={2 * 24 * 60 * 60 * 1000} />
      <Agahi/>
      <Tempone/>
      <Temptwo/>
      <Tempthree/>
    </>
  );
}

export default App;
