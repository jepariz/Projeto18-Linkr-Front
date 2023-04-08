import LoadingPost from "./LoadingPost/LoadingPost";
import { Container } from "./LoadingPosts.style";

export default function LoadingPosts() {
  return (
    <Container>
      <LoadingPost />
      <LoadingPost />
      <LoadingPost />
    </Container>
  );
}
