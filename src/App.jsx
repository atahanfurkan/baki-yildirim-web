import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Main from './pages/main/main';
import Hakkinda from './pages/hakkında/hakkında';
import Eserler from './pages/eserler/eserler';
import Zaman from './pages/zaman/zaman';
import Iletisim from './pages/iletisim/iletisim';
import FotografArsivi from './pages/fotografArsivi/fotografArsivi';

import './App.css';

import ScrollToTop from "./components/scrollToTop/scrollToTop";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Main />}
            />

            <Route
              path="/hakkinda"
              element={<Hakkinda />}
            />

            <Route
              path="/zaman-cizelgesi"
              element={<Zaman />}
            />

            <Route
              path="/galeri"
              element={<Eserler />}
            />

            <Route
              path="/fotograf-arsivi"
              element={<FotografArsivi />}
            />

            <Route
              path="/iletisim"
              element={<Iletisim />}
            />

          </Routes>
        </main>

        <ScrollToTop />

        <Footer />

      </div>
    </Router>
  );
}

export default App;