import styled from "styled-components";

interface IExtra {
  $color?: string;
}

export const Column = styled.div`
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
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div<IExtra>`
  background-color: ${({ $color }) => $color};
  height: 100px;
  border-radius: 5px;
  margin: 0 16px;
  box-sizing: border-box;
  flex-shrink: 0;
  z-index: 1000; 
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  height: 100%;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 8px;
  box-sizing: border-box;
`;

export const Kanban = styled.div`
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

export const HeaderColumn = styled.div<IExtra>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  background-color: ${({ $color }) => $color || "white"};
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const Text = styled.p`
  color: #fff;
  font-family: AvertaStd-Regular, serif;
  padding: 10px;
  box-sizing: border-box;
`;

export const TextItem = styled.p`
  font-family: AvertaStd-Regular, serif;
  font-size: 24px;
`;

export const TextStatus = styled.p`
  font-family: AvertaStd-Regular, serif;
  font-size: 16px;
`;