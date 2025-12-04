import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faCircleInfo, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function ProfileCard({userInfo, isAccount, hideProfile}) {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const tg = window?.Telegram?.WebApp;
        tg?.ready();
        setUser(tg?.initDataUnsafe?.user || null);
    }, []);

    return (
        <div className={`ProfilContainer ${isAccount ? 'open_profile' : ''}`}>
            <div className="profile-box">
                <div className="header-top">
                    <div className='profile-img-box'>
                        <div className="profile-user-img"></div>
                    </div>
                    <div className="profile-user-info">
                        <p>ID: <code>{user?.id}</code></p>
                        <p>Имя: <code>{user?.first_name}</code></p>
                    </div>
                    <button className='profile-close-btn' onClick={hideProfile}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>
                <div className="profile-box-center">
                    <button className='box-center-item'>
                        <FontAwesomeIcon icon={faCartFlatbed} className='fa-icon'/>
                        <a href="*">Мои покупки</a>
                        <FontAwesomeIcon icon={faAnglesRight} className='fa-right-icon'/>
                    </button>
                    <button className='box-center-item'>
                        <FontAwesomeIcon icon={faCircleInfo} className='fa-icon'/>
                        <a href="*">Информация</a>
                        <FontAwesomeIcon icon={faAnglesRight} className='fa-right-icon'/>
                    </button>
                </div>
            </div>
        </div>
    )
}