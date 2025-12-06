import './App.css'

export default function PurchasesCard({ purchases }) {
    return (
        <div className='certificate-card-container'>
            {purchases.map(item => (
                <div className='purchases-card-box'>
                    <h1>ФИО: {item.fullname}</h1>
                    <h3>Услуга: {item.certificate.title}</h3>
                    <p>ID сертификата: {item.code}</p>
                </div>
            ))}
        </div>
    )
}