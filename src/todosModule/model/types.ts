export interface TodosState {
  todosList: Todo[];
  todoTitle: string;
  activeRadio: string;
  activeSelect: string;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
