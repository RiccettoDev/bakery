import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
  background-color: #352317;

  @media (max-width: 480px) {
    height: 65px;
  }
`;

export const Img = styled.img`
  width: 20%;
  margin-top: 1em;
  margin-left: 2em;

  @media (max-width: 480px) {
    width: 50%;
    margin-left: 3em;
    margin-top: -1em;
  }
`;

export const Title = styled.h1`
  font-family: 'Alegreya', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 48px;
  color: #DAE1AB;

  @media (max-width: 480px) {
    font-size: 24px;
    position: absolute;
    top: 3.5em;
    margin-left: 1.5em;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  margin-right: 2em;

  & :hover {
    opacity: 50%;
  }

  @media (max-width: 480px) {
    margin-right: -1em;
  }
`;