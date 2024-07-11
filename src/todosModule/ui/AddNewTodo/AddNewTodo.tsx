import { addTodo, setTodoValue } from "../../model/todosSlice";
import { useAppDispatch } from "../../../store/store";
import { useState } from "react";
import styles from "./AddNewTodo.module.css";

function AddNewTodo() {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    dispatch(setTodoValue(e.target.value));
  };

  const handleAddClick = () => {
    if (title) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Новая задача</h3>
      <input type="text" onChange={handleInputChange} value={title} />
      <button className={styles.button} onClick={handleAddClick}>
        + Добавить
      </button>
    </div>
  );
}

export { AddNewTodo };
