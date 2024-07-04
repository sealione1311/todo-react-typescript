import Todo from '../Todo/Todo';
import { getActiveRadio, getActiveSelect, getTodos } from '../../model/selectors';
import { useSelector } from 'react-redux';
import styles from './TodoList.module.css';

function TodoList() {
  const todosList = useSelector(getTodos);
  const sort = useSelector(getActiveSelect) 
  const filter = useSelector(getActiveRadio) 
  const sortedAndFilteredTodos = todosList
  .slice() 
  .sort((a, b) => {
    if (sort === 'name') {
      return a.title.localeCompare(b.title);
    } else {      
      return  a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    }
  })
  .filter((todo) => {
    if (filter === 'all') {
      return true; 
    } else if (filter === 'active') {
      return !todo.completed; 
    } else if (filter === 'completed') {
      return todo.completed; 
    }
  });
  const NoTodoComponent = () => <h2>Нет задач!</h2>

  return (
    <div className={styles.wrapper}> 
    {sortedAndFilteredTodos.length ? <ul className={styles.list}> 
      {sortedAndFilteredTodos.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          completed={todo.completed}          
        /> 
      ))}
    </ul> : <NoTodoComponent />}
    </div>
    
  );
}

export default TodoList;