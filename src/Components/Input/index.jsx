import React from 'react';
import { Div, ErrorMessage, Input, Label } from './Input_styles';

const InputComp = ({
  type,
  label,
  name,
  value,
  error,
  width,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <Div width={width}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Div>
  );
};

export default InputComp;
