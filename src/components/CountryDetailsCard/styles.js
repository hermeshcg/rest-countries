import styled from 'styled-components';

export const Container = styled.div`
  .country-container {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      width: 500px;
      height: 350px;
      margin-right: 100px;
      margin-left: 100px;
    }

    .right-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;
      h1 {
        color: ${(props) =>
          props.theme.mode === 'dark'
            ? 'hsl(0, 0%, 100%)'
            : 'hsl(200, 15%, 8%)'};
        margin-bottom: 50px;
        margin-top: 0;
      }

      .country-infos {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .c1 {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          strong {
            color: ${(props) =>
              props.theme.mode === 'dark' ? '#fff' : '#121212'};
            font-size: 16px;
            margin-bottom: 10px;
            span {
              color: ${(props) =>
                props.theme.mode === 'dark' ? '#eee' : '#121212'};
            }
          }
        }

        .c2 {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          margin-left: 50px;
          margin-bottom: auto;

          strong {
            color: ${(props) =>
              props.theme.mode === 'dark' ? '#fff' : '#121212'};
            margin-bottom: 10px;
            font-size: 16px;
            span {
              color: ${(props) =>
                props.theme.mode === 'dark' ? '#eee' : '#121212'};
            }
          }
        }
      }

      .border-countries {
        text-align: start;
        margin-top: 20px;
        color: ${(props) => (props.theme.mode === 'dark' ? '#fff' : '#121212')};

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        width: 100%;

        strong {
          font-weight: bold;
          font-size: 16px;
        }

        .border-link {
          font: 14px Nunito, sans-serif;
          text-decoration: none;
          color: ${(props) =>
            props.theme.mode === 'dark' ? '#fff' : '#121212'};

          padding: 5px;
          margin: 0 5px;

          background: ${(props) =>
            props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
          border-radius: 4px;
          border: none;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .country-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 90%;
        height: 150px;
        object-fit: cover;
        margin-bottom: 100px;
      }

      .right-side {
        h1 {
          margin-top: 120px;
          margin-bottom: 40px;
        }
        .country-infos {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .c1 {
            width: 250px;
            strong {
              font-size: 20px;
              span {
                font-size: 18px;
              }
            }
          }
          .c2 {
            strong {
              font-size: 20px;
              span {
                font-size: 18px;
              }
            }
          }
        }
        .border-countries {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          strong {
            font-size: 20px;
          }

          .border-link {
            padding: 5px;
            margin: 5px 0;
          }
        }
      }
    }
  }
`;
