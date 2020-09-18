import React, { Component } from 'react';
import  BaseComponent from "../Shared/base.component.js";
import axios from "axios";
import FooterModel from "../../models/footer.model";
import '../Fornitori/fornitori.css';

export default class Fornitori extends BaseComponent {

  constructor(props) {        
    super(props);               
    this.state = { 
        url : process.env.REACT_APP_DATAURL_FORNITORI_PROD,
        result: [],        
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

      axios.get(this.state.url).then(x=> {        
        this.setState({
            result:x.data,                            
        })});
  } 
   

  create(){
    //add ! 
    if(!this.state.showCreateDialog) return;
    return(
      <div  id="createDialog" className="createDialog" >        
        <div className="buttonContainer">
          <button className="myButton saveButton" > SAVE </button>
          <button className="myButton closeButton" onClick={() =>this.closeCreateDialog()}> CLOSE </button>          
        </div>
        
      </div>
    )
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
              <th> </th>                                  
              </tr>
          </thead>
          <tbody>        
          {this.state.result && this.state.result.map(x=>{                                        
                  return (
                    <tr id={x._id}>
                    <td> {x.name} </td>
                    <td> {x.phoneNumber} </td>
                    <td> {x.emailAddress} </td>
                    <td> {x.address.street} </td>
                    <td> {x.address.city} </td>
                    <td> {x.address.postcode} </td>                      
                    <td className="cell-selection-item BiancoOpaco">
                    <div className="actionSection"  >                                        
                            <div className="iconAction" title="Modifica"> <i className="fa fa-edit"></i> </div>
                            <div  title="Rimuovi"> <i className="fa fa-trash"></i> </div>
                    </div>
                    </td>
                  </tr>)
              })}          
          </tbody>
      </table>      

      {this.create()}
      {this.buildFooter()}      

    </div>
    );

    
}
}