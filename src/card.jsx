import { useState } from 'react';
import './App.css'

export default function CertificateCard({certifi, buyCertificate}) {

    const [isLoader, setIsLoader] = useState(false);


    const handleBuyClick = async () => {
        setIsLoader(true);
        await buyCertificate(certifi);
        setTimeout(() => {
            setIsLoader(false);     
        }, 1000);
    }


    return (
        <div className="Certificate_container">
            <h1>{certifi.title}</h1>
            <h3>{certifi.description}</h3>
            <p>{certifi.price} руб.</p>
            <button className='certificate_btn' onClick={handleBuyClick} disabled={isLoader}>
                {isLoader ? (
                    <div className='loader'></div>
                ): ('Купить')}
            </button>

        </div>
    );
};