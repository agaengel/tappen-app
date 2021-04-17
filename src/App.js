
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import logo from "./logo.svg";
import './App.css';
import Game from "./components/Game";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
  <img className="logo" width="200" src={logo} alt="tappen-logo" />
  <Router>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
  
          <Route path="/game" exact component={Game}/>
        
          <Route path="/" exact component={Home} />
         
        </Switch>
    
    </Router>
     <Footer />
    </div>
  );
}

export default App;

