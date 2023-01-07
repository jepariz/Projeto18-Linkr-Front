import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Button = styled.button`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (!props.blue ? "#1877F2" : "#FFFFFF")};
  background-color: ${(props) => (props.blue ? "#1877F2" : "#FFFFFF")};
`;
