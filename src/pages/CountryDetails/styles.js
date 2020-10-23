import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)'};
`;
