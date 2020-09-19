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
        addurl:process.env.REACT_APP_DATAURL_ADDFORNITORI_PROD,
        deleteurl:process.env.REACT_APP_DATAURL_DELETEFORNITORI_PROD,
        result: [],
        name :"", 
        phoneNumber:"",
        emailAddress: "",
        street:"",
        postcode:"",
        city:""
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
            result: x.data,                            
      })});
  } 
  
  async  makeRequest (data) {
    return await axios.post(this.state.addurl, data)
  }

  submitForm = () =>{                
    
    var fileToPost={
      name:this.state.name,
      phoneNumber:this.state.phoneNumber,
      emailAddress:this.state.emailAddress,
      street:this.state.street,
      city:this.state.city,
      postcode:this.state.postcode
    };

    
    this.makeRequest(fileToPost);

    this.closeCreateDialog();   

    window.location.reload(false);
    
  }

  setName = (e) => this.setState({ name : e.target.value });
  setphoneNumber = (e) => this.setState({ phoneNumber: e.target.value });
  setemailAddress = (e) => this.setState({ emailAddress: e.target.value });
  setstreet = (e) => this.setState({ street: e.target.value });
  setcity = (e) => this.setState({ city: e.target.value });
  setpostcode = (e) => this.setState({ postcode: e.target.value });
  
   
  create(){
    
    if(!this.state.showCreateDialog) return;
    return(
      <div  id="createDialog" className="createDialog">        
     <form className="marginTop" >
          <div className="col-md-12">
            <div className="row">              
              <label className="col-md-3">
                NOME             
              </label>
              <label className="col-md-3">
                CELL
              </label>
              <label className="col-md-6">
                EMAIL             
              </label>          
            </div>

            <div className="row">
              <input  className="col-md-3" 
                      type="text" name="name" 
                      value={this.state.name} 
                      onChange={this.setName}
                      />
              <input  className="col-md-3" 
                      type="text" 
                      name="phoneNumber" 
                      value={this.state.phoneNumber}
                      onChange={this.setphoneNumber}
                      />
              <input  className="col-md-6" 
                      type="text" 
                      name="emailAddress"
                      value= {this.state.emailAddress}
                      onChange={this.setemailAddress}
                       />            
            </div>                                
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row">              
              <label className="col-md-5">
                VIA
              </label>
              <label className="col-md-4">
                CITTA
              </label>
              <label className="col-md-3">
                POSTCODE             
              </label>          
            </div>
            <div className="row" name="address">
              <input  className="col-md-5" 
                      type="text" 
                      name="street" 
                      value={this.state.street}
                      onChange={this.setstreet}
                      />
              <input  className="col-md-4" 
                      type="text" 
                      name="city" 
                      value= {this.state.city}
                      onChange={this.setcity}
                      />
              <input  className="col-md-3" 
                      type="text" 
                      name="postcode" 
                      value={this.state.postcode}
                      onChange={this.setpostcode}
                      />            
            </div>                                
          </div>


        <div className="buttonContainer">
          <button className="myButton saveButton"  onClick={()=> this.submitForm()}  > SAVE </button>
          <button className="myButton closeButton" onClick={() =>this.closeCreateDialog()}> CLOSE </button>          
        </div>
          
        </form>                

      </div>
    )
  }

  async  deleteRequest (id) {
    return await axios.delete(this.state.deleteurl+"/"+id);
  }

  delete =(e)=> {        
  
    
    var id_= e.target.id;

    this.deleteRequest(id_);    

    window.location.reload(false);
  };
 
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
                <tr id={x._id} key={x._id}>
                <td> {x.name} </td>
                <td> {x.phoneNumber} </td>
                <td> {x.emailAddress} </td>
                <td> {x.address.street} </td>
                <td> {x.address.city} </td>
                <td> {x.address.postcode} </td>                      
                <td className="cell-selection-item BiancoOpaco">
                <div className="actionSection"  >                                        
                        <div className="iconAction" title="Modifica"> 
                          <i className=" edit fa fa-edit"></i> 
                        </div>
                        <div  title="Rimuovi" onClick={(e)=>this.delete(e)} >                           
                          <i id={x._id} className=" remove fa fa-trash" > </i> 
                        </div>
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

//<i id={x._id} className="fa fa-trash" > </i> 

/*

  <div id={x._id} className="removeicon" title="Rimuovi" onClick={(e)=>this.delete(e)} >                           
                      
                        </div>*/