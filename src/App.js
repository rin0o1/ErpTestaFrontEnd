import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom" ;
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/components/Shared/table.css";
import NavBar from "./components/NavBar/navbar.component";
import Home from "./components/Home/home.component";
import Preventivi from "./components/Preventivi/preventivi.component";
import FatturaVendita from "./components/FatturaVendita/fatturavendita.component";
import FatturaAcquisto from "./components/FatturaAcquisto/fatturaacquisto.component";
function App() {
  return (
    <Router>
      <div className="mycontainer">
      <NavBar/>
        <br/>
        <Route path="/" exact component={Home } />
        <Route path="/preventivi" component={Preventivi }  />      
        <Route path="/fatturaacquisto" component={FatturaAcquisto}  />      
        <Route path="/fatturavendita" component={FatturaVendita}  />      
      </div>
    </Router>
  );
}

export default App;
