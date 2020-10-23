import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.theme.mode === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  width: 100vw;
  height: 100px;
  color: ${(props) =>
    props.theme.mode === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .theme {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    span {
      padding-left: 10px;
    }
  }
  .theme:hover {
    opacity: 0.8;
  }
`;
