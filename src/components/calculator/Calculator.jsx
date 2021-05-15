import React, { Component } from "react";
import ArtickleH2 from "../ArtickleH2";
import CalculatorForm from "./CalculatorForm";
import CalculatorInput from "../calculator/CalculatorInput";
import CalculatorButton from "./CalculatorButton";
import Joi from "joi-browser";
import CalculatorResultsHeading from "./CalculatorResultsHeading";
import CalculatorResultsNumber from "./CalculatorResultsNumber";
import Input from "./Input";
import InfoPopup from "./InfoPopup";

class Calculator extends Component {
  schema = {
    productPrice: Joi.number().required(),
  };

  validate = () => {
    // Joi.validate(this.state.inputs, this.schema);
    const errors = {};

    if (this.state.inputs.productPrice.trim() === "")
      errors.productPrice = "iveskite";
    return Object.keys(errors).length === 0 ? null : errors;
  };

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
    errors: {
      productPrice: "Įveskite prekės   kainą",
      // transferPriceBeforeEU: "Įveskite atgabenimo iki EU sienos kainą ",
      // customsProcent: "Įveskite muito normą",
      // transferPriceInEU:
      //   "Įveskite atgabenimo nuo EU sienos iki išmuitinimo vietos kainą",
      // otherCosts: "",
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
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });

    if (errors) return;

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
              <Input
                name="productPrice"
                value={inputs.productPrice}
                label="Prekės kaina*"
                onChange={this.handleChange}
              />
              <Input
                name="transferPriceBeforeEU"
                value={inputs.transferPriceBeforeEU}
                label="Atgabenimo iki ES sienos kaina *"
                onChange={this.handleChange}
              />

              <div className="form-group pt-4">
                <label className="mb-2" htmlFor="customsProcent">
                  Muito norma (procentais) *
                </label>
                <InfoPopup />
                <CalculatorInput
                  name="customsProcent"
                  onChange={this.handleChange}
                  value={inputs.customsProcent}
                  id="customsProcent"
                  type="number"
                  className="form-control"
                  minLength="1"
                  maxLength="10"
                  required
                ></CalculatorInput>
              </div>
              <Input
                name="transferPriceInEU"
                value={inputs.transferPriceInEU}
                label="Atgabenimo nuo ES sienos iki išmuitinimo vietos kaina *"
                onChange={this.handleChange}
              />
              <Input
                name="otherCosts"
                value={inputs.otherCosts}
                label="Kitos išlaidos iki išmuitinimo (pvz.: muitinės tarpininko,
                  sandėliavimo, prekių patikros ir pan.)"
                onChange={this.handleChange}
              />

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
