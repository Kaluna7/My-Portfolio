import './Experience.css';


export function Experience({image,title,description}){
    return(
        <>
        <div className='experience-container'>
            <img className='img-exp' src={image} alt="coding"></img>
            <h1 className='title-crt'>{title}</h1>
            <p className='description-crt'>{description}</p>
        </div>
        </>
    )
}