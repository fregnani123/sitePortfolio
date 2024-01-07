import '../components/header.css';
import { Link } from 'react-router-dom';
import lua from '../assets/img/forma-de-meia-lua.png'
import sol from '../assets/img/ensolarado.png'
import { useState } from 'react';

function header() {

    const [active, setClaroEscuro] = useState(false);
    
    const toggleCor = () => {
        setClaroEscuro(!active)
    }
    
    const listaMenu = [
        { id: '1', texto: 'Home', to: '/' },
        { id: '2', texto: 'About Me', to: '/' },
        { id: '3', texto: 'Portfolio', to: '/' },
        { id: '4', texto: 'Contact Me', to: '/', idClass:'contact', },
    ]

    return (<nav className='menu-mobile'>
        <ul className='menu-navBar'>
            {listaMenu.map((lista) => ( <Link className='Link' to={lista.to}>
                <li className='li-Menu' id={lista.idClass} key={lista.id}>{lista.texto}</li></Link>
            ))} 
            <li><img className= 'claro' onClick={toggleCor} src={lua}/></li>
            <li><img id='escuro' src={sol} onClick={toggleCor}/></li>
        </ul>
    </nav>)

}

export default header;