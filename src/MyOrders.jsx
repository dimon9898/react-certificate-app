import { useEffect, useState } from 'react';
import './App.css'
import PurchasesCard from './PurchasesPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function MyOrdersPage({ OpenOrders }) {

    const [isOpenOrders, setIsOpenOrders] = useState(false);
    const [purchases, setPurchases] = useState([]);
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setIsLoader(true);
        fetchPurchases();
        const timer = setTimeout(() => {
            setIsOpenOrders(true);
        }, 50);
        setTimeout(() => {
            setIsLoader(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [])

    const fetchPurchases = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/mypurchases', {
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
            {isLoader && (
                <div className="purchase-loader-container">
                    <div className="purchase-loader-box"></div>
                </div>
            )}
            <button className='orders-back-btn' onClick={hideOrderPage}><FontAwesomeIcon icon={faChevronLeft} /> назад</button>
            {purchases.length > 0 ? (
                <PurchasesCard purchases={purchases}/>
            ) : (
                <div>У вас нет покупок</div>
            )}
        </div>
    );
};