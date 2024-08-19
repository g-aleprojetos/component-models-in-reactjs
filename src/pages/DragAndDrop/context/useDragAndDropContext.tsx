import React, {
  createContext,
  useMemo,
  useReducer,
  ReactNode,
  useContext,
} from "react";
import { ICard, IColumn } from "../utils/interface";
import { DragAndDropActionsType, Status } from "../utils/enum";
import { DragAndDropActions } from "../utils/DragAndDropActions";
import { swap } from "../utils/helpers";

export type DragAndDropContextProps = {
  columns: IColumn[];
  columnsAction: React.Dispatch<DragAndDropActions>;
};

export const DragAndDropContext = createContext({} as DragAndDropContextProps);

const colunasIniciais: IColumn[] = [
  {
    id: "1f1a8b21-6af4-4014-9dcb-eedcd9eaffd7",
    name: "Coluna 01",
    status: Status.COLUNA1,
    cards: [],
  },
  {
    id: "20ea992d-fc02-44d5-bad1-0cbe93dd2c86",
    name: "Coluna 02",
    status: Status.COLUNA2,
    cards: [],
  },
  {
    id: "b69ac399-436d-453b-8c24-72ee756b8664",
    name: "Coluna 03",
    status: Status.COLUNA3,
    cards: [],
  },
  {
    id: "e9196060-7f5b-43c8-a142-8400850e3a92",
    name: "Coluna 04",
    status: Status.COLUNA4,
    cards: [],
  },
];

const loadCardsToColumns = (state: IColumn[], payload: { cards: ICard[]; }): IColumn[] => {
  const newColumns = [...state];

  payload.cards.forEach((card) => {
    const column = newColumns.find(col => col.status === card.status);
    if (column && !column.cards.find(c => c.id === card.id)) { 
      column.cards.push(card);
    }
  });
  return newColumns;
};



const addCardsToColumn = (
  state: IColumn[],
  payload: { cards: ICard[]; status: Status }
): IColumn[] => {
  return state.map((column) =>
    column.status === payload.status
      ? { ...column, cards: [...column.cards, ...payload.cards] }
      : column
  );
};

const swapTasks = (
  state: IColumn[],
  payload: { i: number; j: number; status: Status }
): IColumn[] => {
  return state.map((column) => {
    if (column.status === payload.status) {
      const updatedCards = swap(column.cards, payload.i, payload.j);
      return { ...column, cards: updatedCards };
    }
    return column;
  });
};

const moveTaskFrom = (
  state: IColumn[],
  payload: { from: Status; id: string; to: Status }
): IColumn[] => {
  return state.map((column) => {
    if (column.status === payload.from) {
      const updatedCards = column.cards.filter((task) => task.id !== payload.id);
      return { ...column, cards: updatedCards };
    }
    if (column.status === payload.to) {
      const movingTask = state.find(col => col.status === payload.from)?.cards.find(task => task.id === payload.id);
      if (movingTask) {
        const updatedCards = [ { ...movingTask, status: payload.to }, ...column.cards ];
        return { ...column, cards: updatedCards };
      }
    }
    return column;
  });
};


const servicoComOpsReducer = (state: IColumn[], action: DragAndDropActions) => {
  const { type, payload } = action;
  switch (type) {
    case DragAndDropActionsType.CLEAR_CONTEXT:
      return [];
    case DragAndDropActionsType.LOAD_CARDS:
      return loadCardsToColumns(state, payload);
    case DragAndDropActionsType.ADD_CARDS:
      return addCardsToColumn(state, payload);
    case DragAndDropActionsType.SWAP_CARDS:
      return swapTasks(state, payload);
    case DragAndDropActionsType.MOVE_TASK_FROM:
      return moveTaskFrom(state, payload);
  }
};

export const DragAndDropProvider = ({ children }: { children: ReactNode }) => {
  const [columns, columnsAction] = useReducer(
    servicoComOpsReducer,
    colunasIniciais
  );

  const value = useMemo(() => ({ columns, columnsAction }), [columns]);

  return (
    <DragAndDropContext.Provider value={value}>
      {children}
    </DragAndDropContext.Provider>
  );
};

export function useDragAndDropContext() {
  return useContext(DragAndDropContext);
}
