import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
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
                    <p>ID: <code>{user?.id}</code></p>
                    <p>Имя: <code>{user?.first_name}</code></p>
                    <button className='profile-close-btn' onClick={hideProfile}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>
            </div>
        </div>
    )
}