import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .goback {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: ${(props) =>
      props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : '#ddd'};
    height: 25px;
    width: 100px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: auto;

    .goback-link {
      color: ${(props) => (props.theme.mode === 'dark' ? '#fff' : '#121212')};
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 25px;
      p {
        padding-left: 5px;
      }
    }
  }
`;
