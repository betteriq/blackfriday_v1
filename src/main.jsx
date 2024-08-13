import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Temptwo from "./Components/temp_two/Temptwo.jsx";
import Tempthree from "./Components/tempthree/Tempthree.jsx";
import Home from "./Components/home/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      
    </React.StrictMode>
    ,
  </BrowserRouter>
);
