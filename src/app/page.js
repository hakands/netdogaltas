"use client";
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('tr');

  const products = [
    {
      id: 1,
      category_tr: 'Klasik Traverten',
      category_en: 'Classic Travertine',
      title_tr: 'Ivory Light Traverten',
      title_en: 'Ivory Light Travertine',
      desc_tr: 'Açık tonları ile mekanlarınıza ferahlık katar.',
      desc_en: 'Adds freshness to your spaces with its light tones.',
      finishes_tr: 'Cilalı, Honlu, Eskitme',
      finishes_en: 'Polished, Honed, Tumbled'
    },
    {
      id: 2,
      category_tr: 'Gümüş Traverten',
      category_en: 'Silver Travertine',
      title_tr: 'Silver Koyu Traverten',
      title_en: 'Silver Dark Travertine',
      desc_tr: 'Modern mimarinin vazgeçilmez gri tonları.',
      desc_en: 'Indispensable gray tones of modern architecture.',
      finishes_tr: 'Honlu, Fırçalı',
      finishes_en: 'Honed, Brushed'
    }
  ];

  return (
    <>
      {/* Üst Menü / Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Net Doğaltaş Logo" height="50" style={{ objectFit: 'contain' }} />
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#urunler">{lang === 'tr' ? 'Ürünlerimiz' : 'Products'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#iletisim">{lang === 'tr' ? 'İletişim' : 'Contact'}</a>
              </li>
              <li className="nav-item ms-lg-3 border-start ps-lg-3 mt-2 mt-lg-0">
                <button onClick={() => setLang('tr')} className={`btn btn-sm me-1 ${lang === 'tr' ? 'btn-dark' : 'btn-outline-dark'}`}>TR</button>
                <button onClick={() => setLang('en')} className={`btn btn-sm ${lang === 'en' ? 'btn-dark' : 'btn-outline-dark'}`}>EN</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* SİNEMATİK TAM EKRAN VİDEO ALANI */}
      {/* calc(100vh - 86px) değeri menü haricindeki tüm ekranı doldurmasını sağlar */}
      <section className="position-relative w-100 p-0 m-0" style={{ height: 'calc(100vh - 86px)', overflow: 'hidden' }}>
        
        <video 
          autoPlay 
          muted 
          playsInline 
          /* loop yok, bitince son karede donacak */
          className="w-100 h-100" 
          style={{ objectFit: 'cover' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Butonu Videonun Alt Orta Kısmına Şık Bir Şekilde Yerleştirdik */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 z-3">
          <a href="#urunler" className="btn btn-light rounded-0 px-5 py-3 text-uppercase small shadow-lg" style={{ letterSpacing: '1px' }}>
            {lang === 'tr' ? 'Koleksiyonu İncele' : 'View Collection'}
          </a>
        </div>
        
      </section>

      {/* Ürünler Vitrini */}
      <section className="container my-5 py-4" id="urunler">
        <div className="text-center mb-5">
          <h2 className="fw-light text-uppercase tracking-wider">
            {lang === 'tr' ? 'Öne Çıkan Ürünler' : 'Featured Products'}
          </h2>
          <div className="mx-auto bg-dark" style={{ width: '50px', height: '1px' }}></div>
        </div>
        
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <span className="badge bg-light text-dark mb-3 p-2 rounded-0 border border-secondary-subtle">
                      {lang === 'tr' ? product.category_tr : product.category_en}
                    </span>
                    <h4 className="card-title fw-light mb-3">
                      {lang === 'tr' ? product.title_tr : product.title_en}
                    </h4>
                    <p className="card-text text-muted small mb-3">
                      {lang === 'tr' ? product.desc_tr : product.desc_en}
                    </p>
                    <p className="small mb-1">
                      <strong>{lang === 'tr' ? 'Yüzey: ' : 'Finishes: '}</strong> 
                      {lang === 'tr' ? product.finishes_tr : product.finishes_en}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a 
                      href={
                        lang === 'tr' 
                          ? `https://wa.me/905XXXXXXXXX?text=Merhaba,%20Net%20Doğaltaş%20sitenizdeki%20'${product.title_tr}'%20ürünü%20hakkında%20bilgi%20almak%20istiyorum.`
                          : `https://wa.me/905XXXXXXXXX?text=Hello,%20I%20would%20like%20to%20get%20information%20about%20the%20'${product.title_en}'%20product%20on%20your%20website.`
                      }
                      className="btn btn-success w-100 rounded-0" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2"></i> 
                      {lang === 'tr' ? 'WhatsApp İle Bilgi Al' : 'Inquire via WhatsApp'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* İletişim & Modern Footer */}
      <footer className="bg-white text-dark pt-5 pb-3 border-top" id="iletisim">
        <div className="container">
          <div className="row g-4">
            
            <div className="col-lg-5 col-md-6">
              <h5 className="fw-bold tracking-wider mb-3">NET DOĞALTAŞ</h5>
              <p className="text-muted small pe-lg-5 mb-3">
                {lang === 'tr' 
                  ? 'Doğanın milyonlarca yılda oluşturduğu zarafeti, en saf haliyle mekanlarınıza taşıyoruz. Yüksek kaliteli traverten çözümleri.' 
                  : 'We bring the elegance created by nature over millions of years to your spaces in its purest form. High-quality travertine solutions.'}
              </p>
              
              <div>
                <a href="/kvkk" className="text-decoration-none text-muted small fw-bold">
                  <i className="bi bi-shield-check me-1"></i> {lang === 'tr' ? 'KVKK Aydınlatma Metni' : 'Privacy Policy (KVKK)'}
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3">{lang === 'tr' ? 'İletişim Bilgileri' : 'Contact Info'}</h6>
              <p className="text-muted small mb-2"><i className="bi bi-geo-alt me-2"></i> Denizli, Türkiye</p>
              <p className="text-muted small mb-2"><i className="bi bi-telephone me-2"></i> +90 (5XX) XXX XX XX</p>
              <p className="text-muted small mb-2"><i className="bi bi-envelope me-2"></i> info@netdogaltas.com</p>
            </div>

            <div className="col-lg-4 col-md-12">
              <h6 className="fw-bold mb-3">{lang === 'tr' ? 'Konumumuz' : 'Our Location'}</h6>
              <div className="ratio ratio-4x3 rounded shadow-sm overflow-hidden" style={{ maxHeight: '150px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1007230720256!2d29.321604299999997!3d37.8345278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c71b051c01be4b%3A0x2e363493630be7a1!2zTmV0IERvxJ9hbHRhxZ8gxLDDpyB2ZSBExLHFnyB0aWMgTHRkIMWedGk!5e0!3m2!1str!2str!4v1780592867253!5m2!1str!2str" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

          </div>
          <hr className="my-4 text-muted" />
          <div className="text-center">
            <p className="small text-muted mb-0">© 2026 NET DOĞALTAŞ. {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}</p>
          </div>
        </div>
      </footer>

      {/* Sağ Altta Sabit WhatsApp Butonu */}
      <a href="https://wa.me/905XXXXXXXXX?text=Merhaba,%20Net%20Doğaltaş%20web%20sitenizden%20ulaşıyorum." 
         className="btn btn-success rounded-circle position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center shadow-lg" 
         style={{ width: '60px', height: '60px', zIndex: 9999 }} target="_blank" rel="noreferrer">
        <i className="bi bi-whatsapp fs-3"></i>
      </a>
    </>
  );
}