import { Status } from "./enum/Status";

export function swap<T>(arr: T[], i: number, j: number): T[] {
  const copy = [...arr];
  const tmp = copy[i];
  copy[i] = copy[j];
  copy[j] = tmp;
  return copy;
}

export const ColumnColorScheme: Record<Status, string> = {
  'Coluna 01': '#5D615F',
  'Coluna 02': '#FF8B22',
  'Coluna 03': '#FFB81A',
  'Coluna 04': '#079D56',
};