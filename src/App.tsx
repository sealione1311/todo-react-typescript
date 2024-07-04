import './App.css'
import Header from './shared/ui/Header/Header'
import AddNewTodo from './todosModule/ui/AddNewTodo/AddNewTodo'
import MainWrapper from './todosModule/ui/MainWrapper/MainWrapper'


function App() {
  

  return (
    <>
    <Header />
     <AddNewTodo />     
     <MainWrapper />   
    </>
  )
}

export default App
