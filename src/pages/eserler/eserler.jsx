import React, { useState } from "react";
import "./eserler.css";

const Eserler = () => {
  const [seciliFoto, setSeciliFoto] = useState(null);

  // Fotoğraf Galeri Listesi (1.jpg - 8.jpg arası)
  const fotograflar = Array.from({ length: 8 }, (_, i) => i + 1);

  // Kitaplar Listesi
  const kitaplar = [
    { id: 1, isim: "Karanlıktan Aydınlığa", dosya: "karanlıktanAydınlıga.jpg", varMi: true },
    { id: 2, isim: "Sevginin Gözyaşları", dosya: "sevgininGozyaslari.jpg", varMi: true },
    { id: 3, isim: "Tan Yeri Ağarırken", dosya: "tanYeriAgarirken.jpg", varMi: true },
    { id: 4, isim: "Sevginin Yüceliği", dosya: null, varMi: false }
  ];

  return (
    <div className="page-container">
      <div className="eserler-kapsayici">
        
        <header className="eserler-ust-alan">
          <h1>Dijital Arşiv</h1>
          <p>Âşık Baki Yıldırım'ın objektifinden hatıralar, sesinden dizeler ve ölümsüz eserleri.</p>
        </header>

        {/* VİDEO BÖLÜMÜ */}
        <section className="video-galeri-bolumu">
          <h2 className="bolum-basligi">Ozanın Sesİnden</h2>
          <div className="video-izgara">
            <div className="video-kart">
              <div className="iframe-kapsayici">
                <iframe src="https://www.dailymotion.com/embed/video/xejqyf" allowFullScreen title="Video 1"></iframe>
              </div>
              <div className="video-bilgi">Şiir Dinletisi - I</div>
            </div>
            <div className="video-kart">
              <div className="iframe-kapsayici">
                <iframe src="https://www.dailymotion.com/embed/video/xkk147" allowFullScreen title="Video 2"></iframe>
              </div>
              <div className="video-bilgi">Şiir Dinletisi - II</div>
            </div>
          </div>
        </section>

        {/* KİTAPLAR BÖLÜMÜ */}
        <section className="kitaplar-bolumu">
          <h2 className="bolum-basligi">Yayınlanmış Kİtapları</h2>
          <div className="kitap-izgara">
            {kitaplar.map((kitap) => (
              <div key={kitap.id} className="kitap-kart">
                <div className="kitap-kapak">
                  {kitap.varMi ? (
                    <img 
                      src={`/books/${kitap.dosya}`} 
                      alt={kitap.isim} 
                      onClick={() => setSeciliFoto(`/books/${kitap.dosya}`)}
                    />
                  ) : (
                    <div className="kitap-yok-kapak">
                      <p>{kitap.isim}</p>
                      <span>(Görsel Yok)</span>
                    </div>
                  )}
                </div>
                <h3>{kitap.isim}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="foto-galeri-bolumu">
          <h2 className="bolum-basligi">Fotoğraf Arşİvİ</h2>
          <div className="foto-izgara">
            {fotograflar.map((num) => (
              <div 
                key={num} 
                className="foto-cerceve" 
                onClick={() => setSeciliFoto(`/images/${num}.jpg`)}
              >
                <img src={`/images/${num}.jpg`} alt={`Arşiv ${num}`} />
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX (BÜYÜTME) */}
        {seciliFoto && (
          <div className="lightbox-overlay" onClick={() => setSeciliFoto(null)}>
            <div className="lightbox-icerik">
              <img src={seciliFoto} alt="Büyük Görsel" />
              <button className="kapat-btn">×</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Eserler;