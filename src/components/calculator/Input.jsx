import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1.8rem;
  padding: 2rem 1.2rem;

  @media screen and (max-width: 990px) {
    font-size: 1.5rem;
    padding: 1.3rem 0.9rem;
  }
`;
const Input = ({ name, value, onChange, label }) => {
  return (
    <div className="form-group pt-4">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <StyledInput
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="form-control input-lg"
        type="number"
        minLength="1"
        maxLength="10"
      ></StyledInput>
    </div>
  );
};

export default Input;
