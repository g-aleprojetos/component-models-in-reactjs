import React, { useCallback, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { ICard } from "./utils/interface";
import { Column } from "./components/Column";
import { Status } from "./utils/enum/Status";
import { DragAndDropActionsType } from "./utils/enum";
import { useDragAndDropContext } from "./context";
import * as S from "./DragAndDrop.styles";

export const DragAndDrop = () => {
  const { columns, columnsAction } = useDragAndDropContext();

  const obterDados = useCallback(() => {
    columnsAction({
      type: DragAndDropActionsType.LOAD_CARDS,
      payload: { cards },
    });
  }, [columnsAction]);

  useEffect(() => {
    obterDados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleAddEmptyTask = useCallback(
    (status: Status) => {
      const newTasks: ICard[] = Array.from({ length: 10 }, (_, index) => ({
        id: uuidv4(),
        name: faker.string.alpha({ length: 10 }),
        status,
      }));

      columnsAction({
        type: DragAndDropActionsType.ADD_CARDS,
        payload: { cards: newTasks, status },
      });
    },
    [columnsAction]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <S.Container>
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            addEmptyTask={HandleAddEmptyTask}
          />
        ))}
      </S.Container>
    </DndProvider>
  );
};

const cards: ICard[] = [
  {
    id: "f1d0854e-e54c-4375-b2b7-c74918a4b6a9",
    name: "Card 01",
    status: Status.COLUNA1,
  },
  {
    id: "33b30192-617d-46fe-8f52-4c111e03dbac",
    name: "Card 02",
    status: Status.COLUNA1,
  },
  {
    id: "f1642ac1-ab6a-4b9c-adc3-8df7431d942d",
    name: "Card 03",
    status: Status.COLUNA1,
  },
  {
    id: "8e757fb3-6f50-4de5-bc5f-d27e0adc3ede",
    name: "Card 04",
    status: Status.COLUNA2,
  },
  {
    id: "6358ed80-5731-43c0-ae8e-8046df69dc1f",
    name: "Card 05",
    status: Status.COLUNA2,
  },
  {
    id: "8d9b45dc-118c-4691-a5cb-ee4188a546d4",
    name: "Card 06",
    status: Status.COLUNA2,
  },
  {
    id: "66ca2982-ad24-44a3-9b30-f38bc63c0b64",
    name: "Card 07",
    status: Status.COLUNA3,
  },
  {
    id: "193349df-4f72-47b6-ba4a-2ffa1cd3683c",
    name: "Card 08",
    status: Status.COLUNA3,
  },
  {
    id: "c9b2b75c-c14f-44ef-87d1-b78e9f66b8a5",
    name: "Card 09",
    status: Status.COLUNA3,
  },
  {
    id: "5ded475d-92d0-4cd9-84a9-2d12a2ef4fc3",
    name: "Card 10",
    status: Status.COLUNA4,
  },
  {
    id: "66c70e9c-8df8-4279-8da3-fb00a5889021",
    name: "Card 11",
    status: Status.COLUNA4,
  },
  {
    id: "d972a57d-d780-4f9f-8c58-5ff460b3abd0",
    name: "Card 12",
    status: Status.COLUNA4,
  },
];
