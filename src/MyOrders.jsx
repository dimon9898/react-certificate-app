import { useEffect, useState } from 'react';
import './App.css'
import PurchasesCard from './PurchasesPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function MyOrdersPage({ OpenOrders }) {

    const [isOpenOrders, setIsOpenOrders] = useState(false);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetchPurchases();
        const timer = setTimeout(() => {
            setIsOpenOrders(true);
        }, 50);
        return () => clearTimeout(timer);
    }, [])

    const fetchPurchases = async () => {
        const response = await fetch('https://ds-bot-h5l3.onrender.com/api/mypurchases', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json();
        setPurchases(data);
    }

    const hideOrderPage = () => {
        setIsOpenOrders(false);
        setTimeout(() => {
            OpenOrders();
        }, 50);
           
    };


    return (
        <div className={`my-orders-container ${isOpenOrders ? 'my-orders-open' : '' }`}>
            <button className='orders-back-btn' onClick={hideOrderPage}><FontAwesomeIcon icon={faChevronLeft} /> назад</button>
            {purchases.length > 0 ? (
                <PurchasesCard purchases={purchases}/>
            ) : (
                <div>У вас нет покупок</div>
            )}
        </div>
    );
};