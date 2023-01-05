import {
  Container,
  LeftContainer,
  Photo,
  Username,
  RightContainer,
  ContainerIcons,
} from "./styles";
import UrlPreview from "./UrlPreview/UrlPreview";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Comment from "./Comment/Comment";

export default function Post({ data }) {
  const { id, photo, username, link, text, title, image, description } = data;

  const [editMode, setEditMode] = useState(false);

  function handleEditMode() {
    setEditMode(!editMode);
  }

  function isAuthenticatedUserPost() {
    console.log(JSON.parse(localStorage.user).username === username);
    return JSON.parse(localStorage.user).username === username;
  }

  return (
    <Container>
      <LeftContainer>
        <Photo src={photo} />
      </LeftContainer>
      <RightContainer>
        <Username>{username}</Username>
        <Comment editModeState={[editMode, setEditMode]} text={text} id={id} />
        <UrlPreview data={{ link, title, image, description }} />
      </RightContainer>
      {isAuthenticatedUserPost() ? (
        <ContainerIcons>
          <FaPencilAlt
            fontSize={15}
            onClick={() => handleEditMode()}
            color="#fff"
          />
        </ContainerIcons>
      ) : (
        ""
      )}
    </Container>
  );
}
