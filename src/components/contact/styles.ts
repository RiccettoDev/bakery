import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  margin-top: 4em;
  color: #DAE1AB;

  @media (max-width: 480px) {
    margin-top: 1em;
  }
`;

export const Input = styled.input`
  background-color: #352317;
  color: #DAE1AB;
  width: 70%;
  height: 36px;
  border-radius: 20px;
  margin-bottom: 1em;
  padding-left: 2em;

  &::placeholder {
    color: #DAE1AB;
  }

  @media (max-width: 480px) {
  }
`;

export const InputText = styled.input`
  background-color: #352317;
  color: #DAE1AB;
  width: 70%;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 1em;
  padding-left: 2em;

  &::placeholder {
    color: #DAE1AB;
  }

  @media (max-width: 480px) {
  }
`;

export const Send = styled.button`
  background-color: #352317;
  color: #DAE1AB;
  border: none;
  border-radius: 15px;
  padding: 12px;

  &:hover {
    opacity: 50%;
  }

  @media (max-width: 480px) {
  }
`;

export const ContainerIcons = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 2em;

  @media (max-width: 480px) {
  }
`;

export const Box = styled.button`
  background-color: #352317;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 2em;
  padding: 1em;
  border: none;

  &:hover {
    opacity: calc(50%);
  }

  @media (max-width: 480px) {
  }
`;