import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 611px;
  background: #f1f1f1;
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  gap: 10px 20px;
  padding: 20px;
`;

export const Photo = styled.div`
  grid-column: 1/2;
  grid-row: 1/4;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Username = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  height: 20px;
  border-radius: 5px;
`;

export const Description = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  height: 50px;
  border-radius: 5px;
`;

export const UrlMetadata = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  height: 115px;
  border-radius: 5px;
`;
