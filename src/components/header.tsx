import { Link } from 'react-router-dom';
import '../components/header.css';
import lua from '../assets/img/ensolarado.png';
import sol from '../assets/img/forma-de-meia-lua.png';
import linkedin from '../assets/img/logotipo-do-linkedin.png';
import git from '../assets/img/git.png';
import whatsap from '../assets/img/whatsapp.png';
import { useState } from 'react';

interface HeaderProps {
    toggleCor: () => void;
    active: boolean;
}

function Header({ toggleCor, active}: HeaderProps) {
    const listaMenu = [
        { id: '1', texto: 'Home', to: '/' },
        { id: '2', texto: 'About Me', to: '/' },
        { id: '3', texto: 'Portfolio', to: '/' },
    ];
    const listaContato = [
        { id: '4', texto: 'LinkedIn', icon: linkedin, link: 'https://www.linkedin.com/in/fabiano-fregnani-8984051a7/', className:'linkedin', },
        { id: '5', texto: 'GitHub', icon: git, link: 'https://github.com/fregnani123', className: 'git', },
        { id: '6', texto: 'WhatsApp', icon: whatsap, link: 'https://api.whatsapp.com/send?phone=5548996607600&text=', className: 'whatsap', },
    ];

    const [menuList, setMenuList] = useState(false)
    
    const listaActive = () => {
        setMenuList(!menuList)
    }

    const menuClass = active ? 'menu-mobile' : 'menu-navBarEscuro';

    return (
        <nav className={menuClass}>
            <ul className='menu-navBar'>
                <li className='logo'>🅵🆁🅴🅶🅽<span className='my-letter'>A</span>🅽🅸</li>
                {listaMenu.map(({ id, texto, to}) => (
                    <Link className='Link' to={to} key={id}>
                        <li className={active ? 'li-Menu' : 'li-MenuNoite'}>{texto}</li>
                    </Link>
                ))}<li>
                    <ul className={menuList ? 'menu-contactsActive' : 'menu-contacts'}>
                    <li onClick={listaActive} className='contact'>Contact</li>
                    {listaContato.map(({ id, texto, icon, link, className }) => (
                        <li key={id}>
                            <a href={link} target='_blank' rel='noopener noreferrer'>
                                <img className={className} src={icon} alt={texto} /><span className='textoMenu'>{texto}</span>
                            </a>
                        </li>
                    ))}
                </ul></li>
                <li><img className={active ? 'active' : 'claro'} onClick={toggleCor} src={lua} alt='Lua' /></li>
                <li><img id='escuro' className={active ? 'claro' : 'active'} onClick={toggleCor} src={sol} alt='Sol' /></li>
            </ul>
           
        </nav>
    );
}

export default Header;
