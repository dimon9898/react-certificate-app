import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function ProfileCard({userInfo, isAccount, hideProfile}) {
    window?.Telegram?.WebApp?.ready();
    const user = window?.Telegram?.WebApp?.initDataUnsafe?.user;

    return (
        <div className={`ProfilContainer ${isAccount ? 'open_profile' : ''}`}>
            <div className="profile-box">
                <div className="header-top">
                    <p>ID: {user?.id}</p>
                    <p>Имя: {user?.first_name}</p>
                    <p>Тел:</p>
                    <button className='profile-close-btn' onClick={hideProfile}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>
            </div>
        </div>
    )
}