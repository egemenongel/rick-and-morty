import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
import Characters from './views/Characters';
import RandomCharacter from './views/RandomCharacter';
import RandomEpisode from './views/RandomEpisode';
function App() {
  return (
    <Router>
      <div className="header">

      <div className="App-logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
      <Link to ='/characters'>Characters</Link>
      <Link to ='/random-character'>Random Character</Link> 
      <Link to ='/random-episode'>Random Episode</Link>
      </div>
      
      </div>

    <div className="App">
      <Routes>
        <Route path = "/characters" element={<Characters/>}/>
        <Route path = "/random-character" element={<RandomCharacter/>}/>
        <Route path = "/random-episode" element={<RandomEpisode/>}/>
     </Routes>
    </div>
    
    
    </Router>
  );
}

export default App;
