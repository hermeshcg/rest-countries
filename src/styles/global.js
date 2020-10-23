import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) =>
      props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)'};
  }

  h1{
    font: 26px Nunito, sans-serif;
    font-weight: bold;
  }
  span{
    font: 16px Nunito, sans-serif;
    font-weight: 600;
  }
`;
