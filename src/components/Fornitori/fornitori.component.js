import React from "react";
import BaseComponent from "../Shared/base.component.js";
import axios from "axios";
import FooterModel from "../../models/footer.model";
import "../Fornitori/fornitori.css";

export default class Fornitori extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_DATAURL_FORNITORI_PROD,
      addurl: process.env.REACT_APP_DATAURL_ADDFORNITORI_PROD,
      deleteurl: process.env.REACT_APP_DATAURL_DELETEFORNITORI_PROD,
      editurl: process.env.REACT_APP_DATAURL_EDITFORNITORI_PROD,
      name: "",
      phoneNumber: "",
      emailAddress: "",
      street: "",
      postcode: "",
      city: "",
    };
  }

  componentDidMount() {
    //setting footer data
    var myfooterModel = new FooterModel();
    myfooterModel.IsDefaultFooter = true;
    myfooterModel.Name = "Antonio";

    this.setState({
      footerModel: myfooterModel,
    });

    this.getData(this.state.url);
  }

  submitForm = () => {
    var fileToPost = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      street: this.state.street,
      city: this.state.city,
      postcode: this.state.postcode,
    };

    this.createElement(this.state.addurl, fileToPost);
    window.location.reload(false);
  };

  submitFormEdit = () => {
    var fileToPost = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      street: this.state.street,
      city: this.state.city,
      postcode: this.state.postcode,
    };

    this.editElement(
      this.state.editurl,
      this.state.lastEditElement._id,
      fileToPost
    );
  };

  clearObjectProps() {
    this.setState({
      name: "",
      phoneNumber: "",
      emailAddress: [],
      street: "",
      city: "",
      postcode: "",
    });
  }

  setName = (e) => this.setState({ name: e.target.value });
  setphoneNumber = (e) => this.setState({ phoneNumber: e.target.value });
  setemailAddress = (e) => this.setState({ emailAddress: e.target.value });
  setstreet = (e) => this.setState({ street: e.target.value });
  setcity = (e) => this.setState({ city: e.target.value });
  setpostcode = (e) => this.setState({ postcode: e.target.value });

  edit() {
    if (!this.state.showEditDialog) return;

    var e = this.state.lastEditElement;

    return (
      <div id="createDialog" className="createDialog">
        <form className="marginTop">
          <div className="col-md-12">
            <div className="row">
              <label className="col-md-3">NOME</label>
              <label className="col-md-3">CELL</label>
              <label className="col-md-6">EMAIL</label>
            </div>
            <div className="row">
              <input
                className="col-md-3"
                type="text"
                defaultValue={e.name}
                onChange={this.setName}
              />

              <input
                className="col-md-3"
                type="text"
                defaultValue={e.phoneNumber}
                onChange={this.setphoneNumber}
              />

              <input
                className="col-md-6"
                type="text"
                defaultValue={e.emailAddress}
                onChange={this.setemailAddress}
              />
            </div>
          </div>

          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row">
              <label className="col-md-5">VIA</label>
              <label className="col-md-4">CITTA</label>
              <label className="col-md-3">POSTCODE</label>
            </div>
            <div className="row">
              <input
                className="col-md-5"
                type="text"
                defaultValue={e.street}
                onChange={this.setstreet}
              />

              <input
                className="col-md-4"
                type="text"
                defaultValue={e.city}
                onChange={this.setcity}
              />

              <input
                className="col-md-3"
                type="text"
                defaultValue={e.postcode}
                onChange={this.setpostcode}
              />
            </div>
          </div>

          <div className="buttonContainer">
            <button
              className="myButton saveButton"
              onClick={() => this.submitFormEdit()}
            >
              {" "}
              SAVE{" "}
            </button>
            <button
              className="myButton closeButton"
              onClick={() => {
                this.closeCreateDialog();
                this.clearObjectProps();
              }}
            >
              {" "}
              CLOSE{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }

  create() {
    if (!this.state.showCreateDialog) return;
    return (
      <div id="createDialog" className="createDialog">
        <form className="marginTop">
          <div className="col-md-12">
            <div className="row">
              <label className="col-md-3">NOME</label>
              <label className="col-md-3">CELL</label>
              <label className="col-md-6">EMAIL</label>
            </div>

            <div className="row">
              <input
                className="col-md-3"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.setName}
              />
              <input
                className="col-md-3"
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.setphoneNumber}
              />
              <input
                className="col-md-6"
                type="text"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.setemailAddress}
              />
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row">
              <label className="col-md-5">VIA</label>
              <label className="col-md-4">CITTA</label>
              <label className="col-md-3">POSTCODE</label>
            </div>
            <div className="row" name="address">
              <input
                className="col-md-5"
                type="text"
                name="street"
                value={this.state.street}
                onChange={this.setstreet}
              />
              <input
                className="col-md-4"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.setcity}
              />
              <input
                className="col-md-3"
                type="text"
                name="postcode"
                value={this.state.postcode}
                onChange={this.setpostcode}
              />
            </div>
          </div>

          <div className="buttonContainer">
            <button
              className="myButton saveButton"
              onClick={() => this.submitForm()}
            >
              {" "}
              SAVE{" "}
            </button>
            <button
              className="myButton closeButton"
              onClick={() => this.closeCreateDialog()}
            >
              {" "}
              CLOSE{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <table id="index-table" class=" table-for-information  col-md-12">
          <thead>
            <tr class="table-for-information-partial-index">
              <th>NOME</th>
              <th>CELL</th>
              <th>EMAIL</th>
              <th>VIA</th>
              <th>CITTA</th>
              <th>POSTCODE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.result &&
              this.state.result.map((x) => {
                return (
                  <tr id={x._id} key={x._id}>
                    <td> {x.name} </td>
                    <td> {x.phoneNumber} </td>
                    <td> {x.emailAddress} </td>
                    <td> {x.street} </td>
                    <td> {x.city} </td>
                    <td> {x.postcode} </td>
                    <td className="cell-selection-item BiancoOpaco">
                      <div className="actionSection">
                        <div className="iconAction" title="Modifica">
                          <i
                            id={x._id}
                            className=" edit fa fa-edit"
                            onClick={(e) => this.editButtonClicked(e)}
                          ></i>
                        </div>
                        <div
                          title="Rimuovi"
                          onClick={(e) => this.delete(e, this.state.deleteurl)}
                        >
                          <i id={x._id} className=" remove fa fa-trash">
                            {" "}
                          </i>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {this.edit()}
        {this.create()}
        {this.buildFooter()}
      </div>
    );
  }
}
