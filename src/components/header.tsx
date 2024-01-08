import '../components/header.css';
import { Link } from 'react-router-dom';
import lua from '../assets/img/forma-de-meia-lua.png'
import sol from '../assets/img/ensolarado.png'

interface HeaderProps {
    toggleCor: () => void; 
    active: boolean;
    colorDiv: boolean;
    corBody: boolean;
    corHead: boolean;
}

function header({ toggleCor, active , corHead}: HeaderProps) {

    const listaMenu = [
        { id: '1', texto: 'Home', to: '/' },
        { id: '2', texto: 'About Me', to: '/' },
        { id: '3', texto: 'Portfolio', to: '/' },
        { id: '4', texto: 'Contact Me', to: '/', idClass:'contact', },
    ]
    const menuClass = corHead ? 'menu-mobile' : 'menu-navBarEscuro';

    return (<nav className={menuClass}>
        <ul className='menu-navBar'>
            {listaMenu.map((lista) => ( <Link className='Link' to={lista.to}>
                <li className='li-Menu' id={lista.idClass} key={lista.id}>{lista.texto}</li></Link>
            ))} 
            <li><img  className= {active ? 'active' : 'claro'} onClick={toggleCor} src={lua}/></li>
            <li><img id='escuro' className={active ? 'claro' : 'active'} src={sol} onClick={toggleCor}/></li> 
        </ul>
    </nav>)

}

export default header;