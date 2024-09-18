import styled from 'styled-components';

export const Container = styled.div`
  width: 105%;
  display: flex;
  justify-content: center;
  position: relative; /* Importante para garantir que o Overlay e o Carousel estejam na posição correta */
  padding-top: 9.2em;

  @media (max-width: 480px) {
    padding-top: 8em;
  }
`;

export const Img = styled.img`
  width: 90%;
  height: 500px; /* Defina uma altura fixa para todas as imagens */
  object-fit: cover; /* Mantém o aspecto da imagem, cortando se necessário */
  border-radius: 20px;

  @media (max-width: 480px) {
    height: 300px; /* Ajuste a altura para telas menores */
  }
`;

export const Overlay = styled.div`
  width: 90%;
  height: 500px; /* Mesmo tamanho que a imagem */
  border-radius: 20px;
  background-color: #FFFFFF;
  position: absolute;
  opacity: 40%;
  z-index: 10;

  @media (max-width: 480px) {
    height: 300px; /* Ajuste também para telas menores */
  }
`;

export const ContainerMenuCarousel = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  padding: 10px;
  position: absolute;
  gap: 6px;
  bottom: 0;
  z-index: 100;

  @media (max-width: 480px) {
    height: 5%;
  }
`;

export const ButtonCarousel = styled.button`
  border: none;
  background-color: #352317;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  &:hover {
    opacity: 50%;
  }

  @media (max-width: 480px) {
  }
`;
