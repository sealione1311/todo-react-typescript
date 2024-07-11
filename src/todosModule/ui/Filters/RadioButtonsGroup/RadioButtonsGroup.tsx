import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store/store";
import { setFilter } from "../../../model/todosSlice";
import { getFilter } from "../../../model/selectors";
import styles from "./RadioButtonsGroup.module.css";

function RadioButtonGroup() {
  const dispatch = useAppDispatch();
  const selectedOption = useSelector(getFilter);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  interface OptionsItem {
    value: string;
    title: string;
  }

  const options: OptionsItem[] = [
    {
      value: "all",
      title: "Все",
    },
    {
      value: "active",
      title: "Активные",
    },
    {
      value: "completed",
      title: "Завершенные",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h3>Статус</h3>
      {options.map((item) => {
        return (
          <label key={item.value}>
            <input
              type="radio"
              name="option"
              value={item.value}
              checked={selectedOption === item.value}
              onChange={handleOptionChange}
            />
            {item.title}
          </label>
        );
      })}
    </div>
  );
}

export { RadioButtonGroup };
