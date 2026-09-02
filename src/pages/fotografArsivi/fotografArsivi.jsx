import React, { useEffect, useState } from "react";
import "./fotografArsivi.css";
import fotografArsiviData from "../../data/fotografArsiviData";

const arsivKayitlari = fotografArsiviData;

const toplamGoruntu = arsivKayitlari.length * 2;

// Türkçe karakterleri aramada sorun çıkarmaması için
const normalizeText = (text = "") => {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
};

const ArchiveVisual = ({ kayit, tur, onOpen }) => {
  const orijinalMi = tur === "orijinal";

  const src = orijinalMi
    ? kayit.orijinal
    : kayit.restore;

  const etiket = orijinalMi
    ? "Orijinal"
    : "Restore Edilmiş";

  const etiketBuyuk = orijinalMi
    ? "ORİJİNAL"
    : "RESTORE EDİLMİŞ";

  return (
    <button
      type="button"
      className={`archive-image ${
        orijinalMi
          ? "archive-original"
          : "archive-restored"
      }`}
      onClick={() => onOpen(src, etiket, kayit)}
    >
      <div className="archive-image-label">
        <span>{etiketBuyuk}</span>
        <i>↗</i>
      </div>

      <div className="archive-image-stage">
        <img
          src={src}
          alt={`${kayit.tarih} tarihli ${
            orijinalMi
              ? "orijinal"
              : "restore edilmiş"
          } arşiv fotoğrafı`}
        />
      </div>
    </button>
  );
};

const FotografArsivi = () => {
  const [lightbox, setLightbox] = useState(null);
  const [arama, setArama] = useState("");

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

  const normalizeArama = normalizeText(arama);

  const filtrelenmisKayitlar = arsivKayitlari.filter((kayit) => {
    if (!normalizeArama) {
      return true;
    }

    return (kayit.etiketler || []).some((etiket) =>
      normalizeText(etiket).includes(normalizeArama)
    );
  });

  const etiketeTikla = (etiket) => {
    setArama(etiket);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
                  <strong>{arsivKayitlari.length}</strong>
                  <span>Kayıt</span>
                </div>

                <div>
                  <strong>{toplamGoruntu}</strong>
                  <span>Görüntü</span>
                </div>

                <div>
                  <strong>1939 — 1964</strong>
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


      {/* ARAMA */}

      <section
        style={{
          borderBottom: "1px solid var(--line)",
          padding: "55px 0",
        }}
      >
        <div className="archive-container">

          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >

            <p
              style={{
                marginBottom: "14px",
                fontSize: "0.6rem",
                fontWeight: "600",
                letterSpacing: "0.2em",
                color: "var(--accent)",
              }}
            >
              ARŞİVDE ARA
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid var(--line)",
              }}
            >

              <input
                type="text"
                value={arama}
                onChange={(event) => setArama(event.target.value)}
                placeholder="Bir isim ara..."
                aria-label="Fotoğraf arşivinde ara"
                style={{
                  width: "100%",
                  padding: "18px 0",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "var(--text)",
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                }}
              />

              {arama && (
                <button
                  type="button"
                  onClick={() => setArama("")}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "var(--text-muted)",
                    fontSize: "1.7rem",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  aria-label="Aramayı temizle"
                >
                  ×
                </button>
              )}

            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginTop: "13px",
              }}
            >

              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                }}
              >
                Kişi adına göre arama yapabilirsiniz.
              </span>

              {arama && (
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--accent)",
                  }}
                >
                  {filtrelenmisKayitlar.length} kayıt bulundu
                </span>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* FOTOĞRAFLAR */}

      <section className="archive-collection">

        <div className="archive-container">

          {filtrelenmisKayitlar.length > 0 ? (

            filtrelenmisKayitlar.map((kayit, index) => (

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

                    <h2>
                      {kayit.baslik}
                    </h2>

                  </div>

                  <time>
                    {kayit.tarih}
                  </time>

                </header>


                <div className="archive-pair">

                  <ArchiveVisual
                    kayit={kayit}
                    tur="orijinal"
                    onOpen={gorselAc}
                  />

                  <div className="archive-pair-divider">
                    <span></span>
                    <i>→</i>
                    <span></span>
                  </div>

                  <ArchiveVisual
                    kayit={kayit}
                    tur="restore"
                    onOpen={gorselAc}
                  />

                </div>


                {/* ETİKETLER */}

                {kayit.etiketler &&
                  kayit.etiketler.length > 0 && (

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "24px",
                        paddingTop: "20px",
                        borderTop: "1px solid var(--line)",
                      }}
                    >

                      <span
                        style={{
                          marginRight: "8px",
                          fontSize: "0.55rem",
                          fontWeight: "600",
                          letterSpacing: "0.17em",
                          color: "var(--text-muted)",
                        }}
                      >
                        ETİKETLER
                      </span>

                      {kayit.etiketler.map((etiket) => (

                        <button
                          type="button"
                          key={etiket}
                          onClick={() => etiketeTikla(etiket)}
                          style={{
                            padding: "8px 14px",
                            border:
                              "1px solid rgba(180, 154, 106, 0.3)",
                            background:
                              normalizeText(arama) ===
                              normalizeText(etiket)
                                ? "rgba(180, 154, 106, 0.14)"
                                : "transparent",
                            color: "var(--accent)",
                            fontSize: "0.7rem",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {etiket}
                        </button>

                      ))}

                    </div>

                  )}


                <footer className="archive-record-footer">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                    {" / "}
                    {String(filtrelenmisKayitlar.length).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p>
                    Orijinal arşiv görüntüsü ve restore edilmiş
                    dijital çalışma.
                  </p>

                </footer>

              </article>

            ))

          ) : (

            <div
              style={{
                padding: "120px 0",
                textAlign: "center",
              }}
            >

              <p
                style={{
                  marginBottom: "15px",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                }}
              >
                ARAMA SONUCU
              </p>

              <h2
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  fontWeight: "500",
                  color: "var(--text)",
                }}
              >
                Eşleşen fotoğraf bulunamadı.
              </h2>

              <button
                type="button"
                onClick={() => setArama("")}
                style={{
                  marginTop: "30px",
                  padding: "12px 22px",
                  border: "1px solid var(--line)",
                  background: "transparent",
                  color: "var(--accent)",
                  cursor: "pointer",
                }}
              >
                Tüm arşivi göster
              </button>

            </div>

          )}

        </div>

      </section>


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

                  <span>
                    E-POSTA
                  </span>

                  <strong>
                    atahanfrkn@gmail.com
                  </strong>

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
              <span>
                {" "}
                hatıralar yaşamaya devam eder.
              </span>
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
          role="dialog"
          aria-modal="true"
          aria-label="Arşiv görseli önizleme"
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

              <span>
                {lightbox.etiket}
              </span>

              <time>
                {lightbox.tarih}
              </time>

            </div>


            <img
              src={lightbox.src}
              alt={`${lightbox.tarih} arşiv görseli`}
            />


            <div className="archive-lightbox-caption">

              <p>
                {lightbox.baslik}
              </p>

              <span>
                ESC ile kapatabilirsiniz
              </span>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default FotografArsivi;