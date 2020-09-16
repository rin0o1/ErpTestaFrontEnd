import React, { Component } from 'react';
import '../Footer/footer.css';

export default class Footer extends Component{         
        
    constructor(props){        
        super(props)       
    }

    render(){                
        console.log(this.props.data);
        return(
        <div className="footer">     
            <button class="btn_"><i class="fa fa-home"></i> Home</button>
            <button class="btn_"><i class="fa fa-bars"></i> Menu</button>
            <button class="btn_"><i class="fa fa-trash"></i> Trash</button>
            <button class="btn_"><i class="fa fa-close"></i> Close</button>
            <button class="btn_"><i class="fa fa-folder"></i> Folder</button>
        </div>
        );
    }



}
