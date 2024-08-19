import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  height: calc(100vh - 48px);
  gap: 10px;
  padding: 0 24px;
  margin: 24px 0;
  box-sizing: border-box;
  overflow: hidden;
`;
