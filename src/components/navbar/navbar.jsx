import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Bir linke tıklandığında menüyü kapat (Mobil kullanıcı deneyimi için)
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>BAKİ YILDIRIM</Link>
      </div>

      {/* Hamburger İkonu (Sadece Mobilde Görünür) */}
      <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menü Linkleri */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Ana Sayfa</Link></li>
        <li><Link to="/hakkinda" onClick={closeMenu}>HAKKINDA</Link></li>
        <li><Link to="/zaman-cizelgesi" onClick={closeMenu}>ZAMAN ÇİZELGESİ</Link></li>
        <li><Link to="/galeri" onClick={closeMenu}>GALERİ / ESERLER</Link></li>
        <li><Link to="/iletisim" onClick={closeMenu}>İLETİŞİM</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;