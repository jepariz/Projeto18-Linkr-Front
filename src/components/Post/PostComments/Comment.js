import React from 'react'
import styled from 'styled-components'

export default function Comment() {
  return (
    <>
    <CommentContent>
           <img src="https://1.bp.blogspot.com/-Wq2lcq9_a4I/Tc2lLWOkNVI/AAAAAAAABVM/Wao0rm-vWe4/s1600/gatinho-5755.jpg"></img>
           <TextContainer>
            <div>
                <p>João Avatares</p>
                <span>• following</span>
            </div>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
    </TextContainer>
    </CommentContent>
    <Line></Line>
    </>
  )
}

const CommentContent = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
gap: 20px;
padding: 20px;
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