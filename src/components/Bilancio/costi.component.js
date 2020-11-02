import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import SinlgeSection from "../Bilancio/singleSection.component";

export default class Costi extends BaseComponent {
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
        title="COSTI"
        colorPriceBorder="3px solid red"
        isCost="true"
      ></SinlgeSection>
    );
  }
}
