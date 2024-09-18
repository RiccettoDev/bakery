import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  display: flex;
  color: #DAE1AB;
  gap: 5%;
  margin-top: 6em;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const InfoLeft = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  text-align: start;

  @media (max-width: 480px) {
    width: 95%;
    text-align: center;
  }
`;

export const InfoRight = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  text-align: start;

  @media (max-width: 480px) {
    width: 95%;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 95%;
  border-radius: 20px;
  margin-top: 1em;
  margin-bottom: 1em;

  &:hover {
    opacity: 50%;
  }

  @media (max-width: 480px) {
  }
`;