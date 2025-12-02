import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function ProfileCard({userInfo, isAccount, hideProfile}) {
    return (
        <div className={`ProfilContainer ${isAccount ? 'open_profile' : ''}`}>
            <div className="profile-box">
                <div className="header-top">
                    <p>ID: {userInfo.id}</p>
                    <p>Имя: {userInfo.lastname}</p>
                    <p>Тел:</p>
                    <button className='profile-close-btn' onClick={hideProfile}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>
            </div>
        </div>
    )
}