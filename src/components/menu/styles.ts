import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #DAE1AB;
  margin-top: 2em;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContainerMenu = styled.div`
  width: 95%;
  display: flex;
  gap: 4px;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

export const Box = styled.button`
border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 20px;
  background-color: #B89582;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  &:hover {
    scale: calc(120%);
  }

  @media (max-width: 480px) {
    width: 90%;
    max-height: 250px;
  }
`;

export const Img = styled.img`
  width: 98%;
  height: 98%;
  border-radius: 20px;
  max-height: 600px;

  @media (max-width: 480px) {
  }
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 20px;
  background-color: #B89582;
  margin-top: 2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  @media (max-width: 480px) {
    width: 90%;
    max-height: 250px;
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 55%;
  border-radius: 20px;
  background-color: #FFFFFF;
  margin-top: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  position: absolute;
  opacity: 40%;
  margin-bottom: 1em;

  @media (max-width: 480px) {
    width: 90%;
    max-height: 250px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  color: #352317;
  z-index: 100;

  @media (max-width: 480px) {
  }
`;