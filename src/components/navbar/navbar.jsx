import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`;

  return (
    <header
      className={`site-header${
        isScrolled ? ' scrolled' : ''
      }`}
    >
      <nav className="navbar" aria-label="Ana menü">

        <NavLink
          to="/"
          className="nav-brand"
          onClick={closeMenu}
        >
          <span className="brand-name">
            BAKİ YILDIRIM
          </span>

          <span className="brand-years">
            1945 — 2017
          </span>
        </NavLink>

        <button
          className={`hamburger${
            isMobileMenuOpen ? ' active' : ''
          }`}
          type="button"
          aria-label={
            isMobileMenuOpen
              ? 'Menüyü kapat'
              : 'Menüyü aç'
          }
          aria-expanded={isMobileMenuOpen}
          onClick={() =>
            setIsMobileMenuOpen((open) => !open)
          }
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul
          className={`nav-links${
            isMobileMenuOpen ? ' active' : ''
          }`}
        >
          <li>
            <NavLink
              end
              to="/"
              className={linkClass}
              onClick={closeMenu}
            >
              Ana Sayfa
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/hakkinda"
              className={linkClass}
              onClick={closeMenu}
            >
              Hayatı
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/zaman-cizelgesi"
              className={linkClass}
              onClick={closeMenu}
            >
              Zaman Çizelgesi
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/galeri"
              className={linkClass}
              onClick={closeMenu}
            >
              Eserleri
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/fotograf-arsivi"
              className={linkClass}
              onClick={closeMenu}
            >
              Fotoğraf Arşivi
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/iletisim"
              className={linkClass}
              onClick={closeMenu}
            >
              İletişim
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;