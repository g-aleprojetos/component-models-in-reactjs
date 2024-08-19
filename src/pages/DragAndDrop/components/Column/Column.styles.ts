import styled from "styled-components";
import { Status } from "../../utils/enum/Status";
import { ColumnColorScheme } from "../../utils/helpers";

interface IExtraProps {
  $isOver?: boolean;
  $status?: Status;
}

export const ButtonAddPlus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 8px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderColumn = styled.div<IExtraProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  background-color: ${({ $status }) =>
    $status ? ColumnColorScheme[$status] : "white"};
`;

export const Title = styled.h3`
  color: #fff;
  font-family: AvertaStd-Regular, serif;
  padding: 10px;
  box-sizing: border-box;
  cursor: default;
`;

export const CardList = styled.ul<IExtraProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: cadetblue;
  box-sizing: border-box;
  overflow-y: auto;
  height: 500px;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  opacity: ${({ $isOver }) => ($isOver ? 0.85 : 1)};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextButton = styled.p`
  font-family: "AvertaStd-Regular", serif;
  font-size: 12px;
  cursor: pointer;
`;
