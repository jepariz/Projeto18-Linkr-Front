import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 611px;
  padding: 20px;
  background-color: #171717;
  display: flex;
  gap: 20px;
  @media (min-width: 1024px) {
    border-radius: 15px;
  }
`;

export const LeftContainer = styled.div`
  width: 40px;
  @media (min-width: 1024px) {
    width: 50px;
  }
`;

export const Photo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const RightContainer = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Username = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
`;

export const Comment = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #b7b7b7;
`;

export const Like = styled.div`
  width: 20px;
  height: 40px;
  margin: auto;
  margin-top: 19px;
`;
