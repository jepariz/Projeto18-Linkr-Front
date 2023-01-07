import styled from "styled-components";

export const UrlMetadataContainer = styled.a`
  background-color: transparent;
  min-height: 115px;
  grid-column: 2/4;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: 1fr auto;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  text-decoration: none;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  gap: 5px;
  padding: 15px;
  grid-column: 1/2;
`;

export const Title = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #cecece;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  word-break: break-all;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #9b9595;
`;

export const Link = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  height: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #cecece;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Photo = styled.img`
  object-fit: cover;
  background-color: #fff;
  width: 115px;
  height: 100%;
  border-radius: 0px 12px 13px 0px;
`;
