import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import "./bilancio.css";


export default class SingleRow extends Component {
  
  constructor(props) {
    super(props);
    this.state = {            
      data: [{
        element: {
          value: "costi generici",
          price:"3000"
          }
      }, {
          element: {
            value: "costi generici2",
            price: "4000"
          }
      }]
      
    };
  }

  componentDidMount() { }

  getRow() {
    return <div> Ciao</div>
  }

  render() {    
    
    return (
      <div >
        <div className="singleRow row">
          <div className="col-md-1">
            @
          </div>
          <div className="col-md-9 costValue">
            <b> COSTO PER SPEDIZIONE </b>
          </div>        
          <div className="costPrice col-md-2 ">
            <i> Totale : 20 </i>
          </div>
        </div>
      </div>
    )    
    /*return<div> {this.state.data.map((x) => {
      console.log(x.element.value);
      return (
        
        <div >
          <div className="singleRow">
            
            {x.element.value}
            {x.element.price}
          </div>

        </div>
      )
    } )} </div>*/
      
  }

}
