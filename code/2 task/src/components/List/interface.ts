import { IListItem } from "../../interface/IListItem";

export interface IList {
  title?:string;
  data:IListItem[];
  align?:'center' | 'end' | 'start';
  spacing?:number | string;
}