import LoadingPosts from "../../components/LoadingPosts/LoadingPosts";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { getLast20Posts } from "../../api/timeline";
import { getTrending } from "../../api/trending";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Trending from "../../layouts/Trending";
import CreatePost from "./CreatePost";
import {
  Container,
  LeftContainer,
  PageTitle,
  PostList,
  SubContainer,
  ZeroPost,
  UpdatePostsFromFollowed,
} from "./styles";
import { TfiReload } from "react-icons/tfi";
import { useInterval } from "use-interval";
import axios from "axios";
import URL_back from "../../utils/URL_back";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [newPostsFromFollowers, setNewPostsFromFollowers] = useState(false);
  const [timelinePostsStep, setTimelinePostsStep] = useState(0);
  const [arrayOfNewPosts, setArrayOfNewPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const id = JSON.parse(localStorage.user).id;

  function loadPosts() {
    setTimelinePostsStep(0);
    getLast20Posts()
      .then(({ data }) => {
        setPosts(() => data.posts);
        if (data.posts.length === 0) {
          if (data.follows.length === 0) {
            setTimelinePostsStep(2);
          } else {
            setTimelinePostsStep(3);
          }
        } else setTimelinePostsStep(1);
      })
      .catch((error) =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        )
      );
  }

  useEffect(() => {
    loadPosts();
  }, []);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending(setTrending);
  }, []);

  useInterval(() => {
    axios
      .get(
        `${URL_back}timeline/update`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
          },
        },
        { id }
      )
      .then((data) => sucessToGetNewPosts(data))
      .catch((error) => console.log(error));
  }, 15000);

  function sucessToGetNewPosts(followed) {
    let auxArr = [];

    for (let i = 0; i < followed.data.length; i++) {
      if (followed.data[i].links_from_follows_updated) {
        auxArr.push(
          followed.data[i].links_from_follows_updated.map((data) => data)
        );
      }
    }

    if (auxArr.length !== 0) {
      setNewPost(true);
      setArrayOfNewPosts(auxArr);
    }
  }

  return (
    <MainLayout>
      <Container>
        <PageTitle>timeline</PageTitle>
        <SubContainer>
          <LeftContainer>
            <CreatePost setPosts={setPosts} />
            <UpdatePostsFromFollowed
              onClick={() => (newPost ? window.location.reload(true) : null)}
            >
              <p>
                {newPost
                  ? `${arrayOfNewPosts.length} new posts, load more!`
                  : "nothing new to see"}
              </p>
              <TfiReload color="#fff" fontSize={20} />
            </UpdatePostsFromFollowed>
            <PostList>
              {
                [
                  <LoadingPosts />,
                  posts.map((post) => (
                    <Post key={post.id} data={post} reload={loadPosts} />
                  )),
                  <ZeroPost>
                    You don't follow anyone yet. Search for new friends!
                  </ZeroPost>,
                  <ZeroPost>No posts found from your friends!</ZeroPost>,
                ][timelinePostsStep]
              }
            </PostList>
          </LeftContainer>
          <Trending trending={trending} />
        </SubContainer>
      </Container>
    </MainLayout>
  );
}
