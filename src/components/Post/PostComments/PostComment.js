import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

export default function PostComment() {
  return (
    <CommentsContainer>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    <CommentInput/>
    </CommentsContainer>
  );
}

const CommentsContainer = styled.div`
  width: 611px;
  height: auto;
  background-color: #1e1e1e;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-block-start: 10px;
  position: relative;
`;