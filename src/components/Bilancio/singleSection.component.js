import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import "../Bilancio/bilancio.css";
import SingleRow from "./singleRow.component";

export default class SingleSection extends Component {
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
        }],      
      style_: {        
        priceSection: {
          border: this.props.colorPriceBorder,
        },
      },
    };
  }

  /*componentDidMount() {
    var myfooterModel = new FooterModel();
    myfooterModel.IsDefaultFooter = true;
    myfooterModel.Name = "Antonio";

    this.setState({
      footerModel: myfooterModel,
    });
  }*/

  render() {
    return (
      
      <div className="col-md-6 singleSection">
        <div className="  boxtitle row">
          <div className="col-md-1  title ">
            
           <b className="title">{this.props.title} </b>  
          </div>

          <div
            className="price col-md-3 offset-md-8"
             style={this.state.style_.priceSection}
          >
            <b  > Totale: 5000€ </b>
          </div>
        </div>
        {this.state.data.map((x) => {
        return (
          <SingleRow childData="" ></SingleRow>          
        )
        })}        
      </div>
        
    );
  }
}
