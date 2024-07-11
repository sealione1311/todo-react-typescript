import { selectFilteredAndSortedTodos } from "../../model/selectors";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";
import { NoTodoComponent } from "../NoTodoComponent/NoTodoComponent";
import { TodoItem } from "../TodoItem/TodoItem";

function TodoList() {
  
  const todos = useSelector(selectFilteredAndSortedTodos);

  return (
    <div className={styles.wrapper}>
    {todos.length === 0 ? (
      <NoTodoComponent />
    ) : (
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    )}
  </div>
  );
}

export { TodoList };
