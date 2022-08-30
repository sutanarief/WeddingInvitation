import './App.css';
import Main from './pages/Main';
import NavigationBar from './components/Navbar';
import { Container } from 'react-bootstrap';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className='App'>
      <div className='d-none d-md-block d-lg-block'>
        <NavigationBar />
      </div>
      <div className='d-block d-md-none d-lg-none'>
        <MobileNav />
      </div>
      <Main />
    </div>
  );
}

export default App;
