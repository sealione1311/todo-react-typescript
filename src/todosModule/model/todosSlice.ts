import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodosState } from "./types";

const initialState: TodosState = {
  todosList: [],
  todoTitle: "",
  filter: "all",
  sort: "name",
  editMode: false,
};

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    setTodoValue: (state, action: PayloadAction<string>) => {
      state.todoTitle = action.payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      state.todosList.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.todosList.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.todosList.findIndex(
        (todo) => todo.id === updatedTodo.id
      );
      if (index !== -1) {
        state.todosList[index] = updatedTodo;
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    toggleEditMode: (state, action: PayloadAction<boolean>) => {
      state.editMode = action.payload;
    },
  },
});
export const {
  setTodoValue,
  addTodo,
  toggleComplete,
  removeTodo,
  setFilter,
  setSort,
  updateTodo,
  toggleEditMode,
} = todosSlice.actions;

export default todosSlice.reducer;
