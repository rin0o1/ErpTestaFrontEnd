import React, { Component } from "react";
import SinlgeSection from "../Bilancio/singleSection.component";
import BaseComponent from "../Shared/base.component.js";
import "./bilancio.css";

export default class Ricavi extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_DATA_BILANCIO_LOCAL,
      data: [],
    };
  }

  componentDidMount() {
    this.getDataWithResultSync(this.state.url).then((x) => {
      this.setState({
        data: x.data,
      });
    });
  }

  render() {
    return (
      <SinlgeSection
        data_={this.state.data}
        title="RICAVI"
        colorPriceBorder="3px solid green"
        isCost="true"
      ></SinlgeSection>
    );
  }
}
