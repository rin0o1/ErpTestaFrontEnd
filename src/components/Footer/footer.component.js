import React, { Component } from 'react';
import '../Footer/footer.css';

export default class Footer extends Component{         
        
    constructor(props){        
        super(props)       
        
    }

    render(){                
        //set up this prop in each child just if you want the footer 
        // in that specific controller 
       var footerModel= this.props.footerModel;
       
       //if the child required the footer
       if (footerModel)       

       //if the footer required is the default one
       if (footerModel.IsDefaultFooter){
        return(    
            <div className="footer">                     
                <button class="btn_"><i class="fa fa-home"></i> Home</button>
                <button class="btn_"><i class="fa fa-plus-circle"></i> Aggiungi</button>
                <button class="btn_"><i class="fa fa-save"></i> Salva</button>
                <button class="btn_"><i class="fa fa-trash"></i> Trash</button>                
            </div>
            );
       }
       return (<div >
           
       </div>)
        
    }



}
