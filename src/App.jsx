import CertificateCard from './card';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/certificates')
    const data = await response.json()
    setCertificates(data);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const BuyCertificate = async (certifi) => {
    const tg = window.Telegram.WebApp();
    tg.sendData(JSON.stringify(certifi));
  };



  return (
    <div className='App'>
      <nav className='app_navbar'>DS BARBERSHOP</nav>
      <h1 className='app_h1'>Подарочные сертификаты</h1>
      <div className='Certifi_div'>
        {certificates.map(cert => (
          <CertificateCard 
            key={cert.id}
            certifi={cert}
            buyCertificate={BuyCertificate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
