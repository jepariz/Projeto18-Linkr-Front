import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrending } from "../../api/trending";
import LoadingPosts from "../../components/LoadingPosts/LoadingPosts";
import getPosts from "../../components/Post/getPosts";
import Post from "../../components/Post/Post";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Trending from "../../layouts/Trending";
import {
  Container,
  LeftContainer,
  PageTitle,
  PostList,
  SubContainer,
  ZeroPost,
} from "../Timeline/styles";

export default function Hashtag() {
  const [posts, setPosts] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const { hashtag } = useParams();
  useEffect(() => {
    getPosts(setPosts, setLoading, hashtag);
    getTrending(setTrending);
  }, [hashtag]);

  const renderPosts = [];
  if (loading) {
    renderPosts.push(
      <LoadingPosts key="1"/>
    );
  } else {
    if (posts.length === 0) {
      renderPosts.push(<ZeroPost key="0">Não há post a ser mostrado!</ZeroPost>);
    } else {
      posts.map((post) => renderPosts.push(<Post key={post.id} data={post} />));
    }
  }

  return (
    <MainLayout>
      <Container>
        <PageTitle># {hashtag}</PageTitle>
        <SubContainer>
          <LeftContainer>
            <PostList>{renderPosts}</PostList>
          </LeftContainer>
          <Trending trending={trending} />
        </SubContainer>
      </Container>
    </MainLayout>
  );
}
