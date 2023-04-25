import React from 'react';
import { Button } from './Button_styles';

const ButtonComp = ({ text, backgroundColor, color, width, onClick }) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
