import {
  Container,
  LeftContainer,
  Photo,
  Comment,
  Username,
  RightContainer,
} from "./styles";
import UrlPreview from "./UrlPreview/UrlPreview";
import { ReactTagify } from "react-tagify";

export default function Post({ data }) {
  const { id, photo, username, link, text, title, image, description } = data;

  const regex = /#[a-z\d]+/ig;
  const hashtags = text.match(regex);
  
  const tagStyle ={
    color: 'white',
    fontWeight: 700,
    cursor: 'pointer'
  }
 
  return (
    <Container>
      <LeftContainer>
        <Photo src={photo} />
      </LeftContainer>
      <RightContainer>
        <Username>{username}</Username>
        <Comment><ReactTagify tag={hashtags}  tagStyle={tagStyle}>{text}</ReactTagify></Comment>
        <UrlPreview data={{ link, title, image, description }} />
      </RightContainer>
    </Container>
  );
}
