import { Banner } from "../../components/banner";
import { Header } from "../../components/layout/header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  )
}