import React, { memo } from "react";
import _ from "lodash";
import { ICard } from "../../utils/interface";
import { Status } from "../../utils/enum/Status";
import { useTaskDragAndDrop } from "../../hooks";
import { DragAndDropActionsType } from "../../utils/enum";
import { useDragAndDropContext } from "../../context";
import * as S from "./Card.styles";

type CardProps = {
  index: number;
  card: ICard;
  onDropHover: (i: number, j: number) => void;
};

export const Card = ({
  index,
  card,
  onDropHover: handleDropHover,
}: CardProps) => {
  const { columnsAction } = useDragAndDropContext();
  const { ref, isDragging } = useTaskDragAndDrop<HTMLLIElement>(
    { card, index: index },
    handleDropHover
  );

  const handleMoveTaskFrom = (fromStatus: Status, id: string, toStatus: Status) => {
    columnsAction({
      type: DragAndDropActionsType.MOVE_TASK_FROM,
      payload: { from: fromStatus, id, to: toStatus },
    });
  };

  return (
    <S.Card
      key={card.id}
      ref={ref}
      $status={card.status}
      $isDragging={isDragging}
    >
      <S.CardContent>
        <S.TextItem>{card.name}</S.TextItem>
        <Buttons
          status={card.status}
          handleMoveTaskFrom={handleMoveTaskFrom}
          cardId={card.id}
        />
        <S.TextStatus>Status: {card.status}</S.TextStatus>
      </S.CardContent>
    </S.Card>
  );
};

const Buttons = ({
  status,
  handleMoveTaskFrom,
  cardId,
}: {
  status: Status;
  handleMoveTaskFrom: (fromStatus: Status, id: string, toStatus: Status) => void;
  cardId: string;
}) => {

  return (
    <S.ContainerButton $iconRight={status === Status.COLUNA1}>
      <Button
        direction="left"
        cardId={cardId}
        status={status}
        moveTask={handleMoveTaskFrom}
      />
      <Button
        direction="right"
        cardId={cardId}
        status={status}
        moveTask={handleMoveTaskFrom}
      />
    </S.ContainerButton>
  );
};

const Button = ({
  cardId,
  direction,
  status,
  moveTask,
}: {
  cardId: string
  direction: "left" | "right";
  status: Status;
  moveTask: (fromStatus: Status, id: string, toStatus: Status) => void;
}) => {

  const isActive = buttonActiveStatus[status]?.includes(direction) ?? false;
  if (!isActive) return null;

  const nextStatusValue = nextStatus[status]?.[direction];
  if (!nextStatusValue) return null;

  const handleOnClick = () => {
    moveTask(status, cardId, nextStatusValue);
  }

  return (
    isActive && (
      <S.RoundButton $ative={isActive} onClick={handleOnClick}>
        <S.IconSeta $direction={direction} />
      </S.RoundButton>
    )
  );
};

const buttonActiveStatus: Record<Status, ('left' | 'right')[]> = {
  [Status.COLUNA1]: ['right'],
  [Status.COLUNA2]: ['left', 'right'],
  [Status.COLUNA3]: ['left', 'right'],
  [Status.COLUNA4]: ['left'],
};

type NextStatusMap = {
  [key in Status]: Partial<Record<'left' | 'right', Status>>;
};

const nextStatus: NextStatusMap = {
  [Status.COLUNA1]: { right: Status.COLUNA2 },
  [Status.COLUNA2]: { left: Status.COLUNA1, right: Status.COLUNA3 },
  [Status.COLUNA3]: { left: Status.COLUNA2, right: Status.COLUNA4 },
  [Status.COLUNA4]: { left: Status.COLUNA3 },
};


export default memo(Card, (prevProps, nextProps) => {
  return (
    _.isEqual(prevProps.card, nextProps.card) &&
    _.isEqual(prevProps.index, nextProps.index) &&
    prevProps.onDropHover === nextProps.onDropHover
  );
});
