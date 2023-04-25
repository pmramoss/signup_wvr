import styled from 'styled-components';

export const Button = styled.button`
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     font-size: 16px;
     font-weight: 600;
     border-radius: 10px;
     padding: 10px;
     height: 40px;
     margin: 30px 10px 0 0;
     width: ${props => `${props.width}%`};
     background-color: ${props => `#${props.backgroundColor}`};
     color: ${props => `#${props.color}`};

     &:hover {
          border: 2px solid #E84CE8;
          box-shadow: 2px 1px 1px #E84CE8;
     }

     @media (max-width: 770px) {
          display: flex;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          border-radius: 10px;
          padding: 10px;
          height: 40px;
          margin: 30px 10px 0 0;
          width: 100%;
          background-color: ${props => `#${props.backgroundColor}`};
          color: ${props => `#${props.color}`};
     }
`;
