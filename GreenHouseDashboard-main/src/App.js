import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Greenhouse Dashboard
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login Page 
        </a>
      </header>
    </div>
  
  );
}

export default App;
