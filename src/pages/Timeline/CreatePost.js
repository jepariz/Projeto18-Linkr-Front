import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import getPosts from "../../components/Post/getPosts";

export default function CreatePost({ setPosts }) {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  function postPost(e) {
    e.preventDefault();
    setIsProcessing(true);

    const regex = /#[a-z\d]+/gi;
    const hashtags = text.match(regex);

    const URL = "http://localhost:4000/post";
    axios
      .post(
        URL,
        { link, text, hashtags },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
          },
        }
      )
      .then(() => {
        setLink("");
        setText("");
        setIsProcessing(false);
        getPosts(setPosts);
      })
      .catch(() => {
        alert("Houve um erro ao publicar seu link");
        setIsProcessing(false);
      });
  }

  return (
    <Container>
      <LeftContainer>
        <Photo src={JSON.parse(localStorage.getItem("user")).photoUrl} />
      </LeftContainer>
      <RightContainer>
        <Title>What are you going to share today?</Title>
        {isProcessing ? (
          <PostInfos onSubmit={postPost}>
            <URL
              process={isProcessing}
              type="url"
              placeholder="http://..."
              value={link}
              disabled
            />
            <Description
              process={isProcessing}
              placeholder="Awesome article about #javascript"
              value={text}
              disabled
            />
            <Publish process={isProcessing} disabled>
              Publishing...
            </Publish>
          </PostInfos>
        ) : (
          <PostInfos onSubmit={postPost}>
            <URL
              process={isProcessing}
              type="url"
              placeholder="http://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
            <Description
              process={isProcessing}
              placeholder="Awesome article about #javascript"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Publish type="submit" process={isProcessing}>
              Publish
            </Publish>
          </PostInfos>
        )}
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 611px;
  padding: 20px;
  background-color: white;
  display: flex;
  margin-top: 45px;
  gap: 20px;
  @media (min-width: 1024px) {
    border-radius: 15px;
  }
`;

const LeftContainer = styled.div`
  width: 40px;
  @media (min-width: 1024px) {
    width: 50px;
  }
`;

const Photo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

const RightContainer = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #707070;
`;

const PostInfos = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const URL = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #efefef;
  opacity: ${(props) => {
    if (props.process) return "0.8";
    else return "1";
  }};
  font-family: "Lato", sans-serif;
  font-size: 15px;
  padding: 5px 12px;
  &::placeholder {
    font-weight: 300;
  }
`;

const Description = styled.textarea`
  resize: none;
  width: 100% !important;
  height: 70px !important;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #efefef;
  opacity: ${(props) => {
    if (props.process) return "0.8";
    else return "1";
  }};
  font-family: "Lato", sans-serif;
  font-size: 15px;
  padding: 5px 12px;
  margin: 5px 0px;
  &::placeholder {
    font-weight: 300;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Publish = styled.button`
  width: 110px;
  height: 30px;
  background-color: #1877f2;
  opacity: ${(props) => {
    if (props.process) return "0.5";
    else return "1";
  }};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => {
    if (props.process) return "normal";
    else return "pointer";
  }};
  font-family: "Lato", sans-serif;
  font-size: 15px;
  font-weight: bold;
`;
