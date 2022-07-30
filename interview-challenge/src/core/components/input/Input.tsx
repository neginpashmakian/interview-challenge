import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { EColor } from "../../model";
import { Label } from "../typography";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label: string;
  //TODO Fix `name` require
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = ({
  value,
  label,
  name,
  placeholder,
  defaultValue,
  handleChange,
}) => {
  const { register } = useFormContext();
  return (
    <Labels>
      {label}
      <InputWrapper
        type={name}
        placeholder={placeholder}
        value={value}
        {...register(name)}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
      {/* <span className="validation-errors">{state.validationErrs[name]}</span> */}
    </Labels>
  );
};

const InputWrapper = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${EColor.Gray400};
  background-color: ${EColor.Gray200};
`;

const Labels = styled(Label)`
  color: ${EColor.Gray700};
  width: 100%;
`;
