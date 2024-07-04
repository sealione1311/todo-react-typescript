import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosReducer from '../todosModule/model/todosSlice'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
  todos: todosReducer, 
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,   
  })
}
export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 