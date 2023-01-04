import { LeftContainer, RightContainer } from "./styles";
import { Container, Title, ImageURL, Url, Description } from "./styles";

export default function UrlPreview({ data }) {
  const { title, image, link, description } = data;
  return (
    <Container target="_blank" href={link}>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Url>{link}</Url>
      </LeftContainer>
      <RightContainer>
        <ImageURL src={image} />
      </RightContainer>
    </Container>
  );
}
