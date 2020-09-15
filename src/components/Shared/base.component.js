import React, { Component } from 'react';
import Footer from '../Footer/footer.component';

export default class BaseComponent extends Component{         
    
    ciao(){
        console.log("Base Class Metod");
    }

    buildFooter(){
        return(
            <Footer></Footer>
        );
    }

    getDataFromApi(){
        
    }

}
