import React from "react";
import { useColumnDrop } from "../../hooks";
import { IColumn } from "../../utils/interface";
import { Card } from "../Card";
import { DragAndDropActionsType, Status } from "../../utils/enum";
import { useDragAndDropContext } from "../../context";
import * as S from "./Column.styles";

export const Column = ({
  column,
  addEmptyTask,
}: {
  column: IColumn;
  addEmptyTask: (status: Status) => void;
}) => {
  const { columnsAction } = useDragAndDropContext();
  
   const handleMoveTaskFrom = (fromStatus: Status, id: string) => {
    columnsAction({
      type: DragAndDropActionsType.MOVE_TASK_FROM,
      payload: { from: fromStatus, id, to: column.status },
    });
  };

  const { dropRef, isOver } = useColumnDrop(column.status, handleMoveTaskFrom);

  const handleAddEmptyTask = () => {
    addEmptyTask(column.status);
  }

  const swapTasks = (i: number, j: number) => {
    columnsAction({
      type: DragAndDropActionsType.SWAP_CARDS,
      payload: { i, j, status: column.status },
    });
  };

  return (
    <S.Container>
      <S.HeaderColumn $status={column.status}>
        <S.Title>{column.name}</S.Title>
      </S.HeaderColumn>
      <S.CardList ref={dropRef} $isOver={isOver} key={column.status}>
        {column.cards.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            card={card}
            onDropHover={swapTasks}
          />
        ))}
        <S.ButtonAddPlus onClick={handleAddEmptyTask}>
          <S.TextButton>Adicionar mais itens</S.TextButton>
        </S.ButtonAddPlus>
      </S.CardList>
    </S.Container>
  );
};
