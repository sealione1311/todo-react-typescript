export interface TodosState {
  todosList: ITodo[];
  todoTitle: string;
  filter: string;
  sort: string;
  editMode: boolean; 
  editId: string
}

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export enum Sort {
  Name = 'name',
  Completed = 'completed',
}
