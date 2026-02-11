import React, { useEffect, useState } from "react";
import "./main.css";
import anaFoto from "../../ilkfoto.JPG";

const Main = () => {
  const siirler = [
    { baslik: "BABAYA SİTEM", icerik: `Yayladan getirdin Çukurova'ya\nAnamın yağını erittin baba\nGetirmez olaydın bizi buraya\nYazıda yabanda sürüttün baba...` },
    { baslik: "GÜLSÜN BAYRAMDA", icerik: `Ağlayan gözlerle mutlu olunmaz\nGülmeyen yüzünü güldür bayramda\nSıkıntı içinde kutlu olunmaz\nNeşeyi sevinci bildir bayramda...` },
    { baslik: "ADANA'YA ÖZGÜ", icerik: `Gülek Boğazı'nda Toros Dağı'nda\nTarihi anlatır dilin Adana\nPortakal bahçesi bostan bağında\nBir başka kokuyor gülün Adana...` },
    { baslik: "GEL", icerik: `İnsan sevgisiyle dolup taşarken\nBana da gel diyor Yüce Mevlâna\nHakk'a giden yolu bir bir aşarken\nBana da gel diyor Yüce Mevlâna...` },
    { baslik: "KAPADOKYA DESTANI", icerik: `Nevşehir'e bağlı şirin Ürgüp'te\nAnadolu sensin sen Kapadokya\nMahsende yıllanan şaraplı küpte\nAnadolu sensin sen Kapadokya...` },
    { baslik: "GİRDİ GİZLİCE", icerik: `Ne kadar tatlıydı, ne kadar hoştu\nGönlüm mutluluğa erdi gizlice\nSevgisi gönlümde çağladı coştu\nHer gece rüyama girdi gizlice...` },
    { baslik: "DARENDE", icerik: `Al yanak kayısı, şirin dutuyla\nŞifa kaynağının yolu Darende\nTasavvuf müziği, gudüm, uduyla\nUlamalar şehri ulu Darende...` },
    { baslik: "ATA SEVGİSİ", icerik: `Yas tutarken neşe doldum\nAtatürk'ün sevgisinde\nSağlık, huzur, güven buldum\nVatanımın çizgisinde...` },
    { baslik: "ANNE", icerik: `Meşâkkâtle doğurmuştun\nAk sütünü kattın anne\nCanı canla yoğurmuştun\nMutluluğu tattın anne...` },
    { baslik: "GURBET TRENİ", icerik: `Nice sevenleri özünden ettin\nUzayan yolların kısalmadı mı?\nNice anaları gözünden ettin\nUzayan yolların kısalmadı mı?...` },
    { baslik: "GÖRENLER VAR MI?", icerik: `Bu şehrin üstünü bulut kaplamış\nYarimi yitirdim görenler var mi?\nSanki birileri onu saklamış\nYarimi yitirdim görenler var mi?...` },
    { baslik: "BARIŞMAM GAYRI", icerik: `Bana oyun ettin kandım sevgine\nNe halin varsa gör karışmam gayrı\nİnanman artık o yalan övgüne\nUzatma elini barışmam gayrı...` },
    { baslik: "KIRLAR KURUMUŞ", icerik: `Yaz gelince kırda çiçek bulunmaz\nBahardan kalanlar toz olur gayrı\nNazlı yar gelmezse dallar salınmaz\nYapraklar dökülür güz olur gayrı...` },
    { baslik: "ÜÇGEN OVA", icerik: `Çevresinde Iğdır, Ardahan, Ağrı\nBir üçgen içinde kurmuşlar Kars'ı\nYıllar yılı yanmış, kavrulmuş bağrı\nÇeşitli kavimler vurmuşlar Kars'ı...` },
    { baslik: "TOZLAR GİBİ", icerik: `Köşelerden gizli baktım\nAklım fikrim sana taktım\nHer gün damla damla aktım\nGün altında buzlar gibi...` },
  ];

  const [randomSiir, setRandomSiir] = useState(siirler[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    const rastgeleIndex = Math.floor(Math.random() * siirler.length);
    setRandomSiir(siirler[rastgeleIndex]);
  }, []);

  return (
    <div className="tüm">
      <div className="bg-decoration"></div>
      
      <div className={`hero ${isLoaded ? 'loaded' : ''}`}>
        {/* Fotoğraf Alanı */}
        <div className="resim-konteyner">
          <h1 className="baslik-ana">Âşık Baki Yıldırım</h1>
          <div className="altyazi-cizgi"></div>
          <div className="foto-wrapper">
            <img src={anaFoto} alt="Baki Yıldırım" className="foto" />
          </div>
          <p className="foto-alt-yazi">
            "Âşık Baki Yıldırım, şiirleriyle Anadolu'nun sesini yansıtan bir halk şairidir."
          </p>
        </div>

        {/* Tanıtım Alanı */}
        <div className="tanitim">
          <p className="tanitim-metin">
            Şiirleri Türkiye'de birçok gazete ve antolojide yayımlanmış,
            halk edebiyatı geleneğini yaşatan önemli ozanlarımızdandır.
          </p>

          <div className="bilgi-kartlar">
            <div className="kart kart-1">
              <h3>Şiire Başlangıç</h3>
              <p>1961 yılında Âşık Veysel'i dinlemesi, onun şiir yolculuğunda dönüm noktası olmuştur.</p>
            </div>

            <div className="kart kart-2">
              <h3>Kültürel Katkıları</h3>
              <p>1999 yılında Ceyhan Şairler ve Ozanlar Derneği'nin kurucu üyesi olmuştur.</p>
            </div>

            <div className="kart kart-siir">
              <h3 className="siir-baslik">{randomSiir.baslik}</h3>
              <pre className="siir">{randomSiir.icerik}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;