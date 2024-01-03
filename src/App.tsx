// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Body from '../src/components/body'
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function app() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default app