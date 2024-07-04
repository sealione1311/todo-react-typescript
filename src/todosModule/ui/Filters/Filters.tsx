
import styles from "./Filters.module.css";
import { RadioButtonGroup } from "./RadioButtonsGroup/RadioButtonsGroup";
import { SelectGroup } from "./SelectGroup/SelectGroup";


function Filters() {
  return (
    <div className={styles.wrapper}>
      <RadioButtonGroup />
      <SelectGroup />
    </div>
  );
}

export { Filters };
