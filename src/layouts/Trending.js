import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Trending({ trending }) {
  const renderHashtags = [];
  const navigate = useNavigate();
  if (trending.length === 0) {
    renderHashtags.push(
      <ZeroTrendings key={0}>There aren't hashtags to show!</ZeroTrendings>
    );
  } else {
    trending.map((e, i) =>
      renderHashtags.push(
        <Hashtag key={i} onClick={() => navigate(`/hashtag/${e.name}`)}>
          # {e.name}
        </Hashtag>
      )
    );
  }

  return (
    <Container>
      <TopDiv>trending</TopDiv>
      <Topics>{renderHashtags}</Topics>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  margin-top: 40px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const TopDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: #171717;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 1px solid #333333;
  display: flex;
  padding: 15px 15px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
`;

const Topics = styled.div`
  width: 100%;
  max-height: 345px;
  background-color: #171717;
  border-radius: 0px 0px 15px 15px;
  border-top: 1px solid #333333;
  padding: 30px 15px;
`;

const Hashtag = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  margin: 10px 0px;
  cursor: pointer;
`;

const ZeroTrendings = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  margin: 10px 0px;
`;
