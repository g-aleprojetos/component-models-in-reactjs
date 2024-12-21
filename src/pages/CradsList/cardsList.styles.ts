import styled from "styled-components";

interface CardsListProps {
    $columnGap?: number;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 96px;
  padding-top: 16px;
  background-color: #000;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
  box-sizing: border-box;
`;

export const CardsList = styled.div<CardsListProps>`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: ${({ $columnGap }) => `${$columnGap}px`};
`;

export const Card = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  background-color: gray;
  border-radius: 32px;
`;
