import React from "react";
import "./zaman.css";

const Zaman = () => {
  return (
    <div className="page-container">
      <div className="zaman-akisi-kapsayici">
        <header className="zaman-baslik-alani">
          <h1>Yaşam Yolculuğu</h1>
          <p>Âşık Baki Yıldırım'ın 72 Yıllık Sanat ve Hayat Kronolojisi</p>
        </header>

        <div className="dikey-hat">
          {/* 1945 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1945</div>
            <div className="durak-icerik">
              <h3>Dünyaya Geliş</h3>
              <p>1 Aralık'ta Ceyhan'ın Muradiye Mahallesi'nde, tek odalı bir gecekonduda hayata gözlerini açtı.</p>
            </div>
          </div>

          {/* 1952-1956 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1952 - 1956</div>
            <div className="durak-icerik">
              <h3>Zorlu Çocukluk ve İlk İşler</h3>
              <p>İlkokulda okurken berberlik ve demircilik yaptı. 11 yaşında babası Şevket Usta'yı kaybedince ailesine bakmak için kunduracı çıraklığı ve sinemada gazoz satıcılığına başladı.</p>
            </div>
          </div>

          {/* 1960'lar - Sanat Kararı */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1960'lar</div>
            <div className="durak-icerik">
              <h3>"Sanatkâr Olacağım"</h3>
              <p>Ağabeyinin yüksek yevmiyeli çapa işçiliği teklifini "Ben çapa işçisi değil, sanatkâr olmak istiyorum" diyerek reddetti ve fotoğrafçılık çıraklığını seçti.</p>
            </div>
          </div>

          {/* 1961 - Dönüm Noktası */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1961</div>
            <div className="durak-icerik">
              <h3>Âşık Veysel Etkisi</h3>
              <p>Bir kahvehanede Âşık Veysel'i masanın üzerindeki sandalyede dinledi. Bu an, onun şiir dünyasındaki en büyük kırılma noktası oldu.</p>
            </div>
          </div>

          {/* 1965 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1965</div>
            <div className="durak-icerik">
              <h3>Askerlik ve Foto Baki</h3>
              <p>Askerlik dönüşü Ceyhan İstasyon Caddesi'nde "Foto Baki" isimli ilk profesyonel stüdyosunu açtı.</p>
            </div>
          </div>

          {/* 1966 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1966</div>
            <div className="durak-icerik">
              <h3>Evlilik</h3>
              <p>20 Kasım'da Müzeyyen Hanım ile evlendi. Bu evlilikten beş evladı dünyaya geldi.</p>
            </div>
          </div>

          {/* 1974 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1974</div>
            <div className="durak-icerik">
              <h3>Foto Moda ve Sahne</h3>
              <p>"Foto Moda" stüdyosunu kurdu ve "Baki Gençler Orkestrası" ile şiir programları sunarak sahne hayatına atıldı.</p>
            </div>
          </div>

          {/* 1999 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">1999</div>
            <div className="durak-icerik">
              <h3>Kültürel Dernekleşme</h3>
              <p>Ceyhan Şairler ve Ozanlar Derneği’nin kurucu üyesi ve ikinci başkanı oldu.</p>
            </div>
          </div>

          {/* 2017 */}
          <div className="durak-noktasi">
            <div className="tarih-etiketi">2017</div>
            <div className="durak-icerik">
              <h3>Ebedi Veda</h3>
              <p>Kültür Bakanlığı tescilli Halk Ozanı unvanıyla, binlerce dize ve tertemiz bir isim bırakarak aramızdan ayrıldı.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zaman;