import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom" ;
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./components/NavBar/navbar.component";
import Home from "./components/Home/home.component";
import Test from "./components/Test/test.component";

function App() {
  return (
    <Router>
      <div className="mycontainer">
      <NavBar/>
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={Test} />      
      </div>
    </Router>
  );
}

export default App;
