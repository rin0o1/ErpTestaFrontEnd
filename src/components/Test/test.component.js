import React, { Component } from 'react';
import axios from "axios";

export default class Test extends Component { 

  render() {
    return (
        <button onClick= {this.buttonClicked}>
            Get tests from database
        </button>
    );
  }

  buttonClicked (e){
      console.log("Button clicked");      
      axios.get('https://erptestabackend.herokuapp.com/test')
           .then(x=> console.log(x))                                                            
    }
}
