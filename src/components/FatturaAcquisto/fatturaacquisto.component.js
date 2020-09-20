import React, { Component } from "react";
import BaseComponent from "../Shared/base.component.js";
import axios from "axios";
import FooterModel from "../../models/footer.model";

export default class FatturaAcquisto extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_DATAURL_FATTURACQUISTO_PROD,
      addurl: process.env.REACT_APP_DATAURL_ADDFATTURACQUISTO_PROD,
      denominazione: "",
      numeroFattura: "",
      dataDocumento: "",
      dataPagamento: "",
      imponibile: "",
      iva: "",
      totaleFattura: "",
      tipoId: "",
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
      denominazione: this.state.denominazione,
      numeroFattura: this.state.numeroFattura,
      dataDocumento: this.state.dataDocumento,
      dataPagamento: this.state.dataPagamento,
      imponibile: this.state.imponibile,
      iva: this.state.iva,
      totaleFattura: this.state.totaleFattura,
      tipoId: this.state.tipoId,
    };

    this.createElement(this.state.addurl, fileToPost);
    this.closeCreateDialog();
    window.location.reload(false);
  };

  setDenominazione = (e) => this.setState({ denominazione: e.target.value });
  setNumeroFattura = (e) => this.setState({ numeroFattura: e.target.value });
  setDataDocumento = (e) => this.setState({ dataDocumento: e.target.value });
  setDataPagamento = (e) => this.setState({ dataPagamento: e.target.value });
  setImponibile = (e) => this.setState({ imponibile: e.target.value });
  setIva = (e) => this.setState({ iva: e.target.value });
  setTotaleFattura = (e) => this.setState({ totaleFattura: e.target.value });
  setTipoId = (e) => this.setState({ tipoId: e.target.value });

  create() {
    if (!this.state.showCreateDialog) return;

    //prendi i tipi

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
                value={this.state.denominazione}
                onChange={this.setDenominazione}
              />
              <input
                className="col-md-3"
                type="text"
                value={this.state.tipoId}
                onChange={this.setTipoId}
              />
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
              <label className="col-md-6">DATA DOCUMENTO</label>
              <label className="col-md-6">DATA PAGAMENTO</label>
            </div>
            <div className="row" name="address">
              <input
                className="col-md-6"
                type="date"
                value={this.state.dataDocumento}
                onChange={this.setDataDocumento}
              />
              <input
                className="col-md-6"
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
                return (
                  <tr key={x._id}>
                    <td> {x.denominazione} </td>
                    <td> {x.tipo.name} </td>
                    <td> {x.numeroFattura} </td>
                    <td> {x.dataDocumento} </td>
                    <td> {x.dataPagamento} </td>
                    <td> {x.imponibile + "€"} </td>
                    <td> {x.iva + "€"} </td>
                    <td> {x.totFattura + "€"} </td>
                    <td className="cell-selection-item BiancoOpaco">
                      <div className="actionSection">
                        <div className="iconAction" title="Modifica">
                          <i className=" edit fa fa-edit"></i>
                        </div>
                        <div title="Rimuovi" onClick={(e) => this.delete(e)}>
                          <i id={x._id} className=" remove fa fa-trash"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {this.create()}
        {this.buildFooter()}
      </div>
    );
  }
}
