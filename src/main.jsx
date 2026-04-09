import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from "react-ga4"

// 1. ADIM: Her şeyden önce, en tepede başlatıyoruz
const TRACKING_ID = "G-10SS18K0BW";
ReactGA.initialize(TRACKING_ID);
console.log("Sistem: Google Analytics Kimliği Tanımlandı.");

const RootComponent = () => {
  useEffect(() => {
    // 2. ADIM: Sayfa yüklendiğinde sinyal gönder
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    console.log("Sistem: İlk sayfa görüntülemesi Google'a bildirildi.");
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