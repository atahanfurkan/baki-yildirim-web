import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from "react-ga4"

// Google Analytics'i senin kimliğinle başlatıyoruz
ReactGA.initialize("G-10SS18K0BW");

const RootComponent = () => {
  useEffect(() => {
    // Sayfa ilk yüklendiğinde ve değiştikçe Google'a haber ver
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);