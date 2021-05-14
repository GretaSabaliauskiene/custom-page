import React, { Component } from "react";
import ArtickleH2 from "../ArtickleH2";
import CalculatorForm from "./CalculatorForm";
import CalculatorInput from "../calculator/CalculatorInput";
import CalculatorButton from "./CalculatorButton";
import SmallHeading from "../SmallHeading";
import CalculatorResultsHeading from "./CalculatorResultsHeading";
import CalculatorResultsNumber from "./CalculatorResultsNumber";

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

  componentDidMount() {
    document.getElementById("info-popup").onclick = function () {
      this.classList.toggle("show");
    };
  }

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
          <div className="container">
            <div className="form-label border-bottom row">
              <div className="col text-center">
                <ArtickleH2>Importo mokesčių skaičiuoklė</ArtickleH2>
              </div>
            </div>
            <CalculatorForm onSubmit={this.handleSubmit}>
              <div className="form-group mt-4 pt-4">
                <label className="mb-2" htmlFor="product_price text-dark ">
                  Prekės kaina *{" "}
                </label>
                <CalculatorInput
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
                ></CalculatorInput>
              </div>

              <div className="form-group mt-4 pb-4">
                <label className="mb-2" htmlFor="transfer_price_before_eu ">
                  Atgabenimo iki ES sienos kaina *
                </label>
                <CalculatorInput
                  value={inputs.transferPriceBeforeEU}
                  name="transferPriceBeforeEU"
                  onChange={this.handleChange}
                  id="transfer_price_before_eu"
                  className="form-control"
                  type="number"
                  minLength="1"
                  maxLength="10"
                  required
                ></CalculatorInput>
              </div>

              <div className="form-group pb-4">
                <label className="mb-2" htmlFor="customs_procent">
                  Muito norma (procentais) *
                </label>
                <div className="info-popup ml-3" id="info-popup">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
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
                <CalculatorInput
                  name="customsProcent"
                  onChange={this.handleChange}
                  value={inputs.customsProcent}
                  id="customs_procent"
                  type="number"
                  className="form-control"
                  minLength="1"
                  maxLength="10"
                  required
                ></CalculatorInput>
              </div>
              <div className="form-group pb-4">
                <label className="mb-2" htmlFor="transfer_price_in_eu">
                  Atgabenimo nuo ES sienos iki išmuitinimo vietos kaina *
                </label>
                <CalculatorInput
                  value={inputs.transferPriceInEU}
                  onChange={this.handleChange}
                  name="transferPriceInEU"
                  id="transfer_price_in_eu"
                  type="number"
                  className="form-control"
                  minLength="1"
                  maxLength="10"
                  required
                ></CalculatorInput>
              </div>
              <div className="form-group pb-5">
                <label className="mb-2" htmlFor="other_costs">
                  Kitos išlaidos iki išmuitinimo (pvz.: muitinės tarpininko,
                  sandėliavimo, prekių patikros ir pan.)
                </label>
                <CalculatorInput
                  value={inputs.otherCosts}
                  name="otherCosts"
                  id="other_costs"
                  onChange={this.handleChange}
                  className="form-control"
                  type="number"
                  minLength="1"
                  maxLength="10"
                ></CalculatorInput>
              </div>
              <div className="row mt-5 justify-content-center">
                <CalculatorButton
                  className="btn btn-dark w-50"
                  id="calculator__button"
                  type="submit"
                >
                  Skaičiuoti
                </CalculatorButton>
              </div>
              <div
                className="
                row
                justify-content-center
                align-items-center
                calculator__results
                pt-5
                mt-5
                mb-4
                d-flex
              "
              >
                <div className="col-5  border-bottom">
                  <CalculatorResultsHeading>
                    Muito suma:
                  </CalculatorResultsHeading>
                </div>
                <CalculatorResultsNumber className="col-6">
                  <span style={{ color: "#009c79" }}>
                    <span style={{ color: "black" }}>
                      {this.state.outPuts.muitoSuma}
                    </span>{" "}
                    €
                  </span>
                </CalculatorResultsNumber>

                <div className="col-5 border-bottom">
                  <CalculatorResultsHeading>PVM suma:</CalculatorResultsHeading>
                </div>
                <CalculatorResultsNumber className="col-6">
                  <span style={{ color: "#009c79" }}>
                    <span style={{ color: "black" }}>
                      {" "}
                      {this.state.outPuts.pvmSuma}
                    </span>
                    €
                  </span>
                </CalculatorResultsNumber>

                <div className="col-5 border-bottom">
                  <CalculatorResultsHeading>Viso:</CalculatorResultsHeading>
                </div>
                <CalculatorResultsNumber className="col-6">
                  <span style={{ color: "#009c79" }}>
                    <span style={{ color: "black" }}>
                      {this.state.outPuts.viso}
                    </span>{" "}
                    €
                  </span>
                </CalculatorResultsNumber>
              </div>
            </CalculatorForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
