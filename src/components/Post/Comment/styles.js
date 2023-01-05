import styled from "styled-components";

export const Container = styled.div``;

export const CommentText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
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
  padding: 5px 10px;
  outline: none;
  border: none;
  resize: none;
  &&[contenteditable] {
    border: 1px solid black;
    max-height: 200px;
    overflow: auto;
  }
`;
