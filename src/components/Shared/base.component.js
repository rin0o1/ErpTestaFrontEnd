import React, { Component } from 'react';

export default class BaseComponent extends Component{         
    
    ciao(){
        console.log("Base Class Metod");
    }

    buildFooter(){
        return(
        <div>
            Ciao
        </div>)
    }

    getDataFromApi(){
        
    }

}
