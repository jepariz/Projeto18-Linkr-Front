import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  grid-column: 2/4;
  grid-row: 2/3;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  min-height: 150px;
  background: #ffffff;
  border-radius: 7px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #4c4c4c;
  padding: 10px;
  outline: none;
  border: none;
  resize: none;
  color: #4c4c4c;
`;

export const CommentParagraph = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #b7b7b7;
`;
