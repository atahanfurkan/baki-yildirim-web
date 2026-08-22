import React, { useState } from "react";
import "./iletisim.css";
import { veritabani } from "../../firebase";
import {
  collection,
  addDoc
} from "firebase/firestore";

const Iletisim = () => {
  const [adSoyad, setAdSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");

  const [yukleniyor, setYukleniyor] =
    useState(false);

  const [basarili, setBasarili] =
    useState(false);

  const [hataMesaji, setHataMesaji] =
    useState("");

  const formuGonder = async (e) => {
    e.preventDefault();

    setYukleniyor(true);
    setBasarili(false);
    setHataMesaji("");

    try {
      await addDoc(
        collection(
          veritabani,
          "gelenAnilar"
        ),
        {
          adSoyad: adSoyad,
          email: email,
          mesaj: mesaj,
          tarih: new Date(),
        }
      );

      setAdSoyad("");
      setEmail("");
      setMesaj("");

      setBasarili(true);

      setTimeout(() => {
        setBasarili(false);
      }, 5000);

    } catch (hata) {
      console.error(
        "Firebase Hatası:",
        hata
      );

      setHataMesaji(
        "Mesajınız şu anda iletilemedi. Lütfen tekrar deneyin."
      );

    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container">

          <div className="contact-hero-meta">
            <span>06</span>

            <p>
              İLETİŞİM & ARŞİVE KATKI
            </p>
          </div>


          <div className="contact-hero-grid">

            <div className="contact-title-area">
              <h1>
                Hatıralar
                <span> kaybolmasın.</span>
              </h1>
            </div>


            <div className="contact-intro">
              <p>
                Âşık Baki Yıldırım ile ilgili bir anınız,
                fotoğrafınız, belgeniz veya paylaşmak
                istediğiniz bir hikâyeniz varsa dijital
                arşive katkıda bulunabilirsiniz.
              </p>

              <div className="contact-intro-line">
                <span>AİLE ARŞİVİ</span>

                <i></i>

                <span>
                  CEYHAN · ADANA
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ANA İLETİŞİM */}
      <section className="contact-main">
        <div className="contact-container">

          <div className="contact-layout">

            {/* SOL */}
            <aside className="contact-side">

              <div className="contact-side-number">
                01
              </div>

              <p className="contact-kicker">
                ANI PAYLAŞIN
              </p>

              <h2>
                Sizin de anlatacak
                <span>
                  {" "}
                  bir hikâyeniz var mı?
                </span>
              </h2>

              <p className="contact-side-description">
                Gönderilen mesajlar aile arşivinin
                geliştirilmesi amacıyla
                değerlendirilmektedir.
              </p>


              <div className="contact-direct">

                <span className="contact-direct-label">
                  BELGE & FOTOĞRAF İÇİN
                </span>

                <a href="mailto:atahanfrkn@gmail.com">
                  atahanfrkn@gmail.com
                  <span>↗</span>
                </a>

                <p>
                  Fotoğraf, video veya belge gibi dosyaları
                  doğrudan e-posta üzerinden
                  gönderebilirsiniz.
                </p>

              </div>

            </aside>


            {/* FORM */}
            <div className="contact-form-area">

              <div className="contact-form-top">
                <span>02</span>

                <p>
                  MESAJ FORMU
                </p>
              </div>


              <form
                className="contact-form"
                onSubmit={formuGonder}
              >

                <div className="contact-field">

                  <label htmlFor="adSoyad">
                    Adınız ve Soyadınız
                  </label>

                  <input
                    id="adSoyad"
                    type="text"
                    placeholder="Ad Soyad"
                    value={adSoyad}
                    onChange={(e) =>
                      setAdSoyad(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    E-Posta Adresiniz
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>


                <div className="contact-field contact-message-field">

                  <label htmlFor="mesaj">
                    Mesajınız / Anınız
                  </label>

                  <textarea
                    id="mesaj"
                    rows="7"
                    placeholder="Paylaşmak istediğiniz anıyı buraya yazabilirsiniz..."
                    value={mesaj}
                    onChange={(e) =>
                      setMesaj(
                        e.target.value
                      )
                    }
                    required
                  ></textarea>

                </div>


                {hataMesaji && (
                  <div className="contact-error">
                    <span>!</span>

                    <p>
                      {hataMesaji}
                    </p>
                  </div>
                )}


                <div className="contact-form-bottom">

                  <p>
                    Gönder butonuna bastığınızda
                    mesajınız arşiv yöneticisine
                    iletilecektir.
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={yukleniyor}
                  >
                    <span>
                      {yukleniyor
                        ? "Gönderiliyor..."
                        : "Mesajı Gönder"}
                    </span>

                    <i>
                      {yukleniyor
                        ? "···"
                        : "→"}
                    </i>
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* ARŞİVE KATKI */}
      <section className="contact-archive">
        <div className="contact-container">

          <div className="contact-archive-grid">

            <div>
              <p className="contact-kicker">
                ARŞİVE KATKI
              </p>

              <h2>
                Bir fotoğraf,
                <span>
                  {" "}
                  bazen yılların hikâyesini taşır.
                </span>
              </h2>
            </div>


            <div className="contact-archive-copy">

              <p>
                Aile albümlerinde, eski kutularda veya
                kişisel arşivlerde bulunan Baki Yıldırım'a
                ait fotoğraf, video ve belgeler bu dijital
                hafızanın önemli bir parçasıdır.
              </p>

              <a href="mailto:atahanfrkn@gmail.com">
                Dosya Gönder
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* BAŞARI */}
      {basarili && (
        <div
          className="contact-notification"
          role="status"
          aria-live="polite"
        >

          <div className="contact-notification-icon">
            ✓
          </div>

          <div>
            <span>
              MESAJ İLETİLDİ
            </span>

            <p>
              Katkınız için teşekkür ederiz.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setBasarili(false)
            }
            aria-label="Bildirimi kapat"
          >
            ×
          </button>

        </div>
      )}

    </div>
  );
};

export default Iletisim;