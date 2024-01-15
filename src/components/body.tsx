import { useState } from 'react';
import '../components/body.css';
import bg from '../assets/img/cityDia.png'
import bgNoite from '../assets/img/cityNoite.png'
import luaNoite from '../assets/img/lua.png';
import arvore from '../assets/img/arvore1.png';
import arvoreNoite from '../assets/img/arvoreNoite.png';
import outdoor from '../assets/img/outdorBg.png';
import passaros from '../assets/img/passaros.gif';
import gato from '../assets/img/outdorBg.png';
import Header from './header';

function body() {
    
    const [active, setActive] = useState(false);

    function toggleCor() {
            setActive(!active)
    }

    return (<body><div className='Header'><Header {...{ toggleCor, active }} /></div><div className={active ? 'container' : 'containerNoite'}>
        <div className='divImg'>
            <span className='logoOutdoor'>🅵🅰🅱🅸🅰🅽🅾 🅵🆁🅴🅶🅽🅰🅽🅸 <br />Fᴜʟʟ Sᴛᴀᴄᴋ Dᴇᴠᴇʟᴏᴘᴇʀ</span>
        <img className={active ? 'luaNone' : 'luaNoite'} src={luaNoite} alt="" />
            <img className={active ? 'cityNone':'city'} src={bg} alt="" />
            <img className={active ?'cityNoite':'cityNoiteNone' } src={bgNoite} alt="" />
        <img className={active ? 'arvoreDia':'arvoreDiaNone' } src={arvore} alt="" />
        <img className={active ? 'arvoreNoiteNone':'arvoreNoite'} src={arvoreNoite} alt="" />
        <img className={active ? 'outdoorDia':'outdoorNoite' } src={outdoor} alt="" />
        <img className={active ? 'passaroDia':'passorDiaNone' } src={passaros} alt="" />
        <img className={active ? 'passaroDia1':'passorDiaNone1' } src={passaros} alt="" />
            <img className={active ? 'passoroNoiteNone':'passaroNoite' } src={passaros} alt="" />
        </div>
        </div>
       
    </body>)
    {/* <button onClick={toggleCor}>ativar</button> */ }

};

export default body;