import styled from "styled-components";

export const  Title = styled.h1`
     font-size: ${props => `${props.fontSize}px`};
     font-weight: ${props => `${props.fontWeight}`};
     color: ${props => `#${props.color}`};
     margin: 10px 0 40px 0 ;
     width: 100%;
     display: flex;
     justify-content: center;
`