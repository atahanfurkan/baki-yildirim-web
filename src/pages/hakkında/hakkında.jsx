import React from "react";
import { Link } from "react-router-dom";
import "./hakkında.css";

const Hakkinda = () => {
  return (
    <div className="life-page">

      {/* HERO */}
      <section className="life-hero">
        <div className="life-container">

          <div className="life-hero-top">
            <span className="life-page-number">02</span>

            <p className="life-eyebrow">
              HAYATI
            </p>
          </div>

          <div className="life-hero-content">

            <div className="life-title-area">
              <h1>
                Sanata adanmış
                <span> bir ömür.</span>
              </h1>
            </div>

            <div className="life-intro">
              <p className="life-intro-text">
                1945 yılında Ceyhan'da başlayan,
                şiir, fotoğraf ve Anadolu'nun
                ozanlık geleneğiyle şekillenen
                bir yaşam hikâyesi.
              </p>

              <div className="life-mini-info">
                <span>CEYHAN · ADANA</span>
                <span>1945 — 2017</span>
              </div>
            </div>

          </div>

          <div className="life-quote">
            <span className="life-quote-mark">“</span>

            <blockquote>
              Ben çapa işçisi değil,
              <em> sanatkâr olmak istiyorum.</em>
            </blockquote>

            <span className="life-quote-name">
              — Baki Yıldırım
            </span>
          </div>

        </div>
      </section>


      {/* BÖLÜM 1 */}
      <section className="life-chapter">
        <div className="life-container">

          <div className="life-chapter-grid">

            <aside className="chapter-aside">
              <span className="chapter-number">
                01
              </span>

              <span className="chapter-year">
                1945
              </span>
            </aside>

            <article className="chapter-content">

              <p className="chapter-kicker">
                BAŞLANGIÇ
              </p>

              <h2>
                Sanata Adanan
                <span> Bir İrade</span>
              </h2>

              <div className="chapter-text">
                <p>
                  1945 yılında Ceyhan’da tek odalı bir
                  gecekonduda başlayan bu serüven,
                  Anadolu'nun kadim ozanlık geleneğiyle
                  modern sanatın birleştiği bir ömre
                  dönüştü.
                </p>

                <p>
                  Henüz 11 yaşında babası Şevket Usta'yı
                  kaybetmesiyle hayatın tüm yükünü
                  omuzlayan Baki Yıldırım; kunduracı
                  çıraklığından sinemada gazoz
                  satıcılığına kadar her işte çalışmış,
                  ancak içindeki sanat aşkını asla
                  söndürmemiştir.
                </p>

                <p>
                  Gençlik yıllarında ağabeyinin çok daha
                  yüksek kazançlı olan pamuk çapası
                  işçiliği teklifini,
                  <strong>
                    “Ben çapa işçisi değil, sanatkâr
                    olmak istiyorum”
                  </strong>
                  diyerek reddetmiş ve hayatını sanatın
                  inceliklerine adamıştır.
                </p>
              </div>

            </article>

          </div>

        </div>
      </section>


      {/* BÖLÜM 2 */}
      <section className="life-chapter life-chapter-alt">
        <div className="life-container">

          <div className="life-chapter-grid">

            <aside className="chapter-aside">
              <span className="chapter-number">
                02
              </span>

              <span className="chapter-year">
                1961
              </span>
            </aside>

            <article className="chapter-content">

              <p className="chapter-kicker">
                DÖNÜM NOKTASI
              </p>

              <h2>
                Âşık Veysel'in
                <span> İzinde</span>
              </h2>

              <div className="chapter-text chapter-text-large">
                <p>
                  1961 yılında bir kahvehanede
                  <strong> Âşık Veysel</strong> ile
                  yollarının kesişmesi, Baki Yıldırım'ın
                  ruhundaki ozanlık ateşini
                  alevlendirmiştir.
                </p>

                <p>
                  Büyük ustanın masanın üzerindeki vakur
                  duruşu ve dökülen her mısra,
                  Baki Yıldırım'ın kalemine rehberlik
                  etmiş; onu Anadolu'nun saf, milli ve
                  samimi sesine kopmaz bağlarla
                  bağlamıştır.
                </p>
              </div>

            </article>

          </div>

        </div>
      </section>


      {/* BÜYÜK ALINTI */}
      <section className="life-statement">
        <div className="life-container">

          <div className="statement-line"></div>

          <p>
            Şiir onun kelimeleri,
            <span> fotoğraf ise bakışıydı.</span>
          </p>

          <div className="statement-line"></div>

        </div>
      </section>


      {/* BÖLÜM 3 */}
      <section className="life-chapter">
        <div className="life-container">

          <div className="life-chapter-grid">

            <aside className="chapter-aside">
              <span className="chapter-number">
                03
              </span>

              <span className="chapter-year">
                FOTOĞRAF
              </span>
            </aside>

            <article className="chapter-content">

              <p className="chapter-kicker">
                İKİ SANAT, TEK HAFIZA
              </p>

              <h2>
                Gördüğünü Yazan,
                <span> Yazdığını Gösteren</span>
              </h2>

              <div className="chapter-text">
                <p>
                  Onu diğer halk ozanlarından ayıran en
                  belirgin yönü, profesyonel
                  fotoğrafçılık kimliğidir.
                </p>

                <p>
                  <strong>“Foto Baki”</strong> ve
                  <strong> “Foto Moda”</strong> ile geçen
                  yıllar, onun şiirlerine görsel bir
                  derinlik katmıştır.
                </p>

                <p>
                  O, vizörden bakarken hayatın
                  ayrıntılarını yakalamış, bu ayrıntıları
                  mısralarında nakış gibi işlemiştir.
                </p>
              </div>

            </article>

          </div>

        </div>
      </section>


      {/* ÖZET */}
      <section className="life-facts">
        <div className="life-container">

          <div className="facts-header">
            <p className="chapter-kicker">
              ARŞİV NOTLARI
            </p>

            <h2>
              Bir bakışta
              <span> Baki Yıldırım</span>
            </h2>
          </div>

          <div className="facts-grid">

            <div className="fact-item">
              <span className="fact-index">
                01
              </span>

              <span className="fact-label">
                Edebi Tür
              </span>

              <strong>
                Halk Şiiri
                <br />
                & Güzelleme
              </strong>
            </div>

            <div className="fact-item">
              <span className="fact-index">
                02
              </span>

              <span className="fact-label">
                Sanat Dalı
              </span>

              <strong>
                Fotoğrafçılık
                <br />
                & Ozanlık
              </strong>
            </div>

            <div className="fact-item">
              <span className="fact-index">
                03
              </span>

              <span className="fact-label">
                Unvan
              </span>

              <strong>
                T.C. Kültür Bakanlığı
                <br />
                Halk Ozanı
              </strong>
            </div>

          </div>

        </div>
      </section>


      {/* KAYNAKLAR */}
      <section className="life-sources">
        <div className="life-container">

          <div className="sources-layout">

            <div className="sources-title">
              <span className="life-page-number">
                04
              </span>

              <div>
                <p className="chapter-kicker">
                  KAYNAKLAR
                </p>

                <h2>
                  Arşiv ve
                  <span> biyografi.</span>
                </h2>
              </div>
            </div>


            <div className="sources-list">

              <a
                href="https://www.biyografya.com/tr/biographies/baki-yildirim-965e46b5"
                target="_blank"
                rel="noopener noreferrer"
                className="source-item"
              >
                <div>
                  <span>01</span>

                  <p>
                    Biyografya
                  </p>
                </div>

                <strong>
                  Baki Yıldırım Biyografisi
                </strong>

                <span className="source-arrow">
                  ↗
                </span>
              </a>


              <a
                href="https://blog.milliyet.com.tr/adanali-sair-baki-yildirim-in-ardindan/Blog/?BlogNo=554027"
                target="_blank"
                rel="noopener noreferrer"
                className="source-item"
              >
                <div>
                  <span>02</span>

                  <p>
                    Milliyet Blog
                  </p>
                </div>

                <strong>
                  Adanalı Şair Baki Yıldırım'ın Ardından
                </strong>

                <span className="source-arrow">
                  ↗
                </span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* SONRAKİ SAYFA */}
      <section className="life-next">
        <div className="life-container">

          <p className="chapter-kicker">
            HİKÂYE DEVAM EDİYOR
          </p>

          <Link
            to="/zaman-cizelgesi"
            className="life-next-link"
          >
            <span>
              Yaşamındaki önemli
              <br />
              anları keşfet
            </span>

            <strong>
              Zaman Çizelgesi
            </strong>

            <i>→</i>
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Hakkinda;