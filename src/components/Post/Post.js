import {
  Container,
  LeftContainer,
  Photo,
  Comment,
  Username,
  RightContainer,
  Like,
} from "./styles";
import UrlPreview from "./UrlPreview/UrlPreview";
import { ReactTagify } from "react-tagify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post({ data }) {
  const { id, photo, username, link, text, title, image, description } = data;

  const regex = /#[a-z\d]+/gi;
  const hashtags = text.match(regex);

  const tagStyle = {
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  };

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
        <Comment>
          <ReactTagify tag={hashtags} tagStyle={tagStyle}>
            {text}
          </ReactTagify>
        </Comment>
        <UrlPreview data={{ link, title, image, description }} />
      </RightContainer>
    </Container>
  );
}
