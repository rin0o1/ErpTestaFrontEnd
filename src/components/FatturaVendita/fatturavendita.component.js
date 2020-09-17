import React, { Component } from 'react';
import  BaseComponent from "../Shared/base.component.js";
import axios from "axios";
import FooterModel from "../../models/footer.model";

export default class FatturaVendita extends BaseComponent {

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
      <table id="index-table" class=" table-for-information  col-md-12">
          <thead>
              <tr class="table-for-information-partial-index">
              <th>NOME</th>                        
              <th>COGNOME</th>                        
              </tr>
          </thead>
          <tbody>        
          
          </tbody>
      </table>
      {this.buildFooter()}
    </div>
    );

   
}
}