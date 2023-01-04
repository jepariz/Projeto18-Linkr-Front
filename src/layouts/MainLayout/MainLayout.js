import Header from "../Header";
import { ChildrenContainer, Container } from "./styles.js";

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
