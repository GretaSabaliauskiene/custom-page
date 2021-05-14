import React, { Component } from "react";

class Calculator extends Component {
  state = {
    inputs: {
      productPrice: "",
      transferPriceBeforeEU: "",
      customsProcent: "",
      transferPriceInEU: "",
      otherCosts: "",
    },
    outPuts: {
      muitoSuma: "",
      pvmSuma: "",
      viso: "",
    },
    hiddenCalculations: {
      verteSuMuitu: "",
      pvmPagrindas: "",
      muituApmokestinamojiVerte: "",
    },
  };

  handleChange = (e) => {
    const inputs = { ...this.state.inputs };

    inputs[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ inputs });
  };

  handleSubmit = (e) => {
    const hiddenCalculations = { ...this.state.hiddenCalculations };

    const outPuts = { ...this.state.outPuts };

    const muitoSuma =
      (parseInt(this.state.inputs.productPrice) +
        parseInt(this.state.inputs.transferPriceBeforeEU)) *
      (this.state.inputs.customsProcent / 100);

    outPuts.muitoSuma = Number(muitoSuma.toFixed(2));

    const muituApmokestinamojiVerte =
      parseInt(this.state.inputs.productPrice) +
      parseInt(this.state.inputs.transferPriceBeforeEU);

    const verteSuMuitu = muituApmokestinamojiVerte + muitoSuma;

    const pvmPagrindas =
      verteSuMuitu +
      parseInt(this.state.inputs.transferPriceInEU) +
      parseInt(this.state.inputs.otherCosts);

    const pvmSuma = pvmPagrindas * (21 / 100);
    outPuts.pvmSuma = pvmSuma.toFixed(2);

    const viso = pvmSuma + muitoSuma;

    hiddenCalculations.muituApmokestinamojiVerte = muituApmokestinamojiVerte;
    hiddenCalculations.verteSuMuitu = verteSuMuitu;
    hiddenCalculations.pvmPagrindas = pvmPagrindas;

    outPuts.viso = viso.toFixed(2);

    this.setState({ outPuts });

    this.setState({ hiddenCalculations });

    e.preventDefault();
  };

  render() {
    const { inputs } = this.state;
    return (
      <div className="calculator container">
        <div className="card rounded-3 shadow p-3 mb-5 bg-white rounded">
          <div className="form-label border-bottom row">
            <div className="col text-center">
              <h1 className="calculator__title">
                Importo mokesčių skaičiuoklė
              </h1>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} id="calculator__form">
            <div className="form-group mt-4 pt-4">
              <label className="mb-2" htmlFor="product_price ">
                Prekės kaina *{" "}
              </label>

              <input
                autoFocus
                value={inputs.productPrice}
                onChange={this.handleChange}
                id="product_price"
                name="productPrice"
                className="form-control input-lg"
                type="number"
                minLength="1"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group mt-4 pb-4">
              <label className="mb-2" htmlFor="transfer_price_before_eu ">
                Atgabenimo iki ES sienos kaina *
              </label>
              <input
                value={inputs.transferPriceBeforeEU}
                name="transferPriceBeforeEU"
                onChange={this.handleChange}
                id="transfer_price_before_eu"
                className="form-control"
                type="number"
                minLength="1"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group pb-4">
              <label className="mb-2" htmlFor="customs_procent">
                Muito norma (procentais) *
              </label>
              <div className="info-popup" id="info-popup">
                <svg
                  style={{ marginLeft: "0.5rem" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <span className="info-popup__text">
                  Nežinote muito normos? Skambinkite:
                  <a style={{ color: "#4fa1dc" }} href="tel:+37061124074">
                    +37061124074
                  </a>
                </span>
              </div>
              <input
                name="customsProcent"
                onChange={this.handleChange}
                value={inputs.customsProcent}
                id="customs_procent"
                type="number"
                className="form-control"
                minLength="1"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group pb-4">
              <label className="mb-2" htmlFor="transfer_price_in_eu">
                Atgabenimo nuo ES sienos iki išmuitinimo vietos kaina *
              </label>
              <input
                value={inputs.transferPriceInEU}
                onChange={this.handleChange}
                name="transferPriceInEU"
                id="transfer_price_in_eu"
                type="number"
                className="form-control"
                minLength="1"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group pb-5">
              <label className="mb-2" htmlFor="other_costs">
                Kitos išlaidos iki išmuitinimo (pvz.: muitinės tarpininko,
                sandėliavimo, prekių patikros ir pan.)
              </label>
              <input
                value={inputs.otherCosts}
                name="otherCosts"
                id="other_costs"
                onChange={this.handleChange}
                className="form-control"
                type="number"
                minLength="1"
                maxLength="10"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-8">
                <button
                  id="calculator__button"
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  Skaičiuoti
                </button>
              </div>
            </div>
            <div
              className="
                row
                justify-content-center
                align-items-center
                calculator__results
                mt-5
                mb-4
                d-flex
              "
            >
              <div className="col-sm-6 col-lg-2 border-bottom">
                <h4 className="calculator__results__heading">Muito suma:</h4>$
              </div>
              <div
                className="col-sm-6 col-lg-2 calculator__result"
                id="customs_price"
              >
                0{" "}
                <span style={{ color: "#009c79" }}>
                  {" "}
                  {this.state.outPuts.muitoSuma}€
                </span>
              </div>
              <div className="col-sm-6 col-lg-2 border-bottom">
                <h4 className="calculator__results__heading">PVM suma:</h4>
              </div>
              <div className="col calculator__result" id="pvm_price">
                0{" "}
                <span style={{ color: "#009c79" }}>
                  {" "}
                  {this.state.outPuts.pvmSuma}€
                </span>
              </div>
              <div className="col-sm-6 col-lg-2 border-bottom">
                <h4 className="calculator__results__heading">Viso:</h4>
              </div>
              <div className="col calculator__result" id="total_price">
                <span style={{ color: "#009c79" }}>
                  {" "}
                  {this.state.outPuts.viso}€
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
