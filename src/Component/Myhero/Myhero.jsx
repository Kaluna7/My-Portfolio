import './Myhero.css';




export default function Myhero({image,title,coltitle,description}){
    return(
      <div className='hero-container'>
        <img className='myImage' src={image} alt="coding"></img>
        <h1 className='hero-title'>{title}</h1>
        <h1 className='hero-coltitle'>{coltitle}</h1>
        <p className='hero-des'>{description}</p>
        </div>
       
    );
  }