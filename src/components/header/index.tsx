import { GiHamburgerMenu } from "react-icons/gi";
import { Container, Img, Title, Menu } from "./styles";
import logo from "../../img/logo.png"

export function Header() {
  return (
    <Container>
      <Img src={logo} alt="logo" />
      <Title>Cheirinho de Felicidade</Title>
      <Menu>
        <GiHamburgerMenu color="#DAE1AB" size={50} style={{ marginRight: "2em" }} />
      </Menu>
    </Container>
  )
}