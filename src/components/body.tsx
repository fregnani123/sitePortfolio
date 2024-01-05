import '../components/body.css';
import Header from '../components/header';
import fabianoIMG from '../assets/img/fabianoIMG.png';


function body() {

    return (
        <div className='main-container'>
            <h1 className='logo'>Fabiano Fregnani</h1>
            <Header />
            <div className='divBodyPartOne'></div><div className='containerPerfil' ><img className='fabianoImg' src={fabianoIMG}/></div><div className='divBodyPartTwo'></div>
        </div>
    )
}

export default body