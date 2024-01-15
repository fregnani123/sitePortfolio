import { Link } from 'react-router-dom';
import '../components/header.css';
import lua from '../assets/img/forma-de-meia-lua.png';
import sol from '../assets/img/ensolarado.png';

interface HeaderProps {
    toggleCor: () => void;
    active: boolean;
}

function Header({ toggleCor, active}: HeaderProps) {
    const listaMenu = [
        { id: '1', texto: 'Home', to: '/' },
        { id: '2', texto: 'About Me', to: '/' },
        { id: '3', texto: 'Portfolio', to: '/' },
        { id: '4', texto: 'Contact Me', to: '/', idClass: 'contact' },
    ];

    const menuClass = active ? 'menu-mobile' : 'menu-navBarEscuro';

    return (
        <nav className={menuClass}>
            <ul className='menu-navBar'>
                <li className='logo'>🅵🆁🅴🅶🅽🅰🅽🅸</li>
                {listaMenu.map(({ id, texto, to, idClass }) => (
                    <Link className='Link' to={to} key={id}>
                        <li className={active ? 'li-Menu' : 'li-MenuNoite'}id={idClass}>{texto}</li>
                    </Link>
                ))}
                <li><img className={active ? 'active' : 'claro'} onClick={toggleCor} src={lua} alt='Lua' /></li>
                <li><img id='escuro' className={active ? 'claro' : 'active'} onClick={toggleCor} src={sol} alt='Sol' /></li>
            </ul>
        </nav>
    );
}

export default Header;
