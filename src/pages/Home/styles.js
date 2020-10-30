import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)'};
  width: 100vw;
  min-height: 100vh;

  .container-search {
    padding: 30px 60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .input-area {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-radius: 8px;
      height: 50px;
      width: 500px;
      background: ${(props) =>
        props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
      button {
        height: 100%;
        width: 10%;
        border: none;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        background: ${(props) =>
          props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
      }

      button:hover {
        cursor: pointer;
        opacity: 0.5;
      }

      input {
        margin-left: 10px;
        height: 100%;
        width: 90%;
        background: none;
        border: none;
        color: ${(props) =>
          props.theme.mode === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)'};
      }
      input::placeholder {
        color: ${(props) =>
          props.theme.mode === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)'};
      }
    }
  }

  @media (max-width: 800px) {
    .container-search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .input-area {
        width: 90%;
        margin: 10px 0;
      }
    }
  }
`;
