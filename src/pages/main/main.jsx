import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import anaFoto from "../../ilkfoto.JPG";

const siirler = [
  {
    baslik: "BABAYA SİTEM",
    icerik: `Yayladan getirdin Çukurova'ya
Anamın yağını erittin baba
Getirmez olaydın bizi buraya
Yazıda yabanda sürüttün baba...`,
  },
  {
    baslik: "GÜLSÜN BAYRAMDA",
    icerik: `Ağlayan gözlerle mutlu olunmaz
Gülmeyen yüzünü güldür bayramda
Sıkıntı içinde kutlu olunmaz
Neşeyi sevinci bildir bayramda...`,
  },
  {
    baslik: "ADANA'YA ÖZGÜ",
    icerik: `Gülek Boğazı'nda Toros Dağı'nda
Tarihi anlatır dilin Adana
Portakal bahçesi bostan bağında
Bir başka kokuyor gülün Adana...`,
  },
  {
    baslik: "GEL",
    icerik: `İnsan sevgisiyle dolup taşarken
Bana da gel diyor Yüce Mevlâna
Hakk'a giden yolu bir bir aşarken
Bana da gel diyor Yüce Mevlâna...`,
  },
  {
    baslik: "KAPADOKYA DESTANI",
    icerik: `Nevşehir'e bağlı şirin Ürgüp'te
Anadolu sensin sen Kapadokya
Mahsende yıllanan şaraplı küpte
Anadolu sensin sen Kapadokya...`,
  },
  {
    baslik: "GİRDİ GİZLİCE",
    icerik: `Ne kadar tatlıydı, ne kadar hoştu
Gönlüm mutluluğa erdi gizlice
Sevgisi gönlümde çağladı coştu
Her gece rüyama girdi gizlice...`,
  },
  {
    baslik: "DARENDE",
    icerik: `Al yanak kayısı, şirin dutuyla
Şifa kaynağının yolu Darende
Tasavvuf müziği, gudüm, uduyla
Ulamalar şehri ulu Darende...`,
  },
  {
    baslik: "ATA SEVGİSİ",
    icerik: `Yas tutarken neşe doldum
Atatürk'ün sevgisinde
Sağlık, huzur, güven buldum
Vatanımın çizgisinde...`,
  },
  {
    baslik: "ANNE",
    icerik: `Meşâkkâtle doğurmuştun
Ak sütünü kattın anne
Canı canla yoğurmuştun
Mutluluğu tattın anne...`,
  },
  {
    baslik: "GURBET TRENİ",
    icerik: `Nice sevenleri özünden ettin
Uzayan yolların kısalmadı mı?
Nice anaları gözünden ettin
Uzayan yolların kısalmadı mı?...`,
  },
  {
    baslik: "GÖRENLER VAR MI?",
    icerik: `Bu şehrin üstünü bulut kaplamış
Yarimi yitirdim görenler var mı?
Sanki birileri onu saklamış
Yarimi yitirdim görenler var mı?...`,
  },
  {
    baslik: "BARIŞMAM GAYRI",
    icerik: `Bana oyun ettin kandım sevgine
Ne halin varsa gör karışmam gayrı
İnanmam artık o yalan övgüne
Uzatma elini barışmam gayrı...`,
  },
  {
    baslik: "KIRLAR KURUMUŞ",
    icerik: `Yaz gelince kırda çiçek bulunmaz
Bahardan kalanlar toz olur gayrı
Nazlı yar gelmezse dallar salınmaz
Yapraklar dökülür güz olur gayrı...`,
  },
  {
    baslik: "ÜÇGEN OVA",
    icerik: `Çevresinde Iğdır, Ardahan, Ağrı
Bir üçgen içinde kurmuşlar Kars'ı
Yıllar yılı yanmış, kavrulmuş bağrı
Çeşitli kavimler vurmuşlar Kars'ı...`,
  },
  {
    baslik: "TOZLAR GİBİ",
    icerik: `Köşelerden gizli baktım
Aklım fikrim sana taktım
Her gün damla damla aktım
Gün altında buzlar gibi...`,
  },
];

