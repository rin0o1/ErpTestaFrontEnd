import React, { Component } from "react";
import "../Footer/footer.css";

export default class Footer extends Component {
  showCreateDialog = (event) => {
    this.props.onChangeProp(true);
  };

  render() {
    //set up this prop in each child just if you want the footer
    // in that specific controller
    var footerModel = this.props.footerModel;

    //if the child required the footer
    if (footerModel)
      if (footerModel.IsDefaultFooter) {
        //if the footer required is the default one
        return (
          <div className="footer">
            <button class="btn_">
              <i class="fa fa-home"></i> Home
            </button>
            <button class="btn_" onClick={this.showCreateDialog}>
              <i class="fa fa-plus-circle"></i> Nuovo
            </button>
          </div>
        );
      }
    return <div></div>;
  }
}
