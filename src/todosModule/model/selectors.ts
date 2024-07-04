import { RootState } from "../../store/store";

export const getTodoValue = (state: RootState) => state.todos.todoTitle;
export const getTodos = (state: RootState) => state.todos.todosList;
export const getActiveRadio = (state: RootState) => state.todos.activeRadio;
export const getActiveSelect = (state: RootState) => state.todos.activeSelect;
