import CertificateCard from './card';
import './App.css';
import { useEffect, useState } from 'react';
import LoadingPage from './loading';
import FormCertificate from './form';

function App() {
  const [certificates, setCertificates] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isButtonState, setIsButtonState] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);


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
  setIsLoader(true);
  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.warn("❗ WebApp не найден. Скорее всего, ты открыл сайт в браузере.");
    return; // Не даём приложению упасть
  }

  tg.ready();
  setTimeout(() => {
    setIsLoader(false);
  }, 1000);
  }, []);



  const BuyCertificate = async (certifi) => {
    setSelectedCertificate(certifi);
    setTimeout(() => {
      setIsButtonState(true);
  }, 1000)};    

  if (isLoader) {
    return <LoadingPage />;
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
      {isButtonState && (
        <FormCertificate 
          selectedCert={selectedCertificate}
        />
      )}
    </div>
  );
}

export default App;
