import '../components/body.css'
import Header from './header'


function body() {

    return (
        <div className='main-container'>
            <h1 className='logo'>Fabiano Fregnani</h1>
            <Header />
            <div className='divBodyPartOne'></div><div className='divBodyPartTwo'></div>
        </div>
    )
}

export default body