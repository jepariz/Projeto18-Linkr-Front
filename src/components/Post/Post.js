import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import axios from "axios";
import { deletePostById, updatePostById } from "../../api/post";
import DeleteButton from "./DeleteButton/DeleteButton";
import EditButton from "./EditButton/EditButton";
import ModalDelete from "../ModalDelete/ModalDelete";
import {
  Photo,
  PostContainer,
  Username,
  ButtonsGroup,
  Like,
  PhotoLikeGroup,
} from "./Post.style";
import UrlMetadata from "./UrlMetadata/UrlMetadata";

export default function Post({ data, reload }) {
  const { id, photo, username, link, text, title, image, description } = data;
  const editMode = useState(false);
  const deleteMode = useState(false);

  function isAuthenticatedUserPost() {
    return JSON.parse(localStorage.user).username === username;
  }

  function updatePost({ comment }, sucessFn, errorFn) {
    updatePostById({ id, comment })
      .then(() => {
        sucessFn();
      })
      .catch((error) => {
        alert("NÃO FOI POSSIVEL ALTERAR O POST");
        errorFn();
      });
  }

  function deletePost(sucessFn, errorFn) {
    deletePostById(id)
      .then(() => {
        reload();
        sucessFn();
      })
      .catch((error) => {
        alert("NAO FOI POSSIVEL DELETAR");
        errorFn();
      });
  }

  // LIKE

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

  // RENDER
  return (
    <PostContainer>
      <PhotoLikeGroup>
        <Photo src={photo} />
        <Like onClick={() => likePost()}>
          {isLiked ? (
            <AiFillHeart fontSize={22} color={"#AC0000"} />
          ) : (
            <AiOutlineHeart fontSize={22} color={"#fff"} />
          )}
        </Like>
      </PhotoLikeGroup>
      <Username>{username} </Username>
      {isAuthenticatedUserPost() ? (
        <ButtonsGroup>
          <EditButton editModeState={editMode} />
          <DeleteButton deleteModeState={deleteMode} />
        </ButtonsGroup>
      ) : (
        ""
      )}

      <Comment text={text} editModeState={editMode} update={updatePost} />
      <UrlMetadata data={{ link, title, image, description }} />
      <ModalDelete deletePost={deletePost} deleteModeState={deleteMode} />
    </PostContainer>
  );
}
