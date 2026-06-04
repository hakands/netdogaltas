import Link from 'next/link';

export default function KvkkPage() {
  return (
    <div className="bg-light min-vh-100">
      {/* Üst Menü */}
      <nav className="navbar navbar-light bg-white py-3 border-bottom shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold tracking-widest text-decoration-none text-dark" style={{ letterSpacing: '2px' }}>
            NET DOĞALTAŞ
          </Link>
          <Link href="/" className="btn btn-sm btn-outline-dark rounded-0">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </nav>

      {/* KVKK İçerik */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 bg-white p-5 border border-secondary-subtle shadow-sm">
            <h1 className="text-center mb-4 fs-3 fw-light text-uppercase tracking-wider">Kişisel Verilerin Korunması Kanunu</h1>
            <h2 className="text-center mb-5 fs-5 text-muted fw-light">Aydınlatma Metni</h2>
            
            <p><strong>Veri Sorumlusu:</strong> NET DOĞALTAŞ</p>
            <p>NET DOĞALTAŞ olarak, web sitemizi ziyaret eden kullanıcılarımızın ve bizimle iletişime geçen müşterilerimizin kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verilerinizin işlenme amaçları, hukuki sebepleri ve haklarınız hakkında sizleri bilgilendirmek isteriz.</p>
            
            <h3 className="fs-5 mt-4 fw-light">1. İşlenen Kişisel Verileriniz</h3>
            <p className="text-muted small">Web sitemiz üzerindeki WhatsApp iletişim butonları aracılığıyla bizimle paylaştığınız; ad-soyad, telefon numarası ve mesaj içeriğiniz işlenmektedir.</p>
            
            <h3 className="fs-5 mt-4 fw-light">2. İşlenme Amacı</h3>
            <p className="text-muted small">Toplanan verileriniz, talep ettiğiniz traverten bilgi ve tekliflerini sunabilmek amacıyla işlenmektedir.</p>
            
            <h3 className="fs-5 mt-4 fw-light">3. İletişim</h3>
            <p className="text-muted small">Talepleriniz için <strong>info@netdogaltas.com</strong> adresi üzerinden bizimle iletişime geçebilirsiniz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}