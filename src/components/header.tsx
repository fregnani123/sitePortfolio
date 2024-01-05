import '../components/header.css';
import { Link } from 'react-router-dom';

function header() {

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
        </ul>
    </nav>)

}

export default header;