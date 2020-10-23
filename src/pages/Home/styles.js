import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)'};
  width: 100vw;
  height: 100%;

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
      height: 50px;
      width: 500px;
      padding-left: 30px;
      background: ${(props) =>
        props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
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

      .search-by-region {
        .select-selected:after {
          position: absolute;
          content: '';
          top: 14px;
          right: 10px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-color: #fff transparent transparent transparent;
        }

        /* Point the arrow upwards when the select box is open (active): */
        .select-selected.select-arrow-active:after {
          border-color: transparent transparent #fff transparent;
          top: 7px;
        }
      }
    }
  }

  .countries-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 30px;

    .country-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 240px;
      margin: 20px;
      justify-content: center;
      background: ${(props) =>
        props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
      img {
        width: 240px;
        height: 150px;
        padding-bottom: 5px;
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
`;
