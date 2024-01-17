// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Body from '../src/components/body'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function app() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/sitePortfolio/body' element={<Body/>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default app


// Endereço site no gitPages https://fregnani123.github.io/sitePortfolio/