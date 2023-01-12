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
} from "./styles";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [timelinePostsStep, setTimelinePostsStep] = useState(0);

  function loadPosts() {
    setTimelinePostsStep(0);
    getLast20Posts()
      .then(({ data }) => {
        setPosts(() => data.posts);
        if (data.posts.length === 0) {
          if(data.follows.length === 0) {
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

  return (
    <MainLayout>
      <Container>
        <PageTitle>timeline</PageTitle>
        <SubContainer>
          <LeftContainer>
            <CreatePost setPosts={setPosts} />
            <PostList>
              {
                [
                  <LoadingPosts />,
                  posts.map((post) => (
                    <Post key={post.id} data={post} reload={loadPosts} />
                  )),
                  <ZeroPost>You don't follow anyone yet. Search for new friends!</ZeroPost>,
                  <ZeroPost>No posts found from your friends!</ZeroPost>
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
