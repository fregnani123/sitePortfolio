import '../components/body.css';
import Header from '../components/header';
import fabianoIMG from '../assets/img/fotoComFundo.png';
import git from '../assets/img/git.png'
import linkedin from '../assets/img/logotipo-do-linkedin.png'
import whatsap from '../assets/img/whatsapp.png'


function body() {

    return (
        <div className='main-container'>
            <h1 className='logo'>Fabiano Fregnani</h1>
            <Header />
            <div className='divBodyPartOne'></div><div className='containerPerfil'><img className='fabianoImg' src={fabianoIMG} /></div><div className='divBodyPartTwo'><section className='sectionNome'><h1 className='nome'>Fabiano Fregnani</h1><p className='subTitulo'>Full-Stack Developer</p><button className='CV'>Download CV</button></section> <section ><ul className='midiaSocial'><li><img className='git' src={git}/></li><li><img className='linkedin' src={linkedin}/></li> <li><img className='whatsap' src={whatsap} alt="" /></li></ul></section></div>
        </div>
    )
}

export default body