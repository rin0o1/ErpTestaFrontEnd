import React, { Component } from 'react';
import  BaseComponent from "../Shared/base.component.js";
import axios from "axios";
import FooterModel from "../../models/footer.model";

export default class FatturaAcquisto extends BaseComponent {

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
              result:x.data,                
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