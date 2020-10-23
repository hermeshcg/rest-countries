import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1{
    font: 26px Nunito, sans-serif;
    font-weight: bold;
  }

  h5{
    font: 20px Nunito, sans-serif;
    font-weight: bold;
  }

  p{
    font: 14px Nunito, sans-serif;
    font-weight: bold;
  }
  span{
    font: 14px Nunito, sans-serif;
    font-weight: 300;
  }
  strong{
    font: 14px Nunito, sans-serif;
    font-weight: 600;
  }
`;
