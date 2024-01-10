import '../components/body.css';
import Header from '../components/header';
import fabianoIMG from '../assets/img/fotoComFundo.png';
import git from '../assets/img/git.png'
import linkedin from '../assets/img/logotipo-do-linkedin.png'
import whatsap from '../assets/img/whatsapp.png'
import { useState } from 'react';


function Body() {
    const [active, setClaroEscuro] = useState(false);
    const [colorDiv, setColorDiv] = useState(false);
    const [corBody, setCorBoby] = useState(false);
    const [corHead, setCorHead] = useState(false);

    const toggleCor = () => {
        setClaroEscuro(!active);
        setCorBoby(!corBody);
        setColorDiv(!colorDiv);
        setCorHead(!corHead);
    }
    
    return (
        <div className='main-container'>
            <div className={corBody ? 'body-Container' : 'body-ContainerEscura'}>
                <div className='divHeader'><h1 className='logo'>Fabiano Fregnani</h1>
                    <Header {...{ toggleCor, active, colorDiv, corBody, corHead }} /></div> 
                <div className='divBody'>
                    <img className='fabianoImg' src={fabianoIMG} />
                    <section className='perfil'>
                        <p className='hello'>Hello, I'm </p>
                        <h1 className='nome'>Fabiano Fregnani</h1>
                        <p className='subTitulo'>Full-Stack Developer</p>
                        <button className='CV'>Download CV</button>
                        <ul className='midiaSocial'>
                            <li><img className='git' src={git} /></li>
                            <li><img className='linkedin' src={linkedin} /></li>
                            <li><img className='whatsap' src={whatsap} alt="" /></li>
                        </ul></section>
                        </div>     
                   </div>
            </div>
      
    )
}

export default Body;
