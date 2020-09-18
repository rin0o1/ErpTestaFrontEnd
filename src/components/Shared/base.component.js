import React, { Component, useState } from 'react';
import Footer from '../Footer/footer.component';
import FooterModel from "../../models/footer.model";

export default class BaseComponent extends Component{  
    constructor(props) {        
        super(props)   

        this.state = {             
            footerModel: undefined,                        
            showCreateDialog:false
        };                                  
    }   

    closeCreateDialog(){
        this.setState({
            showCreateDialog:false
        })
    }
    
    changeShowCreateDialogProp = showCreateDialog => {
        this.setState({showCreateDialog});
    }

    buildFooter(){
        return(
            <Footer footerModel={this.state.footerModel}                                     
                    onChangeProp= {this.changeShowCreateDialogProp}
            ></Footer>
        );
    }
}


