import {
  Description,
  Title,
  UrlMetadataContainer,
  Link,
  TextContainer,
  Photo,
} from "./UrlMetadata.style";

export default function UrlMetadata({ data }) {
  const { title, image, description, link } = data;
  function over100(title) {
    if (title?.length > 50) return title?.slice(0, 97) + "...";

    return title;
  }

  return (
    <UrlMetadataContainer target="_blank" href={link}>
      <TextContainer>
        <Title>{title} </Title>
        <Description>{over100(description)} </Description>
        <Link>{link}</Link>
      </TextContainer>
      <Photo src={image} />
    </UrlMetadataContainer>
  );
}
