import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #171717;
  display: grid;
  

  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-rows: auto auto auto;

  @media (min-width: 700px) {
    max-width: 611px;
    border-radius: 16px;
  }
  gap: 10px 20px;
  overflow: hidden;
`;

export const PhotoLikeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/4;
`;

export const Photo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cecece;
  object-fit: cover;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const Like = styled.div`
  width: 20px;
  height: 40px;
  margin: auto;
  margin-top: 19px;
  
  
`;

export const InfoLike = styled.span`
  height: 13px;
  width: 50px;
  color: #ffffff;
  font-family: Lato;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  
`;

export const Username = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #ffffff;
  grid-column: 2/3;
  grid-row: 1/2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 15px;
  grid-column: 3/4;
  grid-row: 1/2;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;
