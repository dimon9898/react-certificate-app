import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'

export default function FooterMain({showProfile}) {
    return (
        <div className='footer-container'>
            <button className='account-btn' onClick={showProfile}><FontAwesomeIcon icon={faCircleUser} /></button>
        </div>
    )
}