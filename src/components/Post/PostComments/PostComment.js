import styled from "styled-components";
import CommentInput from "./CommentInput";


export default function PostComment({id, postAuthor, comments, setComments}) {


  return (
    <CommentsContainer>
    {comments.map((c, index) =>  
    <div key={index}>
    <CommentContent>
           <img src={c.photo} alt="user avatar"></img>
           <TextContainer>
            <div>
                <p>{c.name}</p>
               {c.id === postAuthor ? <span>• post’s author</span> : c.isFollower ? <span> • following</span> : null } 
            </div>
            <p>{c.text}</p>
    </TextContainer>
    </CommentContent>
    <Line></Line> 
    </div>)}
    
    <CommentInput id={id} setComments={setComments}/>
    </CommentsContainer>
  );
}

const CommentsContainer = styled.div`
  width: 601px;
  height: auto;
  background-color: #1e1e1e;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-block-start: 10px;
  position: relative;
  margin-left: 10px;
`;

const CommentContent = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
gap: 20px;
color: #fff;

img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
}

`

const TextContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;

div{
    display: flex;
    gap: 8px;
    p{
        font-size: 14px;
        color: #F3F3F3;
        font-size: "Lato", sans-serif;
    }

    span{
        font-size: 14px;
        color: #565656;
        font-size: "Lato", sans-serif;
    }
}

p{
  font-size: 14px;
        color: #ACACAC;
        font-size: "Lato", sans-serif;
}

`
const Line = styled.div`
    width: 571px;
    border: 1px solid #353535;

`