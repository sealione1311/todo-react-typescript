import { useAppDispatch } from "../../../store/store";
import {
  removeTodo,
  setEditId,
  toggleComplete,
  toggleEditMode,
} from "../../model/todosSlice";
import TrashLogo from "../../../assets/trash.svg";
import EditLogo from "../../../assets/edit-pencil.svg";
import styles from "./Todo.module.css";

interface TodoProps {
  title: string;
  completed: boolean;
  id: string;
}

function Todo({ id, completed, title }: TodoProps) {
  const dispatch = useAppDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleComplete(id));
  };
  const handleDeleteTodo = () => {
    dispatch(removeTodo(id));
  };
  const handleEditTodo = () => {
    dispatch(toggleEditMode(true));
    dispatch(setEditId(id));
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={handleToggleTodo}
      />
      <h3 className={completed ? styles.completed : ""}>{title}</h3>
      <button className={styles.trashButton} onClick={handleDeleteTodo}>
        <TrashLogo />
      </button>
      <button className={styles.trashButton} onClick={handleEditTodo}>
        <EditLogo />
      </button>
    </li>
  );
}

export { Todo };
