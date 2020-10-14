import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import SinlgeSection from "../Bilancio/singleSection.component";
import FooterModel from "../../models/footer.model";

export default class Costi extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SinlgeSection
        title="COSTI"
        colorBorder="3px solid red"
        priceColor="#ff000059"
      ></SinlgeSection>
    );
  }
}
