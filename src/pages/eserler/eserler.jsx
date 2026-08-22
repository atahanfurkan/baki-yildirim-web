import React, { useEffect, useState } from "react";
import "./eserler.css";

const Eserler = () => {
  const [seciliFoto, setSeciliFoto] = useState(null);

  const fotograflar = Array.from({ length: 8 }, (_, i) => i + 1);

  const kitaplar = [
    {
      id: 1,
      isim: "Karanlıktan Aydınlığa",
      dosya: "karanlıktanAydınlıga.jpg",
      varMi: true,
    },
    {
      id: 2,
      isim: "Sevginin Gözyaşları",
      dosya: "sevgininGozyaslari.jpg",
      varMi: true,
    },
    {
      id: 3,
      isim: "Tan Yeri Ağarırken",
      dosya: "tanYeriAgarirken.jpg",
      varMi: true,
    },
    {
      id: 4,
      isim: "Sevginin Yüceliği",
      dosya: null,
      varMi: false,
    },
  ];

  useEffect(() => {
    if (!seciliFoto) return;

    const eskiOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const escKapat = (event) => {
      if (event.key === "Escape") {
        setSeciliFoto(null);
      }
    };

    window.addEventListener("keydown", escKapat);

    return () => {
      document.body.style.overflow = eskiOverflow;
      window.removeEventListener("keydown", escKapat);
    };
  }, [seciliFoto]);

  return (
    <div className="works-page">

      {/* HERO */}
      <section className="works-hero">
        <div className="works-container">

          <div className="works-hero-meta">
            <span>04</span>
            <p>DİJİTAL ARŞİV</p>
          </div>

          <div className="works-hero-grid">

            <div className="works-title-area">
              <h1>
                Söz, görüntü
                <span> ve hatıra.</span>
              </h1>
            </div>

            <div className="works-intro">
              <p>
                Âşık Baki Yıldırım'ın sesinden şiirler,
                yayımlanmış kitapları ve kişisel arşivinden
                günümüze ulaşan kareler.
              </p>

              <div className="works-stats">
                <div>
                  <strong>02</strong>
                  <span>Video</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Kitap</span>
                </div>

                <div>
                  <strong>08</strong>
                  <span>Arşiv Karesi</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* VİDEOLAR */}
      <section className="works-section works-video-section">
        <div className="works-container">

          <div className="works-section-heading">

            <div className="works-section-index">
              <span>01</span>
            </div>

            <div>
              <p className="works-kicker">
                OZANIN SESİNDEN
              </p>

              <h2>
                Şiirin yalnızca yazılan değil,
                <span> söylenen hâli.</span>
              </h2>
            </div>

          </div>

          <div className="works-video-grid">

            <article className="works-video-card">
              <div className="works-video-frame">
                <iframe
                  src="https://www.dailymotion.com/embed/video/xejqyf"
                  allowFullScreen
                  title="Şiir Dinletisi I"
                ></iframe>
              </div>

              <div className="works-video-info">
                <span>01</span>

                <div>
                  <p>VİDEO ARŞİVİ</p>
                  <h3>Şiir Dinletisi — I</h3>
                </div>
              </div>
            </article>


            <article className="works-video-card">
              <div className="works-video-frame">
                <iframe
                  src="https://www.dailymotion.com/embed/video/xkk147"
                  allowFullScreen
                  title="Şiir Dinletisi II"
                ></iframe>
              </div>

              <div className="works-video-info">
                <span>02</span>

                <div>
                  <p>VİDEO ARŞİVİ</p>
                  <h3>Şiir Dinletisi — II</h3>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>


      {/* KİTAPLAR */}
      <section className="works-section works-books-section">
        <div className="works-container">

          <div className="works-section-heading">

            <div className="works-section-index">
              <span>02</span>
            </div>

            <div>
              <p className="works-kicker">
                YAYIMLANMIŞ ESERLER
              </p>

              <h2>
                Dizelerden
                <span> kitaplara.</span>
              </h2>
            </div>

          </div>


          <div className="works-books-grid">

            {kitaplar.map((kitap, index) => (
              <article
                className="works-book"
                key={kitap.id}
              >

                <div
                  className={`works-book-cover ${
                    !kitap.varMi
                      ? "works-book-cover-empty"
                      : ""
                  }`}
                  onClick={() => {
                    if (kitap.varMi) {
                      setSeciliFoto(`/books/${kitap.dosya}`);
                    }
                  }}
                >

                  {kitap.varMi ? (
                    <>
                      <img
                        src={`/books/${kitap.dosya}`}
                        alt={kitap.isim}
                      />

                      <div className="works-book-overlay">
                        <span>Kapak görselini büyüt</span>
                        <i>↗</i>
                      </div>
                    </>
                  ) : (
                    <div className="works-book-placeholder">
                      <span>04</span>

                      <p>{kitap.isim}</p>

                      <small>
                        Kapak görseli arşivde bulunmuyor
                      </small>
                    </div>
                  )}

                </div>

                <div className="works-book-info">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p>ŞİİR KİTABI</p>
                    <h3>{kitap.isim}</h3>
                  </div>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* FOTOĞRAFLAR */}
      <section className="works-section works-archive-section">
        <div className="works-container">

          <div className="works-section-heading">

            <div className="works-section-index">
              <span>03</span>
            </div>

            <div>
              <p className="works-kicker">
                KİŞİSEL ARŞİV
              </p>

              <h2>
                Arşivden
                <span> kareler.</span>
              </h2>

              <p className="works-section-description">
                Baki Yıldırım'ın yaşamına ve çalışmalarına
                ait mevcut dijital arşivden seçilmiş görüntüler.
              </p>
            </div>

          </div>


          <div className="works-photo-grid">

            {fotograflar.map((num, index) => (
              <button
                type="button"
                key={num}
                className={`works-photo-item works-photo-${num}`}
                onClick={() =>
                  setSeciliFoto(`/images/${num}.jpg`)
                }
                aria-label={`Arşiv görseli ${num} büyüt`}
              >
                <img
                  src={`/images/${num}.jpg`}
                  alt={`Baki Yıldırım arşiv görseli ${num}`}
                />

                <span className="works-photo-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="works-photo-hover">
                  <span>Görüntüle</span>
                  <i>↗</i>
                </div>
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* SON BÖLÜM */}
      <section className="works-ending">
        <div className="works-container">

          <p className="works-kicker">
            YAŞAYAN BİR ARŞİV
          </p>

          <div className="works-ending-grid">

            <h2>
              Her eser,
              <span> bir ömrün başka bir izi.</span>
            </h2>

            <p>
              Bu dijital arşiv, Baki Yıldırım'ın
              geride bıraktığı kültürel mirası bir arada
              yaşatmak ve gelecek kuşaklara aktarmak
              amacıyla korunmaktadır.
            </p>

          </div>

        </div>
      </section>


      {/* LIGHTBOX */}
      {seciliFoto && (
        <div
          className="works-lightbox"
          onClick={() => setSeciliFoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Görsel önizleme"
        >
          <button
            type="button"
            className="works-lightbox-close"
            onClick={() => setSeciliFoto(null)}
            aria-label="Görseli kapat"
          >
            ×
          </button>

          <div
            className="works-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={seciliFoto}
              alt="Büyütülmüş arşiv görseli"
            />

            <p>
              Kapatmak için görselin dışına veya ESC tuşuna basın.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Eserler;