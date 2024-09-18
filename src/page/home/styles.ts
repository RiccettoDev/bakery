import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
  background-color: #745236;
  color: #FFFFFF;

  @media (max-width: 480px) {
    height: 100vh;
  }
`;