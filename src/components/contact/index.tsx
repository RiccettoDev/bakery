import {
  Container,
  Input,
  InputText,
  ContainerIcons,
  Box
} from "./styles";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export function Contact() {
  return (
    <Container id="Contact">
      <h1>Fale Conosco</h1>
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Telefone" />
      <h2>Sua Mensagem</h2>
      <InputText type="text" />
      <ContainerIcons>
        <Box>
          <IoLogoWhatsapp size={50} color="#4dc247" />
        </Box>
        <Box>
          <FaFacebook size={50} color="#3b5998" />
        </Box>
        <Box>
          <RiInstagramFill size={50} color="#125688" />
        </Box>
      </ContainerIcons>
    </Container>
  )
}