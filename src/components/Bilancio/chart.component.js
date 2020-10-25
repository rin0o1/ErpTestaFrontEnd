import React, { Component } from "react";
import { Bar, Line, Pie, Pir } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      chartDataBar: {
        labels: this.props.childNameArr,
        datasets: [
          {
            label: "Valori in percentuali",
            backgroundColor: ["#e05c30", "#e05c30"],
            fillColor: "rgba(128, 43, 78, 0.97)",
            strokeColor: "rgba(128, 43, 78, 0.97)",
            pointColor: "rgba(128, 43, 78, 0.97)",
            pointStrokeColor: "#aaa",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.props.childValueArr,
          },
        ],
      },
    };
  }
  random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }

  componentDidMount() {
    var lables_ = [];
    var length = this.props.childValueArr.length;
    var backColor = [];
    for (var i = 0; i < length; i++) {
      lables_.push(String.fromCharCode(65 + i));
      backColor.push("#e05c30");
    }
    this.setState({
      chartData: {
        labels: lables_,
        //labels: this.props.childNameArr,
        datasets: [
          {
            label: "Valori in percentuali",
            backgroundColor: backColor,
            fillColor: "rgba(128, 43, 78, 0.97)",
            strokeColor: "rgba(128, 43, 78, 0.97)",
            pointColor: "rgba(128, 43, 78, 0.97)",
            pointStrokeColor: "#aaa",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.props.childValueArr,
          },
        ],
      },
    });
  }

  render() {
    if (this.props.type == "Bar") {
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            width={50}
            height={200}
            options={{ maintainAspectRatio: false }}
          ></Bar>
        </div>
      );
    } else {
      return (
        <div className="chart">
          <Pie
            data={this.state.chartDataBar}
            width={100}
            height={200}
            options={{ maintainAspectRatio: false }}
          ></Pie>
        </div>
      );
    }
  }
}
