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
      
      this.setState({
        footerModel:myfooterModel
      });
      
}    

render() {                                                                          
    axios.get(this.state.url).then(x=> {
        this.setState({
            result:x.data,                
            
        })
    } );        
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
              <th> </th>                    
              
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
                      <td className="cell-selection-item BiancoOpaco">
                      <div className="actionSection"  >                                        
                            <div className="iconAction" title="Modifica"> <i class="fa fa-edit"></i> </div>
                            <div  title="Rimuovi"> <i class="fa fa-trash"></i> </div>
                        </div>
                    </td>
                  </tr>)
              })}          
          </tbody>
      </table>
      {this.buildFooter()}
    </div>
    );

   
}
}