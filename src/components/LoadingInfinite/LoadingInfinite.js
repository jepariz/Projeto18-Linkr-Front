import styled from "styled-components";
import { FiLoader } from "react-icons/fi";

export default function LoadingInfinite() {
  return (
    <Container>
      <FiLoader color="#6d6d6d" fontSize={36} />
      Loading more posts...
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #6d6d6d;
  width: 100%;
  align-items: center;
`;
