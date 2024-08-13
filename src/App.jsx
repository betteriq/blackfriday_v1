import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import Boxes from "./Components/boxes/Boxes";
import Agahi from "./Components/agahi/Agahi";
import Tempone from "./Components/temp_one/Tempone";
import Temptwo from "./Components/temp_two/Temptwo";
import Tempthree from "./Components/tempthree/Tempthree";
import Tempfour from "./Components/tempfour/Tempfour";
import Temp_five from "./Components/temp_five";
import Footer from "./Components/footer/Footers";
import Scroll from "./Components/scroll/Scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import About from "./Components/Pages/About/About";
import Shop from "./Components/Pages/Shop";
import Contact from "./Components/Pages/Contact/Contact";
import Product from "./Components/Pages/Product/Product";
function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tempone" element={<Tempone />} />
          <Route path="/temptwo" element={<Temptwo />} />
          <Route path="/tempthree" element={<Tempthree />} />
          <Route path="/tempfour" element={<Tempfour />} />
          <Route path="/tempfive" element={<Temp_five />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/product/:id" element={<Product/>} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
