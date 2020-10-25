import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import Select from "react-select";
import FooterModel from "../../models/footer.model";

export default class FatturaVendita extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      url: process.env.REACT_APP_DATAURL_FATTURAVENDITA_LOCAL,
      addurl: process.env.REACT_APP_DATAURL_ADDFATTURAVENDITA_LOCAL,
      deleteurl: process.env.REACT_APP_DATAURL_DELETEFATTURAVENDITA_LOCAL,
      editurl: process.env.REACT_APP_DATAURL_EDITFATTURAVENDITA_LOCAL,
      speseTypeUrl: process.env.REACT_APP_DATAURL_SPESETYPEHINT_LOCAL,
      denominazione: "",
      numeroFattura: "",
      dataDocumento: "",
      dataPagamento: "",
      imponibile: 0,
      iva: 0,
      totaleFattura: 0,
      typeGroup: "",
      speseTypeResult: [],
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

    this.getDataWithResult(this.state.speseTypeUrl).then((x) => {
      this.setState({
        speseTypeResult: x,
      });
    });
  }

  submitForm = () => {
    var fileToPost = {
      denominazione: this.state.denominazione,
      numeroFattura: this.state.numeroFattura,
      dataDocumento: this.state.dataDocumento,
      dataPagamento: this.state.dataPagamento,
      imponibile: this.state.imponibile,
      iva: this.state.iva,
      totaleFattura: this.state.totaleFattura,
      typeGroup: this.state.typeGroup,
    };
    this.createElement(this.state.addurl, fileToPost);
    window.location.reload(false);
  };

  submitFormEdit = () => {
    var fileToPost = {
      denominazione: this.state.denominazione,
      numeroFattura: this.state.numeroFattura,
      dataDocumento: this.state.dataDocumento,
      dataPagamento: this.state.dataPagamento,
      imponibile: this.state.imponibile,
      iva: this.state.iva,
      totaleFattura: this.state.totaleFattura,
      typeGroup: this.state.typeGroup,
    };

    this.editElement(
      this.state.editurl,
      this.state.lastEditElement._id,
      fileToPost
    );

    window.location.reload(false);
  };

  clearObjectProps() {
    this.setState({
      denominazione: "",
      numeroFattura: "",
      dataDocumento: "",
      dataPagamento: "",
      imponibile: 0,
      iva: 0,
      totaleFattura: 0,
      typeGroup: "",
    });
  }

  setDenominazione = (e) => this.setState({ denominazione: e.target.value });
  setNumeroFattura = (e) => this.setState({ numeroFattura: e.target.value });
  setDataDocumento = (e) => this.setState({ dataDocumento: e.target.value });
  setDataPagamento = (e) => this.setState({ dataPagamento: e.target.value });
  setImponibile = (e) => this.setState({ imponibile: e.target.value });
  setIva = (e) => this.setState({ iva: e.target.value });
  setTotaleFattura = (e) => this.setState({ totaleFattura: e.target.value });
  setTipoId = (e) => this.setState({ typeGroup: e.value });

  edit() {
    if (!this.state.showEditDialog) return;

    var e = this.state.lastEditElement;

    var speseType = this.state.speseTypeResult.find(
      (x) => x.value === e.typeGroup._id
    );

    return (
      <div id="createDialog" className="createDialog">
        <form className="marginTop">
          <div className="col-md-12">
            <div className="row">
              <label className="col-md-3">DENOMINAZIONE</label>
              <label className="col-md-3">TIPO</label>
              <label className="col-md-6">NUMERO FATTURA</label>
            </div>
            <div className="row">
              <input
                className="col-md-3"
                type="text"
                defaultValue={e.denominazione}
                onChange={this.setDenominazione}
              />

              <div class="col-md-3">
                <Select
                  className=" basic-single"
                  classNamePrefix="select"
                  defaultValue={speseType}
                  isLoading={false}
                  isClearable={true}
                  isSearchable={true}
                  name="speseType"
                  options={this.state.speseTypeResult}
                  onChange={this.setTipoId}
                />
              </div>

              <input
                className="col-md-6"
                type="text"
                defaultValue={e.numeroFattura}
                onChange={this.setNumeroFattura}
              />
            </div>
          </div>

          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row ">
              <label className="col-md-3">DATA DOCUMENTO</label>
              <label className="col-md-3">DATA PAGAMENTO</label>
            </div>
            <div className="row" name="address">
              <input
                className="col-md-3"
                type="date"
                defaultValue={e.dataDocumento}
                onChange={this.setDataDocumento}
              />
              <input
                className="col-md-3"
                type="date"
                defaultValue={e.dataPagamento}
                onChange={this.setDataPagamento}
              />
            </div>
          </div>

          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row">
              <label className="col-md-4">IMPONIBILE</label>
              <label className="col-md-4">IVA</label>
              <label className="col-md-4">TOTALE FATTURA</label>
            </div>

            <div className="row">
              <input
                className="col-md-4"
                type="number"
                defaultValue={e.imponibile}
                onChange={this.setImponibile}
              />
              <input
                className="col-md-4"
                type="number"
                defaultValue={e.iva}
                onChange={this.setIva}
              />
              <input
                className="col-md-4"
                type="number"
                defaultValue={e.totFattura}
                onChange={this.setTotaleFattura}
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
              <label className="col-md-3">DENOMINAZIONE</label>
              <label className="col-md-3">TIPO</label>
              <label className="col-md-6">NUMERO FATTURA</label>
            </div>
            <div className="row">
              <input
                className="col-md-3"
                type="text"
                value={this.state.denomninazione}
                onChange={this.setDenominazione}
              />

              <div class="col-md-3">
                <Select
                  className=" basic-single"
                  classNamePrefix="select"
                  isLoading={false}
                  isClearable={true}
                  isSearchable={true}
                  name="speseType"
                  options={this.state.speseTypeResult}
                  onChange={this.setTipoId}
                />
              </div>

              <input
                className="col-md-6"
                type="text"
                value={this.state.numeroFattura}
                onChange={this.setNumeroFattura}
              />
            </div>
          </div>

          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row">
              <label className="col-md-3">DATA DOCUMENTO</label>
              <label className="col-md-3">DATA PAGAMENTO</label>
            </div>
            <div className="row">
              <input
                className="col-md-3"
                type="date"
                value={this.state.dataDocumento}
                onChange={this.setDataDocumento}
              />
              <input
                className="col-md-3"
                type="date"
                value={this.state.dataPagamento}
                onChange={this.setDataPagamento}
              />
            </div>
          </div>

          <br></br>
          <br></br>

          <div className="col-md-12">
            <div className="row">
              <label className="col-md-4">IMPONIBILE</label>
              <label className="col-md-4">IVA</label>
              <label className="col-md-4">TOTALE FATTURA</label>
            </div>

            <div className="row">
              <input
                className="col-md-4"
                type="number"
                value={this.state.imponibile}
                onChange={this.setImponibile}
              />
              <input
                className="col-md-4"
                type="number"
                value={this.state.iva}
                onChange={this.setIva}
              />
              <input
                className="col-md-4"
                type="number"
                value={this.state.totaleFattura}
                onChange={this.setTotaleFattura}
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
              onClick={() => {
                this.closeCreateDialog();
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

  render() {
    return (
      <div>
        <table id="index-table" class=" table-for-information  col-md-12">
          <thead>
            <tr class="table-for-information-partial-index">
              <th>DENOMINAZIONE</th>
              <th>TIPO</th>
              <th>NR FATTURA</th>
              <th>DATA D</th>
              <th>DATA P</th>
              <th>IMPONIBILE</th>
              <th>IVA</th>
              <th>TOT FATTURA</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.result &&
              this.state.result.map((x) => {
                try {
                  x.dataDocumento = x.dataDocumento.substring(0, 10);
                } catch {
                  x.dataDocumento = " ";
                }
                try {
                  x.dataPagamento = x.dataPagamento.substring(0, 10);
                } catch {
                  x.dataPagamento = " ";
                }
                return (
                  <tr key={x._id}>
                    <td> {x.denominazione} </td>
                    <td> {x.typeGroup.name} </td>
                    <td> {x.numeroFattura} </td>
                    <td> {x.dataDocumento} </td>
                    <td> {x.dataPagamento} </td>
                    <td> {x.imponibile + "€"} </td>
                    <td> {x.iva + "€"} </td>
                    <td> {x.totFattura + "€"} </td>
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
                          <i id={x._id} className=" remove fa fa-trash"></i>
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
