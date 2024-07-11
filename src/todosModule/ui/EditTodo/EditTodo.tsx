import { useSelector } from "react-redux";
import { getTodos } from "../../model/selectors";
import { useState } from "react";
import { toggleEditMode, updateTodo } from "../../model/todosSlice";
import { useAppDispatch } from "../../../store/store";
import SaveLogo from "../../../assets/save-floppy.svg";
import styles from "./EditTodo.module.css";

interface EditTodoProps {
  id: string;
}

function EditTodo({ id }: EditTodoProps) {
  const [activeTodo] = useSelector(getTodos).filter((item) => item.id === id);
  const { title } = activeTodo;
  const [updateTitle, setActiveTitle] = useState(title);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTitle(e.target.value);
  };

  const handleSaveClick = () => {
    if (updateTitle) {
      const updatedTodo = { ...activeTodo, title: updateTitle };
      dispatch(updateTodo(updatedTodo));
      setActiveTitle("");
      dispatch(toggleEditMode(false));
    }
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" onChange={handleInputChange} value={updateTitle} />
      <button className={styles.button} onClick={handleSaveClick}>
        <SaveLogo />
      </button>
    </div>
  );
}

export { EditTodo };
