import React, { Component } from "react";
import Footer from "../Footer/footer.component";
import axios from "axios";

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinationUrl: "PROD",
      footerModel: undefined,
      showCreateDialog: false,
      showEditDialog: false,
      lastEditElement: undefined,

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

  async getDataWithResult(url) {
    return await axios.get(url).then((x) => {
      return x.data;
    });
  }

  getDataWithResultSync(url) {
    return axios.get(url);
  }

  async editElement(url, id, data) {
    return await axios.post(url + id, data);
  }

  async createElement(url, data) {
    return await axios.post(url, data).result;
  }

  async deleteRequest(id, deleteUrl) {
    return await axios.delete(deleteUrl + "/" + id);
  }

  editButtonClicked(e) {
    var element = this.state.result.find((x) => x._id === e.target.id);

    this.setState({
      showEditDialog: true,
      lastEditElement: element,
    });
  }

  delete = (e, deleteUrl) => {
    var id_ = e.target.id;
    this.deleteRequest(id_, deleteUrl);
    window.location.reload(false);
  };

  closeCreateDialog() {
    this.setState({
      showCreateDialog: false,
      showEditDialog: false,
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
