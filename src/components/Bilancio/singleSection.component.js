import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import "../Bilancio/bilancio.css";
import SingleRow from "./singleRow.component";

export default class SingleSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style_: {
        title: {
          backgroundColor: this.props.priceColor,
        },
        priceSection: {
          border: this.props.colorBorder,
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
        <div style={this.state.style_.priceSection} className="boxtitle row">
          <div className="col-md-1 offset-md-3 title "> {this.props.title}</div>
          <div
            className=" col-md-3 offset-md-5"
            style={this.state.style_.title}
          >
            Totale: 5000€
          </div>
        </div>
        <SingleRow></SingleRow>
      </div>
    );
  }
}
