import React, {  } from 'react';
import axios from "axios";
import  BaseComponent from "../Shared/base.component.js";

export default class Preventivi extends BaseComponent {    

    constructor(props) {        
        super(props);                 
        this.state = { 
            url : process.env.REACT_APP_DATAURL_PREVENTIVI_PROD,
            result: []
        };                    
    }         

    componentDidMount(){    
        this.init();        
    }

    //add footer setup
    init()  {    
        //setting footer data            
        const footerdata_= {
            name:"Marco"
        };
        axios.get(this.state.url).then(x=> {
            this.setState({
                result:x.data,
                footerData:footerdata_
            })
        } );          
    }

    render() {                                                                      
        
        return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>NOME</th>                        
                    <th>COGNOME</th>                        
                </tr>
            </thead>
            <tbody>
                {this.state.result && this.state.result.map(x=>{                        
                    return <tr>
                        <td> {x.name} </td>
                        <td> {x.surname} </td>
                    </tr>
                })}
            </tbody>
        </table>        
        {this.buildFooter()}
        </div>        
        
        );
    }
}
