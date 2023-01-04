import styled from "styled-components";

export const Container = styled.a`
  width: 100%;
  overflow: hidden;
  border: 1px solid #4d4d4d;
  border-radius: 10px;
  background: transparent;
  display: flex;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #cecece;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftContainer = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  padding: 20px;
  justify-content: space-between;
  gap: 10px 0;
`;

export const RightContainer = styled.div`
  width: calc(100% / 3);
`;

export const Description = styled.p`
  max-width: 300px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #9b9595;
  text-overflow: ellipsis;
`;

export const ImageURL = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  object-fit: cover;
  grid-column: 2/3;
`;

export const Url = styled.p`
  word-break: break-all;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #cecece;
`;
