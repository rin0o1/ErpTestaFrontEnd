import React, { Component } from "react";
import SinlgeSection from "../Bilancio/singleSection.component";
import "./bilancio.css";
export default class Ricavi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SinlgeSection
        title="RICAVI"
        colorPriceBorder="3px solid green"        
      ></SinlgeSection>
    );
  }
}
