import React, {  } from 'react';
import axios from "axios";
import  BaseComponent from "../Shared/base.component.js";
import FooterModel from "../../models/footer.model";

export default class Preventivi extends BaseComponent {    

    constructor(props) {        
        super(props);                 
        this.state = { 
            url : process.env.REACT_APP_DATAURL_PREVENTIVI_PROD,
            result: []
        };                    
    }         

    componentDidMount(){    
          //setting footer data                            
          var myfooterModel= new FooterModel();
          myfooterModel.IsDefaultFooter=true;
          myfooterModel.Name="Antonio";
          
          axios.get(this.state.url).then(x=> {
              this.setState({
                  
                  footerModel:myfooterModel
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
