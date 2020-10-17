import React, { Component } from "react";
import { Bar, Line, Pie, Pir } from 'react-chartjs-2';

export default class Chart extends Component{

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ["a", "b", "c", "d", "e", "f", "j", "k", "l", "m","n", "o"],
                datasets: [
                    {
                        label: "Valori in percentuali",
                        backgroundColor: [
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",
                            "#e05c30",


                        ],
                        fillColor: "rgba(128, 43, 78, 0.97)",
                        strokeColor: "rgba(128, 43, 78, 0.97)",
                        pointColor: "rgba(128, 43, 78, 0.97)",
                        pointStrokeColor: "#aaa",                        
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: this.rand(32, 100, 22)
                    },
                   
                ]              
            },
            chartDataBar: {
                labels: ["a", "b"],
                datasets: [
                    {
                        label: "Valori in percentuali",
                        backgroundColor: [
                            "#e05c30",
                            "#e05c30",                        
                        ],
                        fillColor: "rgba(128, 43, 78, 0.97)",
                        strokeColor: "rgba(128, 43, 78, 0.97)",
                        pointColor: "rgba(128, 43, 78, 0.97)",
                        pointStrokeColor: "#aaa",                        
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: this.rand(32, 100, 22)
                    },
                   
                ]              
            }
        }

    }

     rand(min, max, num) {
        var rtn = [];
        while (rtn.length < num) {
          rtn.push((Math.random() * (max - min)) + min);
        }
        return rtn;
      }
            
    render() {
        
        if (this.props.type=="Bar") {
            return (
                <div className="chart">
    
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    >
    
                    </Bar>
    
                </div>
            )
        }
        else {
            return (
                <div className="chart">    
                    <Pie
                        data={this.state.chartDataBar}
                        width={100}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    >
    
                    </Pie>        
                </div>
            )
                
            }
        }            
}