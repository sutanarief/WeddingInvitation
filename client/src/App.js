import "./App.css";
import Main from "./pages/Main";
import NavigationBar from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
