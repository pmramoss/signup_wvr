import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  margin: auto;
  height: 100vh;

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    height: 100vh;
  }

`;