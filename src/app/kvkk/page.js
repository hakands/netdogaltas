"use client";
import Link from 'next/link';

export default function KvkkPage() {
  // Senin hazırladığın orijinal dosya isimlerine göre güncellenmiş tam liste
  const documents = [
    { id: 1, title: 'Çalışan Adaylarına İlişkin Aydınlatma Metni', dosya: 'calisan-adaylarina-iliskin-olarak-kisisel-verilerin-korunmasi-hakkinda.pdf' },
    { id: 2, title: 'Çalışanlara İlişkin Aydınlatma Metni', dosya: 'calisanlara-iliskin-olarak-kisisel-verilerin-korunmasi-hakkinda.pdf' },
    { id: 3, title: 'Kişisel Veri Saklama, Silme ve İmha Politikası', dosya: 'kisisel-veri-saklama-silme-ve-imha-politikasi.pdf' },
    { id: 4, title: 'Kişisel Verilerin İşlenmesi Aydınlatma Metni', dosya: 'kisisel-verilerin-islenmesi-aydinlatma-metni.pdf' },
    { id: 5, title: 'KVK Bilgilendirme ve Onay Metni', dosya: 'kisisel-verilerin-korunmasi-hakkinda-bilgilendirme-ve-onay.pdf' },
    { id: 6, title: 'Özel Nitelikli Kişisel Veri Politikası', dosya: 'ozel-nitelikli-kisisel-verilerin-korunmasi-ve-islenmesi-politikasi.pdf' },
    { id: 7, title: 'Veri İhlali Müdahale Planı', dosya: 'veri-ihlali-mudahele-plani.pdf' },
    { id: 8, title: 'Ziyaretçilere İlişkin Aydınlatma Metni', dosya: 'ziyaretcilere-iliskin-olarak-kisisel-verilerin-korunmasi-hakkinda-aydınlatma-metni.pdf' },
    { id: 9, title: 'Kamera Kayıtlarına İlişkin Aydınlatma Metni', dosya: 'kamera-kayitlarina-iliskin-kvkk-aydinlatma-metni.pdf' },
    { id: 10, title: 'Çerez Politikası', dosya: 'cerez-politikasi.pdf' },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Üst Menü / Navbar */}
      <nav className="navbar navbar-light bg-white py-3 border-bottom shadow-sm sticky-top">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold tracking-widest text-decoration-none text-dark" style={{ letterSpacing: '2px' }}>
            NET DOĞALTAŞ
          </Link>
          <Link href="/" className="btn btn-sm btn-outline-dark rounded-0 px-3 py-2 text-uppercase small">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </nav>

      {/* Ana İçerik Alanı */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 bg-white p-4 p-md-5 border border-secondary-subtle shadow-sm rounded-1">
            
            <div className="text-center mb-5">
              <h1 className="fs-3 fw-light text-uppercase tracking-wider mb-2">Hukuki Metinler ve Politikalar</h1>
              <h2 className="fs-6 text-muted fw-light text-uppercase tracking-wide">6698 Sayılı KVKK Uyarınca Aydınlatma Metinleri</h2>
              <div className="mx-auto bg-dark mt-3" style={{ width: '60px', height: '1px' }}></div>
            </div>
            
            <p className="text-muted small mb-4 text-center px-lg-5">
              NET DOĞALTAŞ olarak, hukuki şeffaflık ve kişisel verilerin güvenliği ilkelerimiz doğrultusunda, veri sahiplerini bilgilendirmek amacıyla yürürlükte olan tüm politika ve aydınlatma metinlerimizi aşağıda bilgilerinize sunarız.
            </p>
            
            {/* Dokümanların Kurumsal Listesi */}
            <div className="row g-3 mt-2">
              {documents.map((doc) => (
                <div className="col-md-6" key={doc.id}>
                  <div className="p-3 border border-secondary-subtle bg-light d-flex align-items-center justify-content-between rounded-0 transition-all shadow-hover h-100">
                    <div className="d-flex align-items-center pe-2">
                      <i className="bi bi-file-earmark-pdf text-danger fs-4 me-3"></i>
                      <span className="fw-light text-dark small">{doc.title}</span>
                    </div>
                    <a 
                      href={`/kvkk-dosyalari/${doc.dosya}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-dark rounded-0 text-uppercase small shrink-0"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}
                    >
                      <i className="bi bi-eye me-1"></i> İncele
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* İletişim Notu */}
            <div className="mt-5 pt-4 border-top text-center">
              <p className="small text-muted mb-1">Kanun kapsamındaki haklarınızla ilgili tüm taleplerinizi ve başvurularınızı veri sorumlusuna iletebilirsiniz.</p>
              <p className="small fw-bold text-dark">İletişim: info@netdogaltas.com.tr</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}