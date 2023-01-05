import styled from "styled-components";
import RegisterForm from "../components/Forms/RegisterForm";


export default function FrontPage() {

  return (
    <>
    <RegisterContainer>
        <Message>
            <h1>linkr</h1>
            <p>save, share and discover <br></br>
            the best links on the web</p>
        </Message>
        <RegisterForm/>
    </RegisterContainer>
    
    </>
  )
}

const RegisterContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #151515;
display: grid;
grid-template-columns: 1.5fr 1fr;
align-items: center;
justify-content: center;

@media(max-width: 375px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  #333333;
  }
`
const Message = styled.div`

width: 70%;
place-self: center;

h1{
    font-size: 106px;
    font-family: 'Passion One', cursive;;
    color: #FFFFFF;
}

p{
    font-size: 43px;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
}

@media(max-width: 375px) {
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 175px;
  background-color:#151515;
  box-shadow: 0px 4px 4px 0px #00000040;

    h1{
      font-size: 76px;
    }

    p{
      font-size: 23px;
    }
  }

`

