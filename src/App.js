import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
import Home from './views/Home';
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
      <Link to ='/about'>About</Link>
      </div>
      
      </div>

    <div className="App">
      <Routes>
        <Route path = "/"></Route>
        <Route index element={<Home/>} />
     </Routes>
    </div>
    
    
    </Router>
  );
}

export default App;
