import logo from "./logo.svg";
import './App.css';
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
  <img className="logo" width="200" src={logo} alt="tappen-logo" />
     <Game />
     <a href="/">Restart</a>
     <Footer />
    </div>
  );
}

export default App;
