import { useEffect, useState } from "react"

export default function FormCertificate({ selectedCert, onCloseBtn, showSuccess}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [isBuyLoader, setIsBuyLoader] = useState(false);
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onCloseBtn();
        }, 400);
    };


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsBuyLoader(true);
        const fullData = {
            certificate: selectedCert,
            form: formData
        }

        if (window.Telegram && window.Telegram.WebApp) {
            setTimeout(() => {
                setIsBuyLoader(false);
            }, 1000);
            window.Telegram.WebApp.MainButton.show();
            window.Telegram.WebApp.sendData(JSON.stringify(fullData));
            window.Telegram.WebApp.MainButton.hide();
            window.Telegram.WebApp.close();
        };

        console.log(fullData);
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
        
        setTimeout(() => {
            setIsBuyLoader(false);
        }, 1000);

        e.target.reset();
        showSuccess();

        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => {
                onCloseBtn();
            }, 400);
        }, 1000);
    };

    return (
        <div className={`FormContainer ${isOpen ? 'open': ''}`}>
            <form className="Form" onSubmit={handleOnSubmit}>
                <div className="close-div">
                    <button type="button" className="close-btn" onClick={handleClose}>x</button>
                </div>
                <h1>Данные получателя</h1>
                <label>
                    ФИО:
                </label>
                <input 
                    type="text"
                    className="form-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    placeholder="Иванов Иван Иванович"
                    required
                />
                <h1>Ваши данные</h1>
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
                    placeholder="ivanov.ivan@example.com"
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
                    placeholder="+7"
                    required
                />
                <p className="p-selected">| Подарочный сертификат: "{selectedCert.title}"</p>
                <button type="submit" className="form-btn">
                    {isBuyLoader ? (
                        <div className="buy-loader"></div>
                    ) : (`Оплатить ${selectedCert.price}₽`)}
                </button>

            </form>
        </div>
    )
}