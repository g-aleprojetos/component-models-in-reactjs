import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;
  justify-content: space-between;
  background-color: lightgray;
  margin: 96px;
`;

export const Card = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  background-color: gray;
  border-radius: 32px;
`;

