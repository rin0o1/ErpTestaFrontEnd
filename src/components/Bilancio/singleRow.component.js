import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import "./bilancio.css";
import Chart_ from "./chart.component";

export default class SingleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      totParent: 0,
      defaultSingleRowState: "arrowRight fa fa-angle-right",
      defaultStyleChildPanel: " row childPanelClose",
      singleRowState: "",
      styleChildPanel: "",
      isOpen: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      data: props.parent,
      totParent: props.totParent,
    };
  }

  componentDidMount() {
    this.setState({
      singleRowState: this.state.defaultSingleRowState,
      styleChildPanel: this.state.defaultStyleChildPanel,
    });
  }

  openChildPanel = (e) => {
    console.log("opening panel...");
    this.setState({
      singleRowState: this.state.isOpen
        ? this.state.defaultSingleRowState
        : "arrowRight fa fa-angle-down",
      styleChildPanel: !this.state.isOpen
        ? "row childPanelOpen"
        : this.state.defaultStyleChildPanel,
      isOpen: this.state.isOpen ? false : true,
    });
  };

  getChildPanel() {
    return (
      <div className="childPanelRowContainer">
        {this.state.data.children &&
          this.state.data.children.map((x) => {
            return (
              <div className="childPanelRow row ">
                <div className="col-md-9  title CostChild">
                  {" "}
                  {x.child.name}{" "}
                </div>
                <div className="col-md-2  PriceChild">
                  <i> {x.child.tot + " €"}</i>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  getChartsPanel() {
    return (
      <div className="childPanelChartSection">
        <Chart_ type="Bar"></Chart_>

        {/* <div className="ChartWidth">
          <Chart_ type="Pie" ></Chart_>
        </div> */}
      </div>
    );
  }

  render() {
    return (
      <div className="singleRowParent">
        <div className="singleRow row">
          <div className="arrowSect">
            <i
              title="Apri/Chiudi sezione"
              className={this.state.singleRowState}
              onClick={(e) => this.openChildPanel(e)}
            >
              {" "}
            </i>
          </div>
          <div className="col-md-9 CostPatern">
            <b> {this.state.data.parent.name} </b>
          </div>
          <div className=" col-md-2 PricePatern">
            <i> {this.state.totParent + "€"} </i>
          </div>
        </div>
        <div className="row">
          <div className={this.state.styleChildPanel}>
            {this.getChildPanel()}
            {this.getChartsPanel()}
          </div>
        </div>
      </div>
    );
  }
}
