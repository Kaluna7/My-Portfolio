import html from'../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import jquery from '../../assets/jquery.png';
import btp from'../../assets/bootstrap.png';
import node from'../../assets/node.png';
import react from'../../assets/react.png';
import postgres from'../../assets/postgres.png';
import './ExpLogo.css';


export function ExpLogo(){
    return(
        <>
        <h1 className='title'>Experience With</h1>
        <div className="exp-logo">
            <img src={html} alt="logo" className='logo-size' />
            <img src={css} alt="logo" className='logo-size' />
            <img src={js} alt="logo" className='logo-size' />
            <img src={jquery} alt="logo" className='logo-size' />
            <img src={btp} alt="logo" className='logo-size' />
            <img src={node} alt="logo" className='logo-size' />
            <img src={react} alt="logo" className='logo-size' />
            <img src={postgres} alt="logo" className='logo-size' />
        </div>
        </>
    );
}