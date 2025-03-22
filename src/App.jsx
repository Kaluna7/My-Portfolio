import { Hero } from './Component/Data-Component/Hero.jsx';
import './App.css';
import Myhero from './Component/Myhero/Myhero.jsx';
import BtnDownload from './Component/Myhero/BtnDownload.jsx';
import { Header } from './Component/Myhero/Header.jsx';
import { MainContent } from './Component/Maincontent/MainContent.jsx';
import { Footer } from './Component/Footer/Footer.jsx';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import whatsapp from './assets/whatapp.png';
import instagram from './assets/instagram.png';



function App() {
  const socialLink = [
    { src: linkedin, link: "https://www.linkedin.com/in/your-profile" },
    { src: github, link: "https://github.com/your-profile" },
    { src: whatsapp, link: "https://wa.me/your-number" },
    { src: instagram, link: "https://www.instagram.com/your-profile" }
  ]

  return (
    <>
    <Header />
      <div className="hero-container">
        <Myhero {...Hero[0]}/>
        </div>
        <section className='btn-container'>
            <BtnDownload label="Get in Touch" />
            <BtnDownload label="Download CV" varian="transparent" />
        </section>
        <section className='main-content'>
        <MainContent />
        </section>
        <footer className='footer'>
        <Footer 
                title="Contact" 
                description="I’m always open to new opportunities, collaborations, and exciting discussions about technology. Whether you have a project idea, need a dedicated developer, or just want to exchange thoughts on coding, innovation, and the latest tech trends, I’d love to hear from you!As an aspiring Full-Stack Developer, I am passionate about creating seamless digital experiences and solving real-world problems through code. If you’re looking for someone who values clean code, performance, and efficiency, let’s connect and explore how we can work together."
                email="kaluna12345678910@gmail.com"
                images={socialLink}
            />
        </footer>
    </>
  );
}

export default App;
