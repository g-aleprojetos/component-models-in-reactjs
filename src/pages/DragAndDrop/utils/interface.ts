import { Status } from "./enum/Status";

interface comum {
    id: string;
    name: string;
}

export interface ICard extends comum{
    status: Status;
}

export interface IColumn extends comum {   
    status:Status;
    cards: ICard[];
}

export interface DragItem {
    index: number;
    id: ICard['id'];
    from: Status;
  }
