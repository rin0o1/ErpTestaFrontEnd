import React, { Component } from 'react';
import axios from "axios";

export default class Test extends Component { 

  render() {
    const url = process.env.REACT_APP_DATAURL;    
    axios.get(url)
        .then(x=> console.log(x))                                                                
        
    return (
      <div>

      </div>        
    );
  }
}
