import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Img,
  Overlay,
  ContainerMenuCarousel,
  ButtonCarousel
} from "./styles";

import banner1 from "../../img/banner/banner1.jpg";
import banner2 from "../../img/banner/banner2.jpg";
import banner3 from "../../img/banner/banner3.jpg";
import banner4 from "../../img/banner/banner4.jpg";
import banner5 from "../../img/banner/banner5.jpg";

const banners = [banner1, banner2, banner3, banner4, banner5];

export function Banner() {
  const [imgBanner, setImgBanner] = useState(banner1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para alterar o banner
  const changeBanner = (index: number) => {
    setImgBanner(banners[index]);
    setCurrentIndex(index);
  };

  // Função para mudar para o próximo banner
  const nextBanner = useCallback(() => {
    const nextIndex = (currentIndex + 1) % banners.length;
    changeBanner(nextIndex);
  }, [currentIndex]);

  // Configura o intervalo para trocar o banner automaticamente
  useEffect(() => {
    const interval = setInterval(nextBanner, 3000); // Troca a cada 3 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [nextBanner]);

  return (
    <Container>
      <Img src={imgBanner} alt="banner" />
      <Overlay />
      <ContainerMenuCarousel>
        {banners.map((_, index) => (
          <ButtonCarousel
            key={index}
            onClick={() => changeBanner(index)}
            style={{
              backgroundColor: currentIndex === index ? "#DAE1AB" : "#352317",
            }}
          />
        ))}
      </ContainerMenuCarousel>
    </Container>
  );
}
