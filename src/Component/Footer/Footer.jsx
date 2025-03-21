import './Footer.css';

export function Footer({title,description,email,images}){
    return(
        <div className='footer-container'>
            <h1 className='footer-title'>{title}</h1>
            <p className='footer-description'>{description}</p>
            <a href={`mailto:${email}`} className="footer-email">{email}</a>
            <div className="footer-icons">
                {images.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                        <img className="footer-img" src={item.src} alt={`logo-${index}`} />
                    </a>
                ))}
            </div>
        </div>
    )
}
