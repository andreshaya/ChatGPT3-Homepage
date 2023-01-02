import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./scrollbutton.css";

const ScrollButton = () => {
  const [topBtn, setTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {topBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}
      
    </div>
  );
};

export default ScrollButton;
