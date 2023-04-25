import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: ${props => `${props.width}%`};

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100% ;
  }

`;

export const Input = styled.input`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;

  &:focus,
  &:hover {
    border: 2px solid #E84CE8;
    box-shadow: 2px 2px 2px black;
  }

`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: #fa2828;
`