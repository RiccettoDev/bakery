import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
  background-color: #352317;
  position: fixed;
  z-index: 500;

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

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  background-color: #352317;
  position: fixed;
  right: 0;
  top: 0;
  width: 40%;
  height: 100vh;
  z-index: 100;

  @media (max-width: 480px) {
    width: 70%;
  }
`;

export const CloseButton = styled.button`
  background-color: #352317;
  border: none;
  position: absolute;
  top: 2em;
  right: 1em;
  
  & :hover {
    opacity: 40%;
  }
  `;

export const ContainerMenu = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  padding: 42px;
  color: #DAE1AB;
  
  @media (max-width: 480px) {
  }
`;

export const ButtonMenu = styled.button`
  border: none;
  background: none;
  color: #DAE1AB;
  margin-left: 9em;

  &:Hover {
    opacity: 50%;
  }
  
  @media (max-width: 480px) {
    margin-left: 2em;
  }
`;