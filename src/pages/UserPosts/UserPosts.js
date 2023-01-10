import LoadingPosts from "../../components/LoadingPosts/LoadingPosts";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { getTrending } from "../../api/trending";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Trending from "../../layouts/Trending";
import {
  Container,
  LeftContainer,
  PageTitle,
  PostList,
  SubContainer,
  TopContainer,
  UserPhoto,
} from "./styles";
import { getUserPosts } from "../../api/post";
import { useParams } from "react-router-dom";

export default function UserPosts() {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [timelinePostsStep, setTimelinePostsStep] = useState(0);
  const [user, setUser] = useState({username: "Loading...", photo: "https://yorkdalelincoln.com/wp-content/themes/lbx-iag/resources/images/spinner.gif"});

  function loadPosts() {
    setTimelinePostsStep(0);
    getUserPosts(id)
      .then(({ data }) => {
        if(data.user.length===0) {
          setUser({username: "Not Found", photo: "https://rukminim1.flixcart.com/image/416/416/kzx1a4w0/sticker/m/r/i/medium-404-error-not-found-0-1-an-sb6528-sign-ever-original-imagbtu8ztxntpkx.jpeg?q=70"});
        } else {
          setUser({username: data.user[0].username+"'s posts", photo: data.user[0].photo});
        }
        setPosts(() => data.posts);
        if (data.posts.length === 0) {
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
        <TopContainer>
          <UserPhoto src={user.photo} alt="Não foi possível carregar a imagem"/>
          <PageTitle>{user.username}</PageTitle>
        </TopContainer>
        <SubContainer>
          <LeftContainer>
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
