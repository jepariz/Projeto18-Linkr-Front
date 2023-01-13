import styled from "styled-components";

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1024px) {
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 611px;
  margin: 0 auto;
  flex-direction: column;
  padding: 20px 0;
  @media (min-width: 1024px) {
    padding: 70px 0;
    max-width: 937px;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  margin-left: 15px;
  color: #ffffff;
  @media (min-width: 1024px) {
    font-size: 43px;
    margin-left: 0px;
  }
`;

export const Loading = styled.img``;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 611px;
  gap: 20px;
`;

export const ZeroPost = styled.div`
  width: 100%;
  background-color: #171717;
  border-radius: 15px;
  padding: 15px 15px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
`;

export const UpdatePostsFromFollowed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #1877f2;
  height: 61px;
  border-radius: 16px;
  :hover {
    cursor: pointer;
  }
  p {
    margin-right: 15px;
    color: #fff;
  }
`;
