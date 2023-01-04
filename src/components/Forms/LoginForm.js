import axios from "axios";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import {saveUserInfoInLocalStorage} from "../../utils/userLocalStorage"

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
 
  function handleLogin() {
    const promise = axios.post(
      "https://localhost:4000/signin",
      {
        email: email,
        password: password,
      }
    );
    promise.then((res) => {
      console.log(res.data);

      const info = {
        token: res.data.token,
        photoUrl: res.data.photo,
        username: res.data.username
      }
      saveUserInfoInLocalStorage(info)
      navigate("/hoje");
    });

    promise.catch((err) => {
      alert(err.response.data);
      setLogin(false);
    });

    setLogin(true);
  }

  return (
    <RegisterFormContainer>
      <FormContainer>
        <input
          type="email"
          placeholder="email"
          disabled={login ? true : false}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="password"
          disabled={login ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
         {login ? (
  <button>
    <ThreeDots
      height="70"
      width="80"
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </button>
) : (
  <button onClick={() => handleLogin()}>Log In</button>
)}
        <Link to="/signup">
          <p onClick={() => props.setChooseForm('signup')}>First time? Create an account!</p>
        </Link>
      </FormContainer>
    </RegisterFormContainer>
  );
}

const RegisterFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;

  input {
    width: 429px;
    height: 65px;
    border-radius: 6px;
    background-color: #fff;
    font-size: 27px;
    font-family: "Oswald", sans-serif;
    color: #9f9f9f;
    padding: 5px;
    box-sizing: border-box;
    border: none;

    &::placeholder {
      font-size: 27px;
      color: #9f9f9f;
      padding: 5px;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      color: #dbdbdb;
      background-color: #f2f2f2;
    }
  }

  button {
    width: 429px;
    height: 65px;
    border-radius: 6px;
    background-color: #1877f2;
    border: none;
    font-size: 27px;
    font-family: "Oswald", sans-serif;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    color: #fff;
    place-self: center;
  }

  @media(max-width: 375px) {

    height: 80%;
    
    input, button{
    width: 330px;
    height: 55px;
    }


  }
`;
