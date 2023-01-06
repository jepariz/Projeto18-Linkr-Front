import { useEffect, useState } from "react";
import { getUser, getUserPosts } from "../../api/post";
import Post from "../../components/Post/Post";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Container, Loading, PageTitle, PostList } from "./styles";

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  function loadPosts() {
    getUser().then(({ data }) => {
      console.log(data.id);
      getUserPosts(data.id)
        .then(({ data }) => {
          setPosts(() => data);
          if (data.length === 0) {
            alert("There are no posts yet");
          }
        })
        .catch((error) =>
          alert(
            "An error occured while trying to fetch the posts, please refresh the page"
          )
        );
    });
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <MainLayout>
      <Container>
        <PageTitle>{JSON.parse(localStorage.user).username} posts</PageTitle>
        <PostList>
          {posts.length === 0 ? (
            <Loading src="https://yorkdalelincoln.com/wp-content/themes/lbx-iag/resources/images/spinner.gif" />
          ) : (
            posts.map((post) => (
              <Post key={post.id} data={post} load={loadPosts} />
            ))
          )}
        </PostList>
      </Container>
    </MainLayout>
  );
}
