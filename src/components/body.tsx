import '../components/body.css';
import Header from '../components/header';
import fabianoIMG from '../assets/img/fabiano.png';
import lua from '../assets/img/lua.png';
import git from '../assets/img/git.png'
import linkedin from '../assets/img/logotipo-do-linkedin.png'
import whatsap from '../assets/img/whatsapp.png';
import arvore from '../assets/img/arvore.png';
import arvoreNoite from '../assets/img/arvoreNoite.png';
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
                <div className='divHeader'><h1 className='logo'>Fabiano Fregnani</h1>
                    <Header {...{ toggleCor, active }} /></div> 
                <div className='divBody'>
                    <img className={active ? 'fabianoActive' : 'fabianoImg' } src={fabianoIMG}/>
                    <img className={active ? 'luaActive' : 'lua'} src={lua}/>
                    <section className='perfil'>
                        <p className={active ? 'helloActive':'hello'}>Hello, I'm </p>
                        <h1 className={active ? 'nomeActive' : 'nome'}>Fabiano Fregnani</h1>
                        <p className={active ? 'subtituloActive' : 'subtitulo'}>Full-Stack Developer</p>
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
