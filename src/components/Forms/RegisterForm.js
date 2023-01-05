import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [registerOk, setRegisterOk] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  function handleRegister() {

    const promise = axios.post(
      "http://localhost:4000/signup",
      {
        email: email,
        username: username,
        photo: photo,
        password: password,
      }
    );
    promise.then((res) => {
      setRegisterOk(true);
      navigate("/");
    });

    promise.catch((err) => {
      alert(err.response.data);
      setRegister(false);
    });

    setRegister(true);
  }

  return (
    <RegisterFormContainer>
      <FormContainer>
        <input
          type="email"
          placeholder="email"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="password"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <input
          type="text"
          placeholder="username"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <input
          type="url"
          placeholder="picture url"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setPhoto(e.target.value)}
          value={photo}
        ></input>
         {register && !registerOk ? (
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
  <button onClick={() => handleRegister()}>Sign Up</button>
)}
        <Link to="/">
          <p>Switch back to log in</p>
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
