import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  width: 40%;

  @media (min-width: 648px) and (max-width: 770px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    width: 70%;
  }

  @media (max-width: 648px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }

`;

export const Input = styled.input`
  display: flex;
  scale: calc(1.3);
  border: none;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-left: 5px;
`;

export const Span = styled.p`
  font-size: 14px;
  color: #fa2828;
`;
