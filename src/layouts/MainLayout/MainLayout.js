import UserSearch from "../../components/Search/UserSearch";
import Header from "../Header";
import { ChildrenContainer, Container } from "./styles.js";
import UserSearchMobile from "../../components/Search/UserSearchMobile";


export default function MainLayout({ children }) {
  return (
    <Container>
      <Header/>
      <UserSearchMobile/>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

