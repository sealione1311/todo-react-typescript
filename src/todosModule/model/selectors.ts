import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Filter, Sort } from "./types";

export const getTodoValue = (state: RootState) => state.todos.todoTitle;
export const getTodos = (state: RootState) => state.todos.todosList;
export const getFilter = (state: RootState) => state.todos.filter;
export const getSort = (state: RootState) => state.todos.sort;
export const getEditMode = (state: RootState) => state.todos.editMode;

export const selectFilteredAndSortedTodos = createSelector(
  [getTodos, getFilter, getSort],
  (todos, filter, sort) => {
    let filteredTodos = [...todos];

    if (filter === Filter.All) {
      filteredTodos = [...todos];
    } else if (filter === Filter.Active) {
      filteredTodos = todos.filter((todo) => !todo.completed);
    } else if (filter === Filter.Completed) {
      filteredTodos = todos.filter((todo) => todo.completed);
    }

    if (sort === Sort.Name) {
      filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === Sort.Completed) {
      filteredTodos.sort((a, b) => Number(a.completed) - Number(b.completed));
    }

    return filteredTodos;
  }
);
