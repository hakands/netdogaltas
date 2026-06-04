import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';

export const metadata = {
  title: 'NET DOĞALTAŞ | Premium Traverten Çözümleri',
  description: 'Doğanın zarafetini mekanlarınıza taşıyoruz.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}