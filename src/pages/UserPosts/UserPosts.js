import LoadingPosts from "../../components/LoadingPosts/LoadingPosts";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { getLast20Posts } from "../../api/timeline";
import { getTrending } from "../../api/trending";
import getPosts from "../../components/Post/getPosts";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Trending from "../../layouts/Trending";
import {
  Container,
  LeftContainer,
  PageTitle,
  PostList,
  SubContainer,
} from "./styles";
import { getUserPosts } from "../../api/post";
import { useParams } from "react-router-dom";

export default function UserPosts() {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [timelinePostsStep, setTimelinePostsStep] = useState(0);

  function loadPosts() {
    setTimelinePostsStep(0);
    getUserPosts(id)
      .then(({ data }) => {
        setPosts(() => data);
        if (data.length === 0) {
          alert("There are no posts yet");
          setTimelinePostsStep(2);
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
        <SubContainer>
          <LeftContainer>
            <PageTitle>timeline</PageTitle>
            <PostList>
              {
                [
                  <LoadingPosts />,
                  posts.map((post) => (
                    <Post key={post.id} data={post} reload={loadPosts} />
                  )),
                  "",
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
