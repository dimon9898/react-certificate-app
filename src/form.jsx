import { useState } from "react"

export default function FormCertificate({ selectedCert }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const fullData = {
            certificate: selectedCert,
            form: formData
        }

        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.MainButton.showProgress();
            window.Telegram.WebApp.sendData(JSON.stringify(fullData));
            window.Telegram.WebApp.MainButton.hideProgress();
            window.Telegram.WebApp.close();
        };
    };

    return (
        <div className="FormContainer">
            <form className="Form" onSubmit={handleOnSubmit}>
                <label>
                    ФИО получателя:
                </label>
                <input 
                    type="text"
                    className="form-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    required
                />
                <label>
                    Email:
                </label>
                <input 
                    type="email" 
                    className="form-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    required
                />
                <label>
                    Номер телефона:
                </label>
                <input 
                    type="number"
                    className="form-input" 
                    id='phone'
                    name="phone"
                    value={formData.phone}
                    onChange={handleOnChange}
                    required
                />
                <button type="submit" className="form-btn">
                    Отправить
                </button>

            </form>
        </div>
    )
}