import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../../store/store";
import { setSelectValue } from "../../../model/todosSlice";
import styles from "./SelectGroup.module.css";

function SelectGroup() {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectValue(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <h3>Сортировка</h3>
      <select className={styles.select} onChange={handleChange}>
        <option value="name">Наименование</option>
        <option value="status">Статус</option>
      </select>
    </div>
  );
}

export { SelectGroup };
