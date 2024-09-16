import './App.css';
import './pages/TelaCadastro'
import MenuLateral from './components/MenuLateral';
import HamburgerMenu from './components/MenuLateral';
import Navbar from './components/NavBar';
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import RoutesPath from './routes/routes';



  function App() {
  return (
    <BrowserRouter>
      <RoutesPath/>
      
    </BrowserRouter>
  );
  }
  
  export default App;
