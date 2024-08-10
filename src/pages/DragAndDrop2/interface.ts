interface comum {
    id: number;
    name: string;
}

export interface ICard extends comum{
    status: Status;
}

export interface IColumn extends comum {   
    colorHeader: string;
    status:Status;
    itens?: ICard[];
}

export enum Status {
    COLUNA1 = "Coluna 01",
    COLUNA2 = "Coluna 02",
    COLUNA3 = "Coluna 03",
    COLUNA4 = "Coluna 04",
}