import { useState } from 'react';
import '../components/body.css';
import bg from '../assets/img/cityDia.png'
import FabianoFoto from '../assets/img/fabiano.png'
import bgNoite from '../assets/img/cityNoite.png'
import luaNoite from '../assets/img/lua.png';
import arvore from '../assets/img/arvore1.png';
import arvoreNoite from '../assets/img/arvoreNoite.png';
import outdoor from '../assets/img/outdorBg.png';
import passaros from '../assets/img/passaros.gif';
import gato from '../assets/img/gato.gif';
import bancoDia from '../assets/img/bancoPraça.png';
import Space from '../assets/img/spaceAlien.gif';
import sombra from '../assets/img/loop-104569-720p--unscreen.gif';


import Header from './header';

function body() {
    
    const [active, setActive] = useState(false);
    const [interagir, setInteragir] = useState(false);

    function toggleCor() {
            setActive(!active)
    }

    function toggleInteragir(){
            setInteragir(!interagir)
    }

    return (<body><div className='Header'><Header {...{ toggleCor, active }} /></div><div className={active ? 'container' : 'containerNoite'}>
        <div className='divImg'>
       
            <ul className='logoOutdoor'>
                <li className='liOutdoor'>🅵<span className='my-letterOutdoor'>A</span><span className='my-letterOutdoor'>B</span>🅸<span className='my-letterOutdoor'>A</span>🅽<span className='my-letterOutdoor'>O</span> 🅵🆁🅴🅶🅽<span className='my-letterOutdoor'>A</span>🅽🅸 <br />Fᴜʟʟ Sᴛᴀᴄᴋ Dᴇᴠᴇʟᴏᴘᴇʀ</li>
                <li><img className='sombra' src={sombra} alt=""/></li>
            </ul>
        <img className='fotoPerfil' src={FabianoFoto}></img>
        <img className={active ? 'luaNone' : 'luaNoite'} src={luaNoite} alt="" />
        <img className={active ? 'cityNone':'city'} src={bg} alt="" />
        <img className={active ?'cityNoite':'cityNoiteNone' } src={bgNoite} alt="" />
        <img className={active ? 'arvoreDia':'arvoreDiaNone' } src={arvore} alt="" />
        <img className={active ? 'arvoreNoiteNone':'arvoreNoite'} src={arvoreNoite} alt="" />
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