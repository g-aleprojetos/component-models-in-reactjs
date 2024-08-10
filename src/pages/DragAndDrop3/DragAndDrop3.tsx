import React, { useEffect, useRef } from "react";
import * as S from "./DragAndDrop3.styles";
import { ICard, IColumn, Status } from "./interface";

export const DragAndDrop3 = () => {
  const [columns, setColumns] = React.useState<IColumn[]>(colunas);
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const columnsCopy = columnRefs.current.slice();

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      target.classList.add("dragging");
    };

    const handleDragEnd = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove("dragging");

      const dragging = document.querySelector(".dragging") as HTMLElement;
      if (!dragging) return;

      const targetColumn = dragging.closest(".column");
      if (!targetColumn) return;

      const newColumnIndex = Array.from(
        targetColumn.parentElement!.children
      ).indexOf(targetColumn);
      if (newColumnIndex === -1) return;

      const newStatus = getStatusByColumnIndex(newColumnIndex);
      const cardId = parseInt(dragging.getAttribute("data-testid")!, 10);

      setColumns((prevColumns) => {
        const updatedColumns = prevColumns.map((column, index) => {
          const updatedItems = column.itens
            ? column.itens.filter((item) => item.id !== cardId)
            : [];

          if (index === newColumnIndex) {
            const draggingItem = prevColumns
              .flatMap((col) => col.itens || [])
              .find((item) => item.id === cardId);

            if (draggingItem) {
              draggingItem.status = newStatus;
              updatedItems.push(draggingItem);
            }
          }

          return {
            ...column,
            itens: updatedItems,
          };
        });

        return updatedColumns;
      });

      // Reset display style if modified
      dragging.style.display = "";
    };

    const handleDragOver = (columnIndex: number) => (e: DragEvent) => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging") as HTMLElement;
      const column = columnsCopy[columnIndex];
      if (column && dragging) {
        const applyAfter = getNewPosition(column, e.clientY);
        if (applyAfter) {
          applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
          column.prepend(dragging);
        }
      }
    };

    const getNewPosition = (column: Element, posY: number) => {
      const cards = column.querySelectorAll(".item:not(.dragging)");
      let result: Element | null = null;
      for (let i = 0; i < cards.length; i++) {
        const refer_card = cards[i] as HTMLElement;
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;
        if (posY >= boxCenterY) {
          result = refer_card;
        }
      }
      return result;
    };

    const getStatusByColumnIndex = (index: number): Status => {
      switch (index) {
        case 0:
          return Status.COLUNA1;
        case 1:
          return Status.COLUNA2;
        case 2:
          return Status.COLUNA3;
        case 3:
          return Status.COLUNA4;
        default:
          return Status.COLUNA1;
      }
    };

    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragend", handleDragEnd);

    columnsCopy.forEach((column, index) => {
      if (column) column.addEventListener("dragover", handleDragOver(index));
    });

    return () => {
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
      columnsCopy.forEach((column, index) => {
        if (column)
          column.removeEventListener("dragover", handleDragOver(index));
      });
    };
  }, []);

  return (
    <S.Kanban>
      {columns.map((column, index) => (
        <Coluna
          key={column.id}
          coluna={column}
          columnRef={(el) => (columnRefs.current[index] = el)}
        />
      ))}
    </S.Kanban>
  );
};

const Coluna = ({
  coluna,
  columnRef,
}: {
  coluna: IColumn;
  columnRef: (el: HTMLDivElement) => void;
}) => {
  return (
    <S.ColumnContent>
      <S.HeaderColumn $color={coluna.colorHeader}>{coluna.name}</S.HeaderColumn>
      <S.Column ref={columnRef} className="column">
        {coluna.itens?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </S.Column>
    </S.ColumnContent>
  );
};

const Card = ({ item }: { item: ICard }) => {
  const { id, name: nome, status } = item;
  console.log(item);
  return (
    <S.Card
      data-testid={id}
      className="item"
      draggable="true"
      $color={getCardColor(status)}
    >
      <S.CardContent>
        <S.TextItem>{nome}</S.TextItem>
        <S.TextStatus>Status: {status}</S.TextStatus>
      </S.CardContent>
    </S.Card>
  );
};

const getCardColor = (status: Status) => {
  switch (status) {
    case Status.COLUNA1:
      return "#5D615F";
    case Status.COLUNA2:
      return "#FF8B22";
    case Status.COLUNA3:
      return "#FFB81A";
    case Status.COLUNA4:
      return "#079D56";
    default:
      return "#000";
  }
};

const colunas: IColumn[] = [
  {
    id: 1,
    name: "Coluna 01",
    colorHeader: "#5D615F",
    status: Status.COLUNA1,
    itens: [
      {
        id: 1,
        name: "Card 01",
        status: Status.COLUNA1,
      },
      {
        id: 2,
        name: "Card 02",
        status: Status.COLUNA1,
      },
      {
        id: 3,
        name: "Card 03",
        status: Status.COLUNA1,
      },
    ],
  },
  {
    id: 2,
    name: "Coluna 02",
    colorHeader: "#FF8B22",
    status: Status.COLUNA2,
    itens: [
      {
        id: 4,
        name: "Card 04",
        status: Status.COLUNA2,
      },
      {
        id: 5,
        name: "Card 05",
        status: Status.COLUNA2,
      },
      {
        id: 6,
        name: "Card 06",
        status: Status.COLUNA2,
      },
    ],
  },
  {
    id: 3,
    name: "Coluna 03",
    colorHeader: "#FFB81A",
    status: Status.COLUNA3,
    itens: [
      {
        id: 7,
        name: "Card 07",
        status: Status.COLUNA3,
      },
      {
        id: 8,
        name: "Card 08",
        status: Status.COLUNA3,
      },
      {
        id: 9,
        name: "Card 09",
        status: Status.COLUNA3,
      },
      {
        id: 10,
        name: "Card 10",
        status: Status.COLUNA3,
      },
    ],
  },
  {
    id: 4,
    name: "Coluna 04",
    colorHeader: "#079D56",
    status: Status.COLUNA4,
    itens: [],
  },
];
