import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />}/>
      </Routes>
      <Routes>
          <Route path='/home' element={<Home />}/>
      </Routes>
      <Routes>
          <Route path='/sobre' element={<Sobre />}/>
      </Routes>
      <Routes>
          <Route path='/contato' element={<Contato />}/>
      </Routes>
    </Router>

  )
}

export default App;
