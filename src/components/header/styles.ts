import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
  background-color: #352317;
`;

export const Img = styled.img`
  width: 20%;
  margin-top: 1em;
`;

export const Title = styled.h1`
  font-family: 'Alegreya', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 48px;
  color: #DAE1AB;
`;

export const Menu = styled.button`
  background: none;
  border: none;

  && :hover {
    opacity: 50%;
  }
`;