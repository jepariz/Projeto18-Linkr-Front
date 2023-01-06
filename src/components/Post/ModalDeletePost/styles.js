import styled from "styled-components";

export const ContainerGlobal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ContainerModal = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: #333333;
  gap: 40px;
  padding: 40px 0;
  @media (min-width: 1024px) {
    border-radius: 50px;
  }
`;

export const Text = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  color: #ffffff;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  font-family: "Lato";
  border-radius: 5px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 700;
  background: ${(props) => (props.blue ? "#1877F2" : "#fff")};
  font-size: 18px;
  color: ${(props) => (!props.blue ? "#1877F2" : "#fff")};
  padding: 10px 15px;
  cursor: pointer;
`;
