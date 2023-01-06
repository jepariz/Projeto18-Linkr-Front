import {
  Container,
  LeftContainer,
  Photo,
  Username,
  RightContainer,
  ContainerIcons,
  Like,
} from "./styles";
import UrlPreview from "./UrlPreview/UrlPreview";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { ReactTagify } from "react-tagify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import axios from "axios";

export default function Post({ data }) {
  const { id, photo, username, link, text, title, image, description } = data;

  const [editMode, setEditMode] = useState(false);

  function handleEditMode() {
    setEditMode(!editMode);
  }

  function isAuthenticatedUserPost() {

    return JSON.parse(localStorage.user).username === username;
  }
  const regex = /#[a-z\d]+/ig;
  const hashtags = text.match(regex);
  
  const tagStyle ={
    color: 'white',
    fontWeight: 700,
    cursor: 'pointer'
  }

  let post_id = id;

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/isLiked/" + post_id, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
        },
      })
      .then((e) => setIsLiked(e.data.liked))
      .catch((e) => console.log(e.response.data.message));
  }, []);


  function likePost() {
    if (isLiked) {
      axios
        .delete("http://localhost:4000/unlike/" + post_id, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
          },
        })
        .then((e) => sucess(e))
        .catch((e) => console.log(e.response.data.message));
    } else {
      axios
        .post(
          "http://localhost:4000/like",
          { post_id },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
            },
          }
        )
        .then((e) => sucess(e))
        .catch((e) => console.log(e.response.data.message));
    }
  }

  function sucess(event) {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Photo src={photo} />
        <Like onClick={() => likePost()}>
          {isLiked ? (
            <AiFillHeart fontSize={22} color={"#AC0000"} />
          ) : (
            <AiOutlineHeart fontSize={22} color={"#fff"} />
          )}
        </Like>
      </LeftContainer>
      <RightContainer>
        <Username>{username}</Username>
        <Comment editModeState={[editMode, setEditMode]} text={text}  id={id} />
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
