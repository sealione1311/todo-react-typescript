import { useSelector } from "react-redux";
import { getEditId, getEditMode } from "../../model/selectors";
import { EditTodo } from "../EditTodo/EditTodo";
import { Todo } from "../Todo/Todo";
import { ITodo } from "../../model/types";

interface TodoItemProps {
  todo: ITodo;  
}

function TodoItem({ todo }: TodoItemProps) {
  const editMode = useSelector(getEditMode);
  const editId = useSelector(getEditId)

  return editMode && editId === todo.id ? (
    <EditTodo key={todo.id} id={todo.id} />
  ) : (
    <Todo
      id={todo.id}
      key={todo.id}
      title={todo.title}
      completed={todo.completed}
    />
  );
}

export { TodoItem };
