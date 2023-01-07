import LoadingPosts from "../../components/LoadingPosts/LoadingPosts";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { getLast20Posts } from "../../api/timeline";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import CreatePost from "./CreatePost";
import { Container, PageTitle, PostList } from "./styles";
export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [timelinePostsStep, setTimelinePostsStep] = useState(0);

  function loadPosts() {
    setTimelinePostsStep(0);
    getLast20Posts()
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

  return (
    <MainLayout>
      <Container>
        <PageTitle>timeline</PageTitle>
        <CreatePost setPosts={setPosts} />
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
      </Container>
    </MainLayout>
  );
}
