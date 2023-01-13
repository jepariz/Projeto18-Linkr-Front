import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import URL_back from "../../../utils/URL_back";
import Comment from "./Comment";
import CommentInput from "./CommentInput";


export default function PostComment({id, postAuthor, authorPhoto, authorName}) {

    const [users, setUsers] = useState([])

function getComments (id){
    const promise = axios.get(`${URL_back}/comments/${id}`, 
         {
           headers: {
             Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
           },
         })
       
         promise.then((res) => {
           const followed = [];
           const notFollowed = [];
           res.data.forEach(u => {
             if(u.isFollow) {
               followed.push(u)
             } else {
               notFollowed.push(u)
             }
           })
           setUsers([...followed, ...notFollowed]);
         })
 
         promise.catch((err) => {
           alert(err.response.data);
         }); 
}



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