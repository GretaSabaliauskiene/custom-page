import React, { Component } from "react";
import CurrencyFormat from "react-currency-format";
import ArtickleH2 from "../ArtickleH2";
import CalculatorForm from "./CalculatorForm";
import CalculatorInput from "../calculator/CalculatorInput";
import CalculatorButton from "./CalculatorButton";
import Joi from "joi-browser";
import CalculatorResultsHeading from "./CalculatorResultsHeading";
import CalculatorResultsNumber from "./CalculatorResultsNumber";
import Input from "./Input";
import InfoPopup from "./InfoPopup";
import styled from "styled-components";

const Error = styled.span`
  color: red;
  padding-top: 2rem;
`;

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
    errors: {},
  };
  errors = {};

  schema = {
    productPrice: Joi.number()
      .positive()
      .required()
      .max(999999999)
      .label("Prekės kaina"),
    transferPriceBeforeEU: Joi.number()
      .positive()
      .required()
      .max(999999999)
      .label("Atgabenimo iki ES sienos kaina"),
    customsProcent: Joi.number()
      .positive()
      .required()
      .less(100)
      .label("Muito norma"),
    transferPriceInEU: Joi.number()
      .positive()
      .required()
      .max(999999999)
      .label("Atgabenimo nuo ES sienos iki išmuitinimo vietos kaina"),
    otherCosts: Joi.number().allow("").label("Kitos išlaidos iki išmuitinimo"),
  };

  componentDidMount() {
    document.getElementById("productPrice").focus();
    document.getElementById("info-popup").onclick = function () {
      this.classList.toggle("show");
    };
  }

  validate = () => {
    const result = Joi.validate(this.state.inputs, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
      return errors;
    }
    console.log(result);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const inputs = { ...this.state.inputs };

    inputs[input.name] = input.value;
    this.setState({ inputs, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

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
      parseInt(this.state.inputs.otherCosts || 0);

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
    const { inputs, errors } = this.state;
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
                error={errors.productPrice}
                autofocus
                required
              />
              <Input
                name="transferPriceBeforeEU"
                value={inputs.transferPriceBeforeEU}
                label="Atgabenimo iki ES sienos kaina *"
                onChange={this.handleChange}
                error={errors.transferPriceBeforeEU}
                required
              />

              <div className="form-group pt-4">
                <label className="mb-2" htmlFor="customsProcent">
                  Muito norma (procentais) *
                </label>
                <InfoPopup ref={this.popup} />
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
                {errors && <Error>{errors.customsProcent}</Error>}
              </div>
              <Input
                name="transferPriceInEU"
                value={inputs.transferPriceInEU}
                label="Atgabenimo nuo ES sienos iki išmuitinimo vietos kaina *"
                onChange={this.handleChange}
                error={errors.transferPriceInEU}
                required
              />
              <Input
                name="otherCosts"
                value={inputs.otherCosts}
                label="Kitos išlaidos iki išmuitinimo (pvz.: muitinės tarpininko,
                  sandėliavimo, prekių patikros ir pan.)"
                onChange={this.handleChange}
                error={errors.otherCosts}
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
                      <CurrencyFormat
                        value={this.state.outPuts.muitoSuma}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
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
                      <CurrencyFormat
                        value={this.state.outPuts.pvmSuma}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
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
                      <CurrencyFormat
                        value={this.state.outPuts.viso}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
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
