import React, { useState, useEffect } from "react";
import "./scrollToTop.css";
// 1. ADIM: İkonu paket içinden çağırıyoruz
import { FaArrowUp } from "react-icons/fa"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Artık 'window' kaydırmasını yakalayabiliyoruz (App.css'i düzelttik)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="scroll-btn"
        >
          {/* 2. ADIM: Düz yazı yerine ikon bileşenini koyuyoruz */}
          <FaArrowUp /> 
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;