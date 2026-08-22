import React from "react";
import { Link } from "react-router-dom";
import "./zaman.css";

const zamanOlaylari = [
  {
    tarih: "1945",
    kategori: "BAŞLANGIÇ",
    baslik: "Dünyaya Geliş",
    aciklama:
      "1 Aralık'ta Ceyhan'ın Muradiye Mahallesi'nde, tek odalı bir gecekonduda hayata gözlerini açtı.",
  },
  {
    tarih: "1952 — 1956",
    kategori: "ÇOCUKLUK",
    baslik: "Zorlu Çocukluk ve İlk İşler",
    aciklama:
      "İlkokulda okurken berberlik ve demircilik yaptı. 11 yaşında babası Şevket Usta'yı kaybedince ailesine bakmak için kunduracı çıraklığı ve sinemada gazoz satıcılığına başladı.",
  },
  {
    tarih: "1960'lar",
    kategori: "KARAR",
    baslik: "“Sanatkâr Olacağım”",
    aciklama:
      "Ağabeyinin yüksek yevmiyeli çapa işçiliği teklifini “Ben çapa işçisi değil, sanatkâr olmak istiyorum” diyerek reddetti ve fotoğrafçılık çıraklığını seçti.",
  },
  {
    tarih: "1961",
    kategori: "DÖNÜM NOKTASI",
    baslik: "Âşık Veysel Etkisi",
    aciklama:
      "Bir kahvehanede Âşık Veysel'i masanın üzerindeki sandalyede dinledi. Bu an, onun şiir dünyasındaki en büyük kırılma noktası oldu.",
    vurgu: true,
  },
  {
    tarih: "1965",
    kategori: "FOTOĞRAF",
    baslik: "Askerlik ve Foto Baki",
    aciklama:
      "Askerlik dönüşü Ceyhan İstasyon Caddesi'nde “Foto Baki” isimli ilk profesyonel stüdyosunu açtı.",
  },
  {
    tarih: "1966",
    kategori: "AİLE",
    baslik: "Evlilik",
    aciklama:
      "20 Kasım'da Müzeyyen Hanım ile evlendi. Bu evlilikten beş evladı dünyaya geldi.",
  },
  {
    tarih: "1974",
    kategori: "SANAT",
    baslik: "Foto Moda ve Sahne",
    aciklama:
      "“Foto Moda” stüdyosunu kurdu ve “Baki Gençler Orkestrası” ile şiir programları sunarak sahne hayatına atıldı.",
  },
  {
    tarih: "1999",
    kategori: "KÜLTÜR",
    baslik: "Kültürel Dernekleşme",
    aciklama:
      "Ceyhan Şairler ve Ozanlar Derneği’nin kurucu üyesi ve ikinci başkanı oldu.",
  },
  {
    tarih: "2017",
    kategori: "MİRAS",
    baslik: "Ebedi Veda",
    aciklama:
      "Kültür Bakanlığı tescilli Halk Ozanı unvanıyla, binlerce dize ve tertemiz bir isim bırakarak aramızdan ayrıldı.",
  },
];

const Zaman = () => {
  return (
    <div className="timeline-page">

      {/* HERO */}
      <section className="timeline-hero">
        <div className="timeline-container">

          <div className="timeline-hero-meta">
            <span>03</span>
            <p>YAŞAM KRONOLOJİSİ</p>
          </div>

          <div className="timeline-hero-grid">

            <div className="timeline-title-area">
              <h1>
                Bir ömrün
                <span> zaman içindeki izleri.</span>
              </h1>
            </div>

            <div className="timeline-hero-info">
              <p>
                Âşık Baki Yıldırım'ın çocukluğundan
                sanat yaşamına, ailesinden kültürel
                çalışmalarına uzanan 72 yıllık yolculuğu.
              </p>

              <div className="timeline-range">
                <strong>1945</strong>
                <i></i>
                <strong>2017</strong>
              </div>
            </div>

          </div>

          <div className="timeline-big-years">
            <span>1945</span>
            <em>—</em>
            <span>2017</span>
          </div>

        </div>
      </section>


      {/* KRONOLOJİ */}
      <section className="timeline-list-section">
        <div className="timeline-container">

          <div className="timeline-list-header">
            <span>YIL</span>
            <span>OLAY</span>
            <span>AÇIKLAMA</span>
          </div>

          <div className="timeline-list">

            {zamanOlaylari.map((olay, index) => (
              <article
                className={`timeline-row ${
                  olay.vurgu ? "timeline-row-featured" : ""
                }`}
                key={`${olay.tarih}-${olay.baslik}`}
              >

                <div className="timeline-year">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{olay.tarih}</strong>
                </div>

                <div className="timeline-event-title">
                  <span>{olay.kategori}</span>
                  <h2>{olay.baslik}</h2>
                </div>

                <div className="timeline-event-description">
                  <p>{olay.aciklama}</p>

                  {olay.vurgu && (
                    <span className="timeline-highlight">
                      Yaşamındaki önemli dönüm noktalarından biri
                    </span>
                  )}
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ALINTI */}
      <section className="timeline-quote-section">
        <div className="timeline-container">

          <span className="timeline-quote-number">
            1960'lar
          </span>

          <blockquote>
            “Ben çapa işçisi değil,
            <em> sanatkâr olmak istiyorum.”</em>
          </blockquote>

          <p>— Baki Yıldırım</p>

        </div>
      </section>


      {/* SON */}
      <section className="timeline-ending">
        <div className="timeline-container">

          <div className="timeline-ending-grid">

            <div>
              <p className="timeline-ending-kicker">
                72 YILLIK BİR HİKÂYE
              </p>

              <h2>
                Zaman sona erdi,
                <span> bıraktığı izler devam ediyor.</span>
              </h2>
            </div>

            <div className="timeline-ending-copy">
              <p>
                Ardında şiirler, fotoğraflar,
                kültürel çalışmalar ve ailesine kalan
                büyük bir arşiv bıraktı.
              </p>

              <Link to="/galeri" className="timeline-next-link">
                Eserlerini Keşfet
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Zaman;