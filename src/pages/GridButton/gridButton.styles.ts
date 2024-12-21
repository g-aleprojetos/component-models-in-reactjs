import styled from "styled-components";

interface PropsExtra {
  $top?: number
}

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;
  justify-content: space-between;
  background-color: lightgray;
  margin: 96px;
  padding: 96px 0;
`;

export const Card = styled.li`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: gray;
  border-radius: 32px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const Component = styled.div<PropsExtra>`
  position: absolute; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;  
  height: 200px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  top: ${({$top}) => $top}px; 
  left: 50%; 
  transform: translateX(-50%); 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
