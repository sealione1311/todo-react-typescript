import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { todosState } from './types'

  const initialState: todosState = {
    todosList: [],
    todoTitle: "",
    activeRadio: "all",   
    activeSelect: "name" 
  }

  export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
      setTodoValue: ((state, action:PayloadAction<string> ) => {
        state.todoTitle = action.payload
      }),
      addTodo(state, action:PayloadAction<string>) {
        state.todosList.push({
          id: new Date().toISOString(),
          title: action.payload,
          completed: false,
        });
    },
    toggleComplete(state, action:PayloadAction<string>) {
      const toggledTodo = state.todosList.find(todo => todo.id === action.payload);
      if(toggledTodo){
        toggledTodo.completed = !toggledTodo.completed;
      }    
  },   
  removeTodo(state, action:PayloadAction<string>) {
      state.todosList = state.todosList.filter(todo => todo.id !== action.payload);
  },  
  setRadioValue: ((state, action:PayloadAction<string> ) => {
    state.activeRadio = action.payload
  }),
  setSelectValue: ((state, action:PayloadAction<string> ) => {
    state.activeSelect = action.payload
  }),
    },
    })
export const { setTodoValue, addTodo,toggleComplete, removeTodo,setRadioValue, setSelectValue } = todosSlice.actions
export default todosSlice.reducer

