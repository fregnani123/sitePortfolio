import { useState } from 'react';
import '../components/body.css';
import bg from '../assets/img/cityDia.png'
import FabianoFoto from '../assets/img/fotoComFundo.png'
import bgNoite from '../assets/img/cityNoite.png'
import luaNoite from '../assets/img/lua.png';
// import arvore from '../assets/img/arvore3.png';
// import arvoreNoite from '../assets/img/arvore3.png';
import outdoor from '../assets/img/outdorBg.png';
import passaros from '../assets/img/passaros.gif';
import gato from '../assets/img/gato.gif';
import bancoDia from '../assets/img/bancoPraça.png';
import Space from '../assets/img/spaceAlien.gif';
import imgReact from '../assets/img/react.png';
import imgTs from '../assets/img/typescript.png';
import js from '../assets/img/script-java.png';
import mongodb from '../assets/img/mongodb.png';
import node from '../assets/img/node-js.png';
import html5 from '../assets/img/html-5.png';
import css3 from '../assets/img/css-3.png';



import Header from './header';

function body() {
    
    const [active, setActive] = useState(false);
    // const [interagir, setInteragir] = useState(false);

    function toggleCor() {
            setActive(!active)
    }

    // function toggleInteragir(){
    //         setInteragir(!interagir)
    // }

    return (<body><div className='Header'><Header {...{ toggleCor, active }} /></div><div className={active ? 'container' : 'containerNoite'}> <div className='outdoor-about'><p className='rolling-text'>
        Olá! Sou um entusiasta da programação em busca de oportunidades como desenvolvedor para aplicar e expandir meus conhecimentos adquiridos ao longo de dois anos de estudo na area. No 3º semestre do curso Tecnólogo em Análise e Desenvolvimento de Sistemas, tenho dedicado meu tempo ao desenvolvimento de projetos práticos e desafiadores.
        Se sua empresa está em busca de um desenvolvedor júnior apaixonado por programação, comprometido com o aprendizado contínuo e pronto para enfrentar desafios, ficaria grato pela oportunidade de fazer parte da sua equipe. Estou animado para discutir como posso agregar valor ao seu time.<br/><img className='photoPerfil' src={FabianoFoto} alt="" /><br />Fᴀʙɪᴀɴᴏ Fʀᴇɢɴᴀɴɪ</p></div>
        <div className='divImg'>
            <ul className='logoOutdoor'>
                <li className='liOutdoor'>🅵<span className='my-letterOutdoor'>A</span><span className='my-letterOutdoor'>B</span>🅸<span className='my-letterOutdoor'>A</span>🅽<span className='my-letterOutdoor'>O</span> 🅵🆁🅴🅶🅽<span className='my-letterOutdoor'>A</span>🅽🅸 <br />Fᴜʟʟ Sᴛᴀᴄᴋ Dᴇᴠᴇʟᴏᴘᴇʀ</li>

                <li className='liSkills'><span><img className='imgSkills' src={imgReact} alt="" /></span><img className='imgSkills' src={js} alt="" /><span><img className='imgSkills' src={node} alt="" /></span><span ><img className='imgSkills' src={imgTs} alt="" /> </span><span><img className='imgSkills' src={mongodb} alt="" /></span><span><img className='imgSkills' src={html5} alt="" /></span><span><img className='imgSkills' src={css3} alt="" /></span></li>
                <li></li>
            </ul>
        {/* <img className='fotoPerfil' src={FabianoFoto}></img> */}
        <img className={active ? 'luaNone' : 'luaNoite'} src={luaNoite} alt="" />
        <img className={active ? 'cityNone':'city'} src={bg} alt="" />
        <img className={active ?'cityNoite':'cityNoiteNone' } src={bgNoite} alt="" />
        {/* <img className={active ? 'arvoreDia':'arvoreDiaNone' } src={arvore} alt="" />
        <img className={active ? 'arvoreNoiteNone':'arvoreNoite'} src={arvoreNoite} alt="" /> */}
        <img className={active ? 'outdoorDia':'outdoorNoite' } src={outdoor} alt="" />
        <img className={active ? 'passaroDia':'passorDiaNone' } src={passaros} alt="" />
        <img className={active ? 'passaroDia1':'passorDiaNone1' } src={passaros} alt="" />
        <img className='bancoDia' src={bancoDia} alt=""/>
        <img className={active ? 'passoroNoiteNone':'passaroNoite' } src={passaros} alt="" />
        <img className={active ? 'gatoNoiteNone':'gatoNoite' } src={gato} alt="" />
        <img className={active ? 'space':'spaceNoite' } src={Space} alt="" />
        </div>
        </div>
       
    </body>)
    {/* <button onClick={toggleCor}>ativar</button> */ }

};

export default body;