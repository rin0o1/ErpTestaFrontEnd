import React, { Component } from 'react';
import  BaseComponent from "../Shared/base.component.js";
import axios from "axios";
import FooterModel from "../../models/footer.model";

export default class Fornitori extends BaseComponent {

  constructor(props) {        
    super(props);                 
    this.state = { 
        url : process.env.REACT_APP_DATAURL_FORNITORI_PROD,
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
      <table id="index-table" class=" table-for-information  col-md-12">
          <thead>
              <tr class="table-for-information-partial-index">
              <th>NOME</th>                        
              <th>CELL</th>                        
              <th>EMAIL</th>    
              <th>VIA</th>                                                             
              <th>CITTA</th>                      
              <th>POSTCODE</th>                                                               
              </tr>
          </thead>
          <tbody>        
          {this.state.result && this.state.result.map(x=>{                        
                  return (<tr id={x._id}>
                      <td> {x.name} </td>
                      <td> {x.phoneNumber} </td>
                      <td> {x.emailAddress} </td>
                      <td> {x.street} </td>
                      <td> {x.city} </td>
                      <td> {x.postcode} </td>                      
                  </tr>)
              })}          
          </tbody>
      </table>
      {this.buildFooter()}
    </div>
    );

   
}
}