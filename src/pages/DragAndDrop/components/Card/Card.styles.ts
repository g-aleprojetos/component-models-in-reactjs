import styled from "styled-components";
import { ReactComponent as IconSetaSVG } from "../../images/seta.svg";
import { Status } from "../../utils/enum/Status";
import { ColumnColorScheme } from "../../utils/helpers";

interface IExtraProps {
    $isDragging?: boolean;
    $status ?: Status;
    $direction?: "left" | "right";
    $ative?: boolean;
    $iconRight?: boolean;
}

interface TextItemProps {
    fontSize?: string;
  }

  export const Card = styled.li<IExtraProps>`
  background-color: ${({ $status }) => $status ? ColumnColorScheme[$status] : "white"};
  box-shadow: 5px 5px 5px 2px grey;
  height: 100px;
  border-radius: 5px;
  margin: 0 16px;
  box-sizing: border-box;
  flex-shrink: 0;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
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
  cursor: pointer;
`;

export const ContainerButton = styled.div<IExtraProps>`
  display: flex;
  justify-content: ${({ $iconRight }) => ($iconRight ? "flex-end" : "space-between")};
  align-items: center;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const IconSeta = styled(IconSetaSVG)<IExtraProps>`
  fill: #8f95a3;
  transform: ${({ $direction }) => ($direction === 'left' ? 'rotate(180deg)' : 'none')};
  transition: transform 0.2s ease-in-out;
`;

export const RoundButton = styled.button<IExtraProps>`
  display: ${({ $ative }) => ($ative ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #8f95a3;
  cursor: pointer;
`;

export const TextItem = styled.p<TextItemProps>`
  font-family: "AvertaStd-Regular", serif;
  font-size: ${(props) => props.fontSize || "24px"};
`;

export const TextStatus = styled(TextItem).attrs({
  fontSize: "16px",
})``;