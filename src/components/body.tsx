import '../components/body.css';
import Header from '../components/header';
import fabianoIMG from '../assets/img/fabiano.png';
import lua from '../assets/img/lua.png';
import git from '../assets/img/git.png'
import linkedin from '../assets/img/logotipo-do-linkedin.png'
import whatsap from '../assets/img/whatsapp.png';
import arvore from '../assets/img/arvore1.png';
import arvoreNoite from '../assets/img/arvoreNoite1.png';
import outdoor from '../assets/img/outdoor.png';
import robo from '../assets/img/robo2.gif';
import gato from '../assets/img/gato.gif';
// import grama from '../assets/img/grama.png';
// import nave from '../assets/img/space.gif'
import passaros from '../assets/img/passaros.gif'
import { useState } from 'react';

function Body() {
    const [active, setClaroEscuro] = useState(false);
    const toggleCor = () => {
        setClaroEscuro(!active);
    }
    
    return (
        <div className='main-container'>
            <div className={active ? 'body-ContainerEscura' : 'body-Container'}>
                <img className={active ? 'passaros1':'passarosActive1'} src={passaros} alt="" />
                <img className={active ? 'passaros': 'passarosActive2'} src={passaros} alt="" />
                <img className={active ? 'passaros' : 'passarosActive3'}src={passaros} alt="" />
                <img className={active ? 'arvore' : 'arvoreActive'} src={arvore} alt=""/>
                <img className={active ? 'arvoreNoiteActive' : 'arvoreNoite'}  src={arvoreNoite} alt="" />
                <img className={active ? 'outdoorNoiteActive' : 'outdoorNoite'}  src={outdoor} alt="" />
                <img className={active ? 'gatoActive' : 'gatoNoiteActive'}  src={gato} alt="" />
                <div className='divHeader'><h1 className='logo'>Fabiano Fregnani</h1>
                    <Header {...{ toggleCor, active }} /></div> 
                <div className='divBody'>
                    
                    <img className={active ? 'luaActive' : 'lua'} src={lua} />
                    
                    <section className={active ? 'perfilActive' : 'perfil'}>
                        <img className={active ? 'fabianoActive' : 'fabianoImg'} src={fabianoIMG} />
                        <img className={active ? 'roboActive' : 'robo'} src={robo} />
                        <p className='hello'>Hello, I'm </p>
                        <h1 className='nome'>Fabiano Fregnani</h1>
                        <p className='subtitulo'>Full-Stack Developer</p>
                        {/* <button className='CV'>Download CV</button> */}
                        <ul className='midiaSocial'>
                            <li><img className='git' src={git} /></li>
                            <li><img className='linkedin' src={linkedin} /></li>
                            <li><img className='whatsap' src={whatsap} alt="" /></li>
                        </ul></section>
                    
                </div>  
                <div className='divGrama'></div>
                   </div>
            </div>
      
    )
}

export default Body;