const Main = () => {
  const [randomSiir, setRandomSiir] = useState(
    () => siirler[Math.floor(Math.random() * siirler.length)]
  );

  const yeniSiirGetir = () => {
    let yeniSiir = randomSiir;

    while (
      yeniSiir.baslik === randomSiir.baslik &&
      siirler.length > 1
    ) {
      yeniSiir =
        siirler[Math.floor(Math.random() * siirler.length)];
    }

    setRandomSiir(yeniSiir);
  };

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-inner">

          <div className="hero-copy">
            <p className="hero-eyebrow">
              HALK OZANI · ŞAİR · FOTOĞRAFÇI
            </p>

            <h1 className="hero-title">
              Âşık
              <span>Baki Yıldırım</span>
            </h1>

            <div className="hero-years">
              <span>1945</span>
              <i></i>
              <span>2017</span>
            </div>

            <p className="hero-description">
              Şiirleri, fotoğrafları ve kültürel çalışmalarıyla
              Anadolu'nun sesini yaşatan bir ömrün dijital arşivi.
            </p>

            <div className="hero-actions">
              <Link to="/hakkinda" className="primary-link">
                Hayatını Keşfet
                <span>→</span>
              </Link>

              <Link to="/galeri" className="secondary-link">
                Eserlerini Gör
              </Link>
            </div>
          </div>

          <figure className="hero-image-area">
            <div className="hero-image-frame">
              <img
                src={anaFoto}
                alt="Âşık Baki Yıldırım"
                className="hero-image"
              />

              <div className="image-number">
                01
              </div>
            </div>

            <figcaption>
              Baki Yıldırım'ın kişisel arşivinden
            </figcaption>
          </figure>

        </div>

        <a href="#hikaye" className="scroll-cue">
          <span>Keşfet</span>
          <i></i>
        </a>
      </section>


      {/* HAYATINDAN */}
      <section className="story-section" id="hikaye">
        <div className="section-inner">

          <header className="section-heading">
            <span className="section-number">01</span>

            <div>
              <p className="section-kicker">
                BİR ÖMÜR
              </p>

              <h2>
                Çukurova'dan
                <span> Anadolu'ya uzanan bir hikâye.</span>
              </h2>
            </div>
          </header>

          <div className="story-content">

            <div className="story-lead">
              <p>
                Şiirleri Türkiye'de birçok gazete ve antolojide
                yayımlanan Baki Yıldırım, halk edebiyatı
                geleneğini yaşamı boyunca sürdürdü.
              </p>
            </div>

            <div className="story-details">
              <p>
                1961 yılında Âşık Veysel'i dinlemesi,
                şiir yolculuğunun önemli dönüm noktalarından
                biri oldu.
              </p>

              <p>
                1999 yılında Ceyhan Şairler ve Ozanlar
                Derneği'nin kurucu üyeleri arasında yer aldı.
              </p>

              <Link to="/hakkinda" className="text-link">
                Yaşam öyküsünün tamamı
                <span>↗</span>
              </Link>
            </div>

          </div>

          <div className="milestones">

            <div className="milestone">
              <strong>1945</strong>
              <span>Doğumu</span>
            </div>

            <div className="milestone">
              <strong>1961</strong>
              <span>Şiir yolculuğunda dönüm noktası</span>
            </div>

            <div className="milestone">
              <strong>1999</strong>
              <span>Ceyhan Şairler ve Ozanlar Derneği</span>
            </div>

            <div className="milestone">
              <strong>2017</strong>
              <span>Ardında kalan miras</span>
            </div>

          </div>

        </div>
      </section>


      {/* ŞİİR */}
      <section className="poem-section">
        <div className="poem-inner">

          <div className="poem-meta">
            <span className="section-number">02</span>

            <p className="section-kicker">
              DİZELERİNDEN
            </p>

            <p className="poem-note">
              Arşivde yer alan şiirlerinden rastgele bir kesit.
            </p>

            <button
              type="button"
              className="poem-refresh"
              onClick={yeniSiirGetir}
            >
              Başka bir şiir
              <span>↻</span>
            </button>
          </div>

          <div className="poem-content">
            <span className="quote-mark">“</span>

            <h2>{randomSiir.baslik}</h2>

            <pre>{randomSiir.icerik}</pre>

            <Link to="/galeri" className="text-link">
              Eserlerini keşfet
              <span>↗</span>
            </Link>
          </div>

        </div>
      </section>


      {/* KEŞİF */}
      <section className="explore-section">
        <div className="section-inner">

          <header className="explore-heading">
            <p className="section-kicker">
              ARŞİVİ KEŞFET
            </p>

            <h2>
              Bir ömrün izlerini
              <span> adım adım takip edin.</span>
            </h2>
          </header>

          <div className="explore-links">

            <Link
              to="/hakkinda"
              className="explore-item"
            >
              <span className="explore-index">
                01
              </span>

              <div>
                <h3>Hayatı</h3>

                <p>
                  Çocukluğundan sanat yaşamına uzanan
                  biyografisi.
                </p>
              </div>

              <span className="explore-arrow">
                ↗
              </span>
            </Link>


            <Link
              to="/zaman-cizelgesi"
              className="explore-item"
            >
              <span className="explore-index">
                02
              </span>

              <div>
                <h3>Zaman Çizelgesi</h3>

                <p>
                  Yaşamındaki önemli anları kronolojik
                  olarak inceleyin.
                </p>
              </div>

              <span className="explore-arrow">
                ↗
              </span>
            </Link>


            <Link
              to="/galeri"
              className="explore-item"
            >
              <span className="explore-index">
                03
              </span>

              <div>
                <h3>Eserleri</h3>

                <p>
                  Şiirleri, kitapları ve arşivde yer alan
                  çalışmalarını keşfedin.
                </p>
              </div>

              <span className="explore-arrow">
                ↗
              </span>
            </Link>


            <Link
              to="/fotograf-arsivi"
              className="explore-item"
            >
              <span className="explore-index">
                04
              </span>

              <div>
                <h3>Fotoğraf Arşivi</h3>

                <p>
                  Aile albümünden günümüze ulaşan
                  orijinal ve restore edilmiş fotoğrafları
                  karşılaştırın.
                </p>
              </div>

              <span className="explore-arrow">
                ↗
              </span>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Main;