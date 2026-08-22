import React, { useEffect, useState } from "react";
import "./fotografArsivi.css";

const arsivKayitlari = [
  {
    id: 1,
    tarih: "1939.04",
    baslik: "Alaaddin Dede & Meryem Nene",
    orijinal:
      "/fotograf-arsivi/1939.04 AlaaddinDedeMeryemNene__.JPG",
    restore:
      "/fotograf-arsivi/1939.04 AlaaddinDedeMeryemNene_ (3).png",
  },
  {
    id: 2,
    tarih: "1941.03",
    baslik: "Şevket Yıldırım",
    orijinal: "/fotograf-arsivi/1941.03.jpg",
    restore: "/fotograf-arsivi/1941.03 (2).jpeg",
  },
  {
    id: 3,
    tarih: "1941.04",
    baslik: "Ahmet Yüzgeç",
    orijinal: "/fotograf-arsivi/1941.04 .jpg",
    restore: "/fotograf-arsivi/1941.04 (2).jpeg",
  },
  {
    id: 4,
    tarih: "1941.04",
    baslik: "Şevket Yıldırım",
    orijinal: "/fotograf-arsivi/1941.04 IMG_1648.JPG",
    restore: "/fotograf-arsivi/1941.04 IMG_1648 (2).jpeg",
  },
  {
    id: 5,
    tarih: "1947.03",
    baslik: "Şevket Yıldırım",
    orijinal:
      "/fotograf-arsivi/1947.03 tarama0189 (2).jpg",
    restore: "/fotograf-arsivi/1947.03 (2).jpeg",
  },
  {
    id: 6,
    tarih: "1947.07.24",
    baslik: "Aile Arşivi",
    orijinal: "/fotograf-arsivi/1947.07.24 .jpg",
    restore:
      "/fotograf-arsivi/1947.07.24 - Kopya-_ (3)_.png",
  },
  {
    id: 7,
    tarih: "1955.02",
    baslik: "Şevket Yıldırım",
    orijinal:
      "/fotograf-arsivi/1955.02 Adsızdddddd.jpg",
    restore:
      "/fotograf-arsivi/1955.02 Adsızdddddd (3).jpeg",
  },
  {
    id: 8,
    tarih: "1956.06",
    baslik: "Aile Arşivi",
    orijinal: "/fotograf-arsivi/1956.06 IMG_9682.JPG",
    restore:
      "/fotograf-arsivi/1956.06 IMG_9682 (2)_.png",
  },
  {
    id: 9,
    tarih: "1957.05",
    baslik: "Aile Arşivi",
    orijinal: "/fotograf-arsivi/1957.05 _ __.jpg",
    restore: "/fotograf-arsivi/1957.05 _ _ (3)_.png",
  },
  {
    id: 10,
    tarih: "1957.09",
    baslik: "Müzeyyen Yıldırım",
    orijinal: "/fotograf-arsivi/1957.09 .jpg",
    restore: "/fotograf-arsivi/1957.09 (3).png",
  },
];

const FotografArsivi = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;

    const eskiOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const escKapat = (event) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", escKapat);

    return () => {
      document.body.style.overflow = eskiOverflow;
      window.removeEventListener("keydown", escKapat);
    };
  }, [lightbox]);

  const gorselAc = (src, etiket, kayit) => {
    setLightbox({
      src,
      etiket,
      tarih: kayit.tarih,
      baslik: kayit.baslik,
    });
  };

  return (
    <div className="archive-page">

      <section className="archive-hero">
        <div className="archive-container">

          <div className="archive-hero-meta">
            <span>05</span>
            <p>FOTOĞRAF ARŞİVİ</p>
          </div>

          <div className="archive-hero-grid">

            <div className="archive-title-area">
              <h1>
                Zamandan kalan
                <span> görüntüler.</span>
              </h1>
            </div>

            <div className="archive-intro">
              <p>
                Aile arşivinden günümüze ulaşan fotoğrafların
                orijinal halleri ve restore edilmiş dijital
                yorumları bir arada.
              </p>

              <div className="archive-stats">

                <div>
                  <strong>10</strong>
                  <span>Fotoğraf</span>
                </div>

                <div>
                  <strong>20</strong>
                  <span>Görüntü</span>
                </div>

                <div>
                  <strong>1939 — 1957</strong>
                  <span>Zaman Aralığı</span>
                </div>

              </div>
            </div>

          </div>

          <div className="archive-hero-note">
            <span>ORİJİNAL</span>
            <i></i>

            <p>
              Her kayıt, aynı hatıranın iki farklı
              görüntüsünü yan yana sunar.
            </p>

            <i></i>
            <span>RESTORE</span>
          </div>

        </div>
      </section>


      <section className="archive-collection">
        <div className="archive-container">

          {arsivKayitlari.map((kayit, index) => (
            <article
              className="archive-record"
              key={`${kayit.tarih}-${kayit.id}`}
            >

              <header className="archive-record-header">

                <span className="archive-record-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="archive-record-title">
                  <p>AİLE ARŞİVİ</p>
                  <h2>{kayit.baslik}</h2>
                </div>

                <time>{kayit.tarih}</time>

              </header>


              <div className="archive-pair">

                <button
                  type="button"
                  className="archive-image archive-original"
                  onClick={() =>
                    gorselAc(
                      kayit.orijinal,
                      "Orijinal",
                      kayit
                    )
                  }
                >
                  <div className="archive-image-label">
                    <span>ORİJİNAL</span>
                    <i>↗</i>
                  </div>

                  <div className="archive-image-stage">
                    <img
                      src={kayit.orijinal}
                      alt={`${kayit.tarih} tarihli orijinal arşiv fotoğrafı`}
                    />
                  </div>
                </button>


                <div className="archive-pair-divider">
                  <span></span>
                  <i>→</i>
                  <span></span>
                </div>


                <button
                  type="button"
                  className="archive-image archive-restored"
                  onClick={() =>
                    gorselAc(
                      kayit.restore,
                      "Restore Edilmiş",
                      kayit
                    )
                  }
                >
                  <div className="archive-image-label">
                    <span>RESTORE EDİLMİŞ</span>
                    <i>↗</i>
                  </div>

                  <div className="archive-image-stage">
                    <img
                      src={kayit.restore}
                      alt={`${kayit.tarih} tarihli restore edilmiş arşiv fotoğrafı`}
                    />
                  </div>
                </button>

              </div>


              <footer className="archive-record-footer">

                <span>
                  {String(index + 1).padStart(2, "0")}
                  {" / "}
                  {String(arsivKayitlari.length).padStart(2, "0")}
                </span>

                <p>
                  Orijinal arşiv görüntüsü ve restore edilmiş
                  dijital çalışma.
                </p>

              </footer>

            </article>
          ))}

        </div>
      </section>


      {/* ARŞİVE KATKI */}
      <section className="archive-contribution">
        <div className="archive-container">

          <div className="archive-contribution-grid">

            <div>
              <p className="archive-contribution-kicker">
                ARŞİVE KATKI
              </p>

              <h2>
                Sizde de bir
                <span> hatıra olabilir.</span>
              </h2>
            </div>

            <div className="archive-contribution-content">

              <p>
                Arşive katkı sağlamak için fotoğraf, belge,
                video veya anılarınızı paylaşabilirsiniz.
              </p>

              <a href="mailto:atahanfrkn@gmail.com">
                <div>
                  <span>E-POSTA</span>
                  <strong>atahanfrkn@gmail.com</strong>
                </div>

                <i>↗</i>
              </a>

            </div>

          </div>

        </div>
      </section>


      <section className="archive-ending">
        <div className="archive-container">

          <p className="archive-ending-kicker">
            AİLE HAFIZASI
          </p>

          <div className="archive-ending-grid">

            <h2>
              Fotoğraflar eskir,
              <span> hatıralar yaşamaya devam eder.</span>
            </h2>

            <p>
              Bu bölüm, aile albümünde korunan görüntülerin
              dijital ortamda bir araya getirilmesi ve gelecek
              kuşaklara aktarılması amacıyla hazırlanmıştır.
            </p>

          </div>

        </div>
      </section>


      {lightbox && (
        <div
          className="archive-lightbox"
          onClick={() => setLightbox(null)}
        >

          <button
            type="button"
            className="archive-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Görseli kapat"
          >
            ×
          </button>

          <div
            className="archive-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="archive-lightbox-meta">
              <span>{lightbox.etiket}</span>
              <time>{lightbox.tarih}</time>
            </div>

            <img
              src={lightbox.src}
              alt={`${lightbox.tarih} arşiv görseli`}
            />

            <div className="archive-lightbox-caption">
              <p>{lightbox.baslik}</p>
              <span>ESC ile kapatabilirsiniz</span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default FotografArsivi;