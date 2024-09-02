import React, { useEffect, useState } from "react";
import "./Scroll.css";
function Scroll() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 30) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });
  return (
    <div className="scroll-to-top">
      {visible && <button onClick={scrollTop} className="btn">Up</button>}
    </div>
  );
}

export default Scroll;
