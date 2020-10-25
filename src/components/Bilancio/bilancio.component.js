import React from "react";
import BaseComponent from "../Shared/base.component.js";
import FooterModel from "../../models/footer.model";
import Costi from "./costi.component";
import Ricavi from "./ricavi.component";

export default class Bilancio extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div className="row">
        <Costi></Costi>
      </div>
    );
  }
}
