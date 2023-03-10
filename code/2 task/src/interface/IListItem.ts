interface ISubData {
  icon:React.ReactNode;
  link:string;
}

export interface IListItem {
  name?:string;
  icon?:string;
  link?:string;
  subData?:ISubData[];
}