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
        colorBorder="3px solid green"
        priceColor="#00800052"
      ></SinlgeSection>
    );
  }
}
