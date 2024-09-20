import {
  Container,
  ContainerMenu,
  Box,
  Img,
  BoxImg,
  Overlay,
  Title
} from "./styles";

import bread from "../../img/menu/bread.jpg"
import cakes from "../../img/menu/cakes.jpg"
import candy from "../../img/menu/candy.jpg"
import cookie from "../../img/menu/cookie.jpg"
import snack from "../../img/menu/snack.jpg"
import { useCallback, useEffect, useState } from "react";

const images = [bread, cakes, candy, cookie, snack]
const itens = ["Pães", "Bolos", "Doces", "Biscoitos", "Lanches"]

export function Menu() {
  const [imgMenu, setImgMenu] = useState(bread);
  const [itensMenu, setItensMenu] = useState("Pães");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para alterar a imagem
  const changeImage = (index: number) => {
    setImgMenu(images[index]);
    setItensMenu(itens[index])
    setCurrentIndex(index);
  };

  // Função para mudar para a próxima imagem
  const nextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeImage(nextIndex);
  }, [currentIndex]);

  // Configura o intervalo para trocar o banner automaticamente
  useEffect(() => {
    const interval = setInterval(nextImage, 6000); // Troca a cada 6 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [nextImage]);

  // altera imagens de acordo com a seleção
  const selectImg1 = () => {
    setImgMenu(bread)
    setItensMenu("Pães")
  }

  const selectImg2 = () => {
    setImgMenu(cakes)
    setItensMenu("Bolos")
  }

  const selectImg3 = () => {
    setImgMenu(candy)
    setItensMenu("Doces")
  }

  const selectImg4 = () => {
    setImgMenu(cookie)
    setItensMenu("Biscoitos")
  }

  const selectImg5 = () => {
    setImgMenu(snack)
    setItensMenu("Lanches")
  }

  return (
    <Container id="Menu">
      <h1>Nosso Cardápio</h1>
      <h2 style={{ textAlign: "center", marginBottom: "2em" }}>Trabalhas com os melhores e mais variados produtos</h2>
      <ContainerMenu>
        <Box onClick={selectImg1}>
          <Img src={bread} alt="bread" />
        </Box>
        <Box onClick={selectImg2}>
          <Img src={cakes} alt="cakes" />
        </Box>
        <Box onClick={selectImg3}>
          <Img src={candy} alt="candy" />
        </Box>
        <Box onClick={selectImg4}>
          <Img src={cookie} alt="cookie" />
        </Box>
        <Box onClick={selectImg5}>
          <Img src={snack} alt="snack" />
        </Box>
      </ContainerMenu>
      <BoxImg>
        <Img src={imgMenu} alt="Image Menu" />
        <Title>{itensMenu}</Title>
        <Overlay />
      </BoxImg>
    </Container>
  )
}