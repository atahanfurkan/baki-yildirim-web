import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="ana-alt-bilgi">
      <div className="footer-icerik">
        <div className="footer-sol">
          <p>© 2026 Âşık Baki Yıldırım Arşivi</p>
          <span>Anadolu'nun sesini geleceğe taşıyoruz.</span>
        </div>

        <div className="footer-sag">
          <p className="yapimci-notu">
            Tasarım ve Geliştirme: <span>Atahan Furkan Yıldırım</span>
          </p>
        </div>
      </div>
      <div className="footer-alt-cizgi"></div>
    </footer>
  );
};

export default Footer;