import { DragAndDropActionsType, Status } from "./enum";
import { ICard } from "./interface";


export type DragAndDropActions =
  | { type: DragAndDropActionsType.CLEAR_CONTEXT; payload: undefined }
  | { type: DragAndDropActionsType.LOAD_CARDS; payload: {cards: ICard[] }}
  | { type: DragAndDropActionsType.ADD_CARDS; payload: { cards: ICard[], status: Status } }
  | { type: DragAndDropActionsType.SWAP_CARDS; payload: { i: number, j: number, status: Status } }
  | { type: DragAndDropActionsType.MOVE_TASK_FROM; payload: {from: Status, id: string, to: Status } };
