import { Banner } from "../../components/banner";
import { Contact } from "../../components/contact";
import { History } from "../../components/history";
import { Footer } from "../../components/layout/footer";
import { Header } from "../../components/layout/header";
import { Menu } from "../../components/menu";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <History />
      <Menu />
      <Contact />
      <Footer />
    </Container>
  )
}