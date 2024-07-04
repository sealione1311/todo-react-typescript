import Filters from "../Filters/Filters";
import TodoList from "../TodosList/TodoList";
import styles from "./MainWrapper.module.css"

function MainWrapper () {
  
  return (
    <>
    <h3>Список задач</h3>
    <div className={styles.wrapper}>
        <TodoList />
        <Filters /> 
    </div>
    </>
    
  );
}

export default MainWrapper;