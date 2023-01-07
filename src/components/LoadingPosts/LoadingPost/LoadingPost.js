import {
  Container,
  Description,
  Photo,
  UrlMetadata,
  Username,
} from "./LoadingPost.style";

export default function LoadingPost() {
  return (
    <Container>
      <Photo className="loading" />
      <Username className="loading" />
      <Description className="loading" />
      <UrlMetadata className="loading" />
    </Container>
  );
}
