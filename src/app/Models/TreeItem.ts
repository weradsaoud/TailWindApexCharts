import { FlatArrayItem } from "./FlatArrayItem"

export type TreeItem = {
  children: TreeItem[];
  searchText: string;
} & FlatArrayItem
