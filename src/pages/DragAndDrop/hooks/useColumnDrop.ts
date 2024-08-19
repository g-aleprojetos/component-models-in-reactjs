import { useDrop } from "react-dnd";
import { Status, ItemType } from "../utils/enum/Status";
import { DragItem } from "../utils/interface";

export function useColumnDrop(
  column: Status,
  handleMove: (fromColumn: Status, cardId: string) => void
) {
  const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>({
    accept: ItemType.Card,
    drop: (dragItem) => {
      if (!dragItem || dragItem.from === column) {
        return;
      }

      handleMove(dragItem.from, dragItem.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return {
    isOver,
    dropRef,
  };
}
