import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
import Characters from './views/Characters';
import Home from './views/Home';
import RandomCharacter from './views/RandomCharacter';
function App() {
  return (
    <Router>
      <div className="header">

      <div className="App-logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
      <Link to ='/'>Home</Link>
      <Link to ='/characters'>Characters</Link>
      <Link to ='/random-character'>Random Character</Link>
      </div>
      
      </div>

    <div className="App">
      <Routes>
        <Route path = "/"/>
        <Route index element={<Home/>} />
        <Route path = "/characters" element={<Characters/>}/>
        <Route path = "/random-character" element={<RandomCharacter/>}/>
     </Routes>
    </div>
    
    
    </Router>
  );
}

export default App;
