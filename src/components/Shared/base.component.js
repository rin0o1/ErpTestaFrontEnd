import React, { Component } from "react";
import Footer from "../Footer/footer.component";
import axios from "axios";

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerModel: undefined,
      showCreateDialog: false,
      result: [],
    };
  }

  getData(url) {
    axios.get(url).then((x) => {
      this.setState({
        result: x.data,
      });
    });
  }

  async createElement(url, data) {
    return await axios.post(url, data);
  }

  async deleteRequest(id, deleteUrl) {
    return await axios.delete(deleteUrl + "/" + id);
  }

  delete = (e, deleteUrl) => {
    var id_ = e.target.id;

    this.deleteRequest(id_, deleteUrl);
    window.location.reload(false);
  };

  closeCreateDialog() {
    this.setState({
      showCreateDialog: false,
    });
  }

  changeShowCreateDialogProp = (showCreateDialog) => {
    this.setState({ showCreateDialog });
  };

  buildFooter() {
    return (
      <Footer
        footerModel={this.state.footerModel}
        onChangeProp={this.changeShowCreateDialogProp}
      ></Footer>
    );
  }
}
