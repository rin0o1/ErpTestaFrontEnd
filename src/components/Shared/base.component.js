import React, { Component } from 'react';
import Footer from '../Footer/footer.component';
import FooterModel from "../../models/footer.model";
export default class BaseComponent extends Component{  
    constructor(props) {        
        super(props)

        //Write here footer props
        
        this.state = { 
            footerModel: undefined,            
        };                    
    }         

    buildFooter(functToCreate){
        return(
            <Footer footerModel={this.state.footerModel}
                    functionToCreate={functToCreate}
            ></Footer>
        );
    }
}


