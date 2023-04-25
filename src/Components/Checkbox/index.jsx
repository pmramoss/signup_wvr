import React from 'react'
import { Div, Input, Label, Span } from './Checkbox_styles'

const CheckboxComp = ({name, label, onChange, status}) => {
  return (
    <Div>
          <Input type="checkbox" name={name} onChange={onChange} />
          <Label htmlFor={name}>{label}</Label>
          {status && <Span>You must accept the terms</Span>}
    </Div>
  )
}

export default CheckboxComp;
