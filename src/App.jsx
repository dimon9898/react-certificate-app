import CertificateCard from './card';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = async () => {
    try {
      const response = await fetch('https://ds-bot-h5l3.onrender.com/api/certificates');
      const data = await response.json();
      setCertificates(data);
      console.log(data);
    } catch (err) {
      console.error('Ошибка:', err);
    }
    
  };

  useEffect(() => {
  fetchCertificates();
  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.warn("❗ WebApp не найден. Скорее всего, ты открыл сайт в браузере.");
    return; // Не даём приложению упасть
  }

  tg.ready();
  }, []);


  const BuyCertificate = async (certifi) => {
    const tg = window.Telegram.WebApp;
    tg.ready();
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
