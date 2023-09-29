import logo from './logo.svg';
import './App.css';
import Home from './spotify-components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './spotify-components/data';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import './App.scss';
import Search from './spotify-components/search';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </Router>

      
    
  );
}

export default App;
