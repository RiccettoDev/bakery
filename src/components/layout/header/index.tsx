import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import {
  Container,
  Img,
  Title,
  Menu,
  ModalContainer,
  Overlay,
  CloseButton,
  ContainerMenu,
  ButtonMenu
} from "./styles";

import logo from "../../../img/logo.png"

export function Header() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const openModal = () => {
    setModalIsVisible(true)
  }

  const closeModal = () => {
    setModalIsVisible(false)
  }

  // fecha o modal ao clicar no overlay
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }


  return (
    <Container>
      <Img src={logo} alt="logo" />
      <Title>Cheirinho de Felicidade</Title>
      <Menu onClick={openModal}>
        <GiHamburgerMenu color="#DAE1AB" size={50} style={{ marginRight: "2em" }} />
      </Menu>
      {modalIsVisible && (
        <Overlay onClick={handleOverlayClick}>
          <ModalContainer>
            <CloseButton onClick={closeModal}>
              <IoIosCloseCircle color="#DAE1AB" size={30} />
            </CloseButton>
            <ContainerMenu>
              <h1>Menu</h1>
              <ButtonMenu>
                <h2>Inicio</h2>
              </ButtonMenu>
              <ButtonMenu>
                <h2>História</h2>
              </ButtonMenu>
              <ButtonMenu>
                <h2>Cardápio</h2>
              </ButtonMenu>
              <ButtonMenu>
                <h2>Fale Conosco</h2>
              </ButtonMenu>
            </ContainerMenu>
          </ModalContainer>
        </Overlay>
      )}
    </Container>
  )
}