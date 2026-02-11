import React from "react";
import "./hakkında.css";

const Hakkinda = () => {
  return (
    <div className="page-container">
      <div className="hakkinda-dis-kutu">
        {/* Başlık Bölümü */}
        <header className="hakkinda-ust-alan">
          <h1 className="ana-baslik">Âşık Baki Yıldırım</h1>
          <p className="alt-slogan">"Ben çapa işçisi değil, sanatkâr olmak istiyorum."</p>
        </header>

        {/* Ana İçerik Alanı */}
        <section className="icerik-bolumu">
          <div className="metin-blogu">
            <h2>Sanata Adanan Bir İrade</h2>
            <p>
              1945 yılında Ceyhan’da tek odalı bir gecekonduda başlayan bu serüven, 
              Anadolu'nun kadim ozanlık geleneğiyle modern sanatın birleştiği bir ömre dönüştü. 
              Henüz 11 yaşında babası Şevket Usta'yı kaybetmesiyle hayatın tüm yükünü 
              omuzlayan Baki Yıldırım; kunduracı çıraklığından sinemada gazoz satıcılığına 
              kadar her işte çalışmış, ancak içindeki sanat aşkını asla söndürmemiştir.
            </p>
            <p>
              Gençlik yıllarında ağabeyinin çok daha yüksek kazançlı olan pamuk çapası işçiliği 
              teklifini, <strong>"Ben çapa işçisi değil, sanatkâr olmak istiyorum"</strong> 
              diyerek reddetmiş ve hayatını sanatın inceliklerine adamıştır.
            </p>
          </div>

          <div className="metin-blogu">
            <h2>Âşık Veysel'in İzinde</h2>
            <p>
              1961 yılında bir kahvehanede <strong>Âşık Veysel</strong> ile yollarının kesişmesi, Baki Yıldırım'ın 
              ruhundaki ozanlık ateşini alevlendirmiştir. Büyük ustanın masanın üzerindeki vakur duruşu 
              ve dökülen her mısra, Baki Yıldırım'ın kalemine rehberlik etmiş; onu Anadolu'nun 
              saf, milli ve samimi sesine kopmaz bağlarla bağlamıştır.
            </p>
          </div>

          <div className="metin-blogu">
            <h2>Gördüğünü Yazan, Yazdığını Gösteren</h2>
            <p>
              Onu diğer halk ozanlarından ayıran en belirgin yönü, profesyonel fotoğrafçılık kimliğidir. 
              <strong>"Foto Baki"</strong> ve <strong>"Foto Moda"</strong> ile geçen yıllar, onun şiirlerine 
              görsel bir derinlik katmıştır. O, vizörden bakarken hayatın ayrıntılarını yakalamış, 
              bu ayrıntıları mısralarında nakış gibi işlemiştir.
            </p>
          </div>
        </section>

        {/* Sanat Özeti (Kartlar) */}
        <section className="ozet-kartlar-alani">
          <div className="bilgi-karti">
            <span className="kart-etiketi">Edebi Tür</span>
            <hr className="kart-cizgisi" />
            <p>Halk Şiiri & Güzelleme</p>
          </div>
          <div className="bilgi-karti">
            <span className="kart-etiketi">Sanat Dalı</span>
            <hr className="kart-cizgisi" />
            <p>Fotoğrafçılık & Ozanlık</p>
          </div>
          <div className="bilgi-karti">
            <span className="kart-etiketi">Unvan</span>
            <hr className="kart-cizgisi" />
            <p>T.C. Kültür Bakanlığı Halk Ozanı</p>
          </div>
        </section>

        {/* DIŞ BAĞLANTILAR (ARŞİV) */}
        <section className="dis-baglantilar-alani">
          <h3>Arşiv ve Biyografi Kaynakları</h3>
          <div className="link-listesi">
            <a 
              href="https://www.biyografya.com/tr/biographies/baki-yildirim-965e46b5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dis-link"
            >
              Biyografya: Baki Yıldırım Biyografisi <span>↗</span>
            </a>
            <a 
              href="https://blog.milliyet.com.tr/adanali-sair-baki-yildirim-in-ardindan/Blog/?BlogNo=554027" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dis-link"
            >
              Milliyet Blog: Adanalı Şair Baki Yıldırım'ın Ardından <span>↗</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hakkinda;