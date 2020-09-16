import React, { Component } from 'react';
import Footer from '../Footer/footer.component';

export default class BaseComponent extends Component{  
    constructor(props) {        
        super(props)

        //Write here footer props
        this.state = { 
            c: new MyClass,
            footerData: {
                IsDefault:true,
                name:""
            }
        };                    
    }         
    buildFooter(){

        return(
            <Footer data={this.state.footerData} ></Footer>
        );
    }
}

class MyClass{

}
