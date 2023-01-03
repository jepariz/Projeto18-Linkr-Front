import styled from "styled-components"
import Header from "../Header";

export default function Timeline() {
    return (
    <Container>
        <Header />
    </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #333333;
`;