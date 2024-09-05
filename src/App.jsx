import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/home/Home";
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
import Basket from "./Components/Basket/Basket";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
export const Apprider1 = createContext(null);
export const Apprider2 = createContext(null);
export const Apprider3 = createContext(null);
function App() {
  const mamad = "mamad";
  const [isOpen, setIsOpen] = useState(false);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  const toggleSectionFalse = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Apprider1.Provider value={isOpen}>
        <Apprider2.Provider value={toggleSection}>
          <Apprider3.Provider value={toggleSectionFalse}>
            <Provider store={store}>
              <div className="container">
                {/* <Scroll /> */}
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
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/basket" element={<Basket />} />
                </Routes>
              </div>
              {/* <Footer /> */}
            </Provider>
          </Apprider3.Provider>
        </Apprider2.Provider>
      </Apprider1.Provider>
    </>
  );
}

export default App;