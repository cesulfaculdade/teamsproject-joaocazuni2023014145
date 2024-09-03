import { Highlight } from "@components/Highlight";
import { Container, HeaderContainer } from "./styles";
import { Header } from "@components/Header";

export const Teams = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Highlight title="Equipes" subtitle="Preparem suas equipes" />
      </HeaderContainer>
    </Container>
  );
};
