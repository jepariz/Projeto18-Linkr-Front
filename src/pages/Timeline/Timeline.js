import { useEffect, useState } from "react";
import getPosts from "../../components/Post/getPosts";
import Post from "../../components/Post/Post";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import CreatePost from "./CreatePost";
import { Container, Loading, PageTitle, PostList } from "./styles";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => getPosts(setPosts), []);

  return (
    <MainLayout>
      <Container>
        <PageTitle>timeline</PageTitle>
        <CreatePost setPosts={setPosts}/>
        <PostList>
          {posts.length === 0 ? (
            <Loading src="https://yorkdalelincoln.com/wp-content/themes/lbx-iag/resources/images/spinner.gif" />
          ) : (
            posts.map((post) => <Post key={post.id} data={post} />)
          )}
        </PostList>
      </Container>
    </MainLayout>
  );
}
