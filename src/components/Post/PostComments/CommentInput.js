import React from "react";
import styled from "styled-components";
import {FiSend} from "react-icons/fi";

export default function CommentInput() {
  return (
   <PostCommentData>
    <img src="https://1.bp.blogspot.com/-Wq2lcq9_a4I/Tc2lLWOkNVI/AAAAAAAABVM/Wao0rm-vWe4/s1600/gatinho-5755.jpg"></img>
     <InputContainer>
      <NewComment placeholder="write a comment..."></NewComment>
      <SendIcon></SendIcon>
    </InputContainer>
   </PostCommentData>
   
  );
}

const PostCommentData = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-evenly;
gap: 10px;
margin-top: 10px;
padding: 0 10px 0 10px;
img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
}

`

const InputContainer = styled.div`
  width: 510px;
  height: 39px;
  position: relative;
`;

const NewComment = styled.input`
  width: 510px;
  height: 39px;
  border-radius: 8px;
  background-color: #252525;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #acacac;
  border: none;
  box-sizing: border-box;
  padding: 10px;

  &::placeholder {
    font-size: 14px;
    color: #575757;
    padding: 5px;
    font-style: italic;
  }

  &:focus {
    outline: none;
  }
`;

const SendIcon = styled(FiSend)`
  position: absolute;
  right: 15px;
  top: 27%;
  color: #c6c6c6;
  font-size: 16px;
`;
