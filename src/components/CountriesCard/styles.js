import styled from 'styled-components';

export const Container = styled.div`
  .countries-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 30px;

    .country-card {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 240px;
      margin: 20px;
      justify-content: center;
      background: ${(props) =>
        props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        margin-bottom: auto;
      }
      h5 {
        color: ${(props) =>
          props.theme.mode === 'dark'
            ? 'hsl(0, 0%, 100%)'
            : 'hsl(200, 15%, 8%)'};
        padding-bottom: 10px;
      }
      strong {
        padding-bottom: 10px;
        color: ${(props) =>
          props.theme.mode === 'dark'
            ? 'hsl(0, 0%, 100%)'
            : 'hsl(200, 15%, 8%)'};
        span {
          color: ${(props) =>
            props.theme.mode === 'dark' ? '#ccc' : 'hsl(200, 15%, 8%)'};
        }
      }
    }
  }

  @media (max-width: 800px) {
    .countries-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
