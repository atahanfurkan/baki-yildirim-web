import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">

            <p className="footer-kicker">
              DİJİTAL BİYOGRAFİ & AİLE ARŞİVİ
            </p>

            <Link to="/" className="footer-name">
              Baki
              <span>Yıldırım</span>
            </Link>

            <div className="footer-years">
              <span>1945</span>
              <i></i>
              <span>2017</span>
            </div>

            <p className="footer-description">
              Şiirleri, fotoğrafları ve yaşamından kalan
              hatıralarla Anadolu'nun sesini geleceğe
              taşıyan dijital bir arşiv.
            </p>

          </div>


          <div className="footer-navigation">

            <div className="footer-column">
              <span className="footer-column-title">
                SAYFALAR
              </span>

              <nav>

                <Link to="/">
                  <span>01</span>
                  Ana Sayfa
                </Link>

                <Link to="/hakkinda">
                  <span>02</span>
                  Hayatı
                </Link>

                <Link to="/zaman-cizelgesi">
                  <span>03</span>
                  Zaman Çizelgesi
                </Link>

                <Link to="/galeri">
                  <span>04</span>
                  Eserleri
                </Link>

                <Link to="/fotograf-arsivi">
                  <span>05</span>
                  Fotoğraf Arşivi
                </Link>

                <Link to="/iletisim">
                  <span>06</span>
                  İletişim
                </Link>

              </nav>
            </div>


            <div className="footer-column footer-contact">

              <span className="footer-column-title">
                ARŞİVE KATKI
              </span>

              <p>
                Baki Yıldırım'a ait fotoğraf, belge,
                video veya bir anınızı paylaşabilirsiniz.
              </p>

              <a href="mailto:atahanfrkn@gmail.com">
                atahanfrkn@gmail.com
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>


        <div className="footer-marquee">
          <span>ÂŞIK BAKİ YILDIRIM</span>
        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Âşık Baki Yıldırım Arşivi
          </p>

          <p className="footer-location">
            CEYHAN · ADANA
          </p>

          <p className="footer-credit">
            Tasarım & Geliştirme
            <span> Atahan Furkan Yıldırım</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;