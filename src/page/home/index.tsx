import { Banner } from "../../components/banner";
import { History } from "../../components/history";
import { Header } from "../../components/layout/header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <History />
    </Container>
  )
}