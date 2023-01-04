import {
  Container,
  LeftContainer,
  Photo,
  Comment,
  Username,
  RightContainer,
} from "./styles";
import UrlPreview from "./UrlPreview/UrlPreview";

export default function Post({ data }) {
  const { id, photo, username, link, text, title, image, description } = data;
  console.log(image);
  return (
    <Container>
      <LeftContainer>
        <Photo src={photo} />
      </LeftContainer>
      <RightContainer>
        <Username>{username}</Username>
        <Comment>{text}</Comment>
        <UrlPreview data={{ link, title, image, description }} />
      </RightContainer>
    </Container>
  );
}
