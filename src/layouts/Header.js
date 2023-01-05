import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const refSubMenu = useRef(null);
  const refImage = useRef(null);
  const navigate = useNavigate();
  const userInfos = JSON.parse(localStorage.getItem("user"));

  function handleClickOutside(event) {
    if (refSubMenu.current && !refSubMenu.current.contains(event.target)) {
      if (showSubMenu) {
        setShowSubMenu(false);
      } else {
        if (refImage.current && refImage.current.contains(event.target)) {
          setShowSubMenu(true);
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Head>
        <h1>linkr</h1>
        <Icons ref={refImage}>
          {showSubMenu ? (
            <AiOutlineUp color="white" fontSize="25px" />
          ) : (
            <AiOutlineDown color="white" fontSize="25px" />
          )}
          <img
            src={userInfos.photoUrl}
            alt="Não foi possível carregar a imagem"
          />
        </Icons>
      </Head>
      <SubMenu ref={refSubMenu} show={showSubMenu}>
        <p onClick={() => logout()}>Logout</p>
      </SubMenu>
    </>
  );
}

const Head = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 70px;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 25px;
  box-sizing: border-box;
  h1 {
    font-family: "Passion One", cursive;
    color: white;
    font-size: 55px;
    font-weight: bold;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const SubMenu = styled.div`
  position: fixed;
  top: 70px;
  right: 15px;
  display: ${(props) => {
    if (props.show) {
      return "flex";
    } else {
      return "none";
    }
  }};
  justify-content: center;
  align-items: center;
  background-color: #151515;
  width: 150px;
  height: 45px;
  border-radius: 0px 0px 20px 20px;
  p {
    color: white;
    font-family: "Lato", sans-serif;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;
