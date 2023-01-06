import { useEffect, useState } from "react";
import { getTrending } from "../../api/trending";
import getPosts from "../../components/Post/getPosts";
import Post from "../../components/Post/Post";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Trending from "../../layouts/Trending";
import CreatePost from "./CreatePost";
import {
  Container,
  LeftContainer,
  Loading,
  PageTitle,
  PostList,
  SubContainer,
} from "./styles";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getPosts(setPosts);
    getTrending(setTrending);
  }, []);

  return (
    <MainLayout>
      <Container>
        <PageTitle>timeline</PageTitle>
        <SubContainer>
          <LeftContainer>
            <CreatePost setPosts={setPosts} setTrending={setTrending} />
            <PostList>
              {posts.length === 0 ? (
                <Loading src="https://yorkdalelincoln.com/wp-content/themes/lbx-iag/resources/images/spinner.gif" />
              ) : (
                posts.map((post) => <Post key={post.id} data={post} />)
              )}
            </PostList>
          </LeftContainer>
          <Trending trending={trending} />
        </SubContainer>
      </Container>
    </MainLayout>
  );
}
