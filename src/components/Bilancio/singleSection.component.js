import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import "../Bilancio/bilancio.css";
import SingleRow from "./singleRow.component";

export default class SingleSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //url:this.props.url,
      isCost: this.props.isCost === "true",
      data: undefined,
      style_: {
        priceSection: {
          border: this.props.colorPriceBorder,
        },
      },
    };
  }

  componentDidMount() {}

  static getDerivedStateFromProps(props, state) {
    var c = props.data_;
    return { data: props.data_ };
  }

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
            <b> {this.state.data.totCost + "€"} </b>
          </div>
        </div>

        {this.state.data.parents &&
          this.state.data.parents.map((x) => {
            return (
              <SingleRow
                childData={x.children}
                parent={x}
                totParent={x.totParentCost}
              ></SingleRow>
            );
          })}
      </div>
    );
  }
}
