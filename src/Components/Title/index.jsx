import React from 'react';
import { Title } from './Title_styles';

const TitleComp = ({ text, fontSize, fontWeight, color }) => {
  return (
    <Title fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </Title>
  );
};

export default TitleComp;
