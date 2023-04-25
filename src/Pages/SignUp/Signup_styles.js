import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  margin: auto;
  height: 100vh;

  @media (max-width: 770px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
    height: 100vh;

    @media (max-width: 413px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin: auto;
      height: 100vh;
  }
}

`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff76;
  border-radius: 10px;
  width: 100%;
  padding: 40px;

  @media (min-width: 413px) and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff76;
    border-radius: 10px;
    width: 100%;
    padding: 30px;
  }
`;

