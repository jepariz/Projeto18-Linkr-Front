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
import UserPosts from "../../pages/UserPosts/UserPosts";
import { useNavigate } from "react-router-dom";
import URL_back from "../../utils/URL_back";
import { Tooltip } from "react-tooltip";

export default function Post({ data, reload }) {
  const {
    id,
    user_id,
    photo,
    username,
    link,
    text,
    title,
    image,
    description,
  } = data;
  const editMode = useState(false);
  const deleteMode = useState(false);
  const navigate = useNavigate();
  let [auxArray, setAuxArray] = useState([]);
  let [listOfPeopleHowLiked, setListOfPeopleHowLiked] = useState([]);
  let [likes, setLikes] = useState(0);
  let [isLikedByUser, setIsLikedByUser] = useState();

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

  let post_id = id;

  useEffect(() => {
    getLikes(id, username);
  }, []);

  function getLikes(id, username) {
    let postId = id;
    axios
      .get(
        `http://localhost:4000/likeList/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
          },
        },
        { postId }
      )
      .then((likesAndNames) => getLikesFromServer(likesAndNames))
      .catch((err) => console.log(err));
  }

  function getLikesFromServer(likesAndNames) {
    let newLst = [];
    if (!likesAndNames.data.users || typeof newLst === "string") {
    }
    likesAndNames.data.users?.map((u) => newLst.push(u.username));
    console.log(newLst)
    console.log(typeof newLst === "string")
    if (!newLst) {
      console.log('AQUI CARAI')
      setAuxArray([""]);
    } else if (typeof newLst === "string") {
      console.log("entrei no segundo if");
      return setAuxArray([newLst + "curtiu isso"]);
    } else if (newLst?.find(username) && likesAndNames.likes === 1) {
      console.log("cai na segunda condição");
      setAuxArray(["Você curtiu isso"]);
    } else if (newLst?.find(username) && likesAndNames.likes === 2) {
      console.log("caiu na terceira");
      setAuxArray(["Você, e", newLst[0], "curtiram este post"]);
    }
  }

  // LIKE

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    axios
      .get(URL_back + "isLiked/" + post_id, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
        },
      })
      .then((e) => setIsLiked(e.data.liked))
      .catch((e) => console.log(e.response.data.message));
  }, [post_id]);

  function likePost() {
    if (isLiked) {
      axios
        .delete(URL_back + "unlike/" + post_id, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
          },
        })
        .then((e) => sucess(e))
        .catch((e) => console.log(e.response.data.message));
    } else {
      axios
        .post(
          URL_back + "like",
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

  console.log(listOfPeopleHowLiked);

  function sucess() {
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
        <Photo src={photo} onClick={() => navigate(`/user/${user_id}`)} />
        <Like onClick={() => likePost()}>
          {isLiked ? (
            <AiFillHeart fontSize={22} color={"#AC0000"} />
          ) : (
            <AiOutlineHeart fontSize={22} color={"#fff"} />
          )}
        </Like>
      </PhotoLikeGroup>
      <Username onClick={() => navigate(`/user/${user_id}`)}>
        {username}{" "}
      </Username>
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
