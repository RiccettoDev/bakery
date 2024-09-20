import {
  Container,
  Input,
  InputText,
  Send,
  ContainerIcons,
  Box
} from "./styles";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Toaster, toast } from 'sonner'

export function Contact() {
  return (
    <Container id="Contact" color="green">
      <h1>Fale Conosco</h1>
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Telefone" />
      <h2>Sua Mensagem</h2>
      <InputText type="text" />
      <Toaster position="top-center" richColors toastOptions={{ style: { background: '#DAE1AB' } }} />
      <Send onClick={() => toast.success('Mensagem enviada com sucesso!')}>Enviar</Send>
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