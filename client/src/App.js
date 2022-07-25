import './App.css';
import Main from './pages/Main';
import NavigationBar from './components/Navbar';
import {
  Container
} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <NavigationBar/>
        <Main/>
      </Container>
    </div>
  );
}

export default App;
