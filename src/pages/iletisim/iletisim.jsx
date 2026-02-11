import React, { useState } from "react";
import "./iletisim.css";
import { veritabani } from "../../firebase"; 
import { collection, addDoc } from "firebase/firestore";

const Iletisim = () => {
  // Form verileri için state'ler
  const [adSoyad, setAdSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  
  // Şık bildirim (alert) için state
  const [basarili, setBasarili] = useState(false);

  const formuGonder = async (e) => {
    e.preventDefault();
    setYukleniyor(true);
    setBasarili(false); 

    try {
      // Firebase Firestore'a veri ekleme
      await addDoc(collection(veritabani, "gelenAnilar"), {
        adSoyad: adSoyad,
        email: email,
        mesaj: mesaj,
        tarih: new Date(),
      });

      // Başarı durumunu aktif et ve formu temizle
      setBasarili(true);
      setAdSoyad(""); 
      setEmail(""); 
      setMesaj(""); 

      // 5 saniye sonra bildirimi otomatik kapat
      setTimeout(() => setBasarili(false), 5000);

    } catch (hata) {
      console.error("Firebase Hatası: ", hata);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div className="page-container">
      <div className="iletisim-kapsayici">
        
        {/* ÖZEL BAŞARI BİLDİRİMİ (ALERT) */}
        {basarili && (
          <div className="ozel-bildirim-kutusu">
            <div className="bildirim-icerik">
              <span className="onay-ikonu">✓</span>
              <p>Mesajınız başarıyla iletildi. Teşekkür ederiz.</p>
              <button onClick={() => setBasarili(false)} className="kapat-butonu">×</button>
            </div>
          </div>
        )}

        <header className="iletisim-ust-alan">
          <h1>Anı ve Mesaj Gönderin</h1>
          <p>
            Âşık Baki Yıldırım’ın hatırasını yaşatmak için anlatmak istediğiniz 
            anıları bu form üzerinden bize iletebilirsiniz.
          </p>
        </header>

        <div className="iletisim-ana-bolum">
          <form className="iletisim-formu" onSubmit={formuGonder}>
            <div className="form-grubu">
              <label>Adınız ve Soyadınız</label>
              <input 
                type="text" 
                placeholder="Ad Soyad" 
                value={adSoyad}
                onChange={(e) => setAdSoyad(e.target.value)}
                required 
              />
            </div>

            <div className="form-grubu">
              <label>E-Posta Adresiniz</label>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-grubu">
              <label>Mesajınız / Anınız</label>
              <textarea 
                rows="8" 
                placeholder="Paylaşmak istediğiniz hatıra veya açıklama metni..."
                value={mesaj}
                onChange={(e) => setMesaj(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="form-gonder-butonu" disabled={yukleniyor}>
              {yukleniyor ? "Gönderiliyor..." : "Mesajı Gönder"}
            </button>
          </form>

          <div className="iletisim-yan-bilgi">
            <div className="bilgi-kart-kutusu">
              <h3>Belge ve Fotoğraflar</h3>
              <p>
                Elinizde bulunan fotoğraf ve videoları doğrudan e-posta 
                adresimize göndererek arşive katkıda bulunabilirsiniz.
              </p>
              <div className="e-posta-satiri">
                <strong>E-Posta:</strong>
                <a href="mailto:atahanfrkn@gmail.com"> atahanfrkn@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;