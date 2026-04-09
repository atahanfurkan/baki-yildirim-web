import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from "react-ga4"

const RootComponent = () => {
  useEffect(() => {
    // 1. Google Analytics'i burada başlatıyoruz
    ReactGA.initialize("G-10SS18K0BW");
    
    // 2. Sayfa görüntülendiğini zorla gönderiyoruz
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    
    // Test için konsola yazı yazdıralım (F12'de göreceğiz)
    console.log("Google Analytics Başlatıldı ve Sinyal Gönderildi!");
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