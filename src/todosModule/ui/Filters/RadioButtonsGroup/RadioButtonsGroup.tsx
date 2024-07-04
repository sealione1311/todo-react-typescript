import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../store/store';
import { setRadioValue } from '../../../model/todosSlice';
import { getActiveRadio } from '../../../model/selectors';
import styles from './RadioButtonsGroup.module.css'
function RadioButtonGroup() {
  const dispatch = useAppDispatch() 
  const selectedOption = useSelector(getActiveRadio)

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadioValue(e.target.value));   
  };

  return (
    <div className={styles.wrapper}>
      <h3>Статус</h3>
      <label>
        <input
          type="radio"
          name="option"
          value="all"
          checked={selectedOption === 'all'}
          onChange={handleOptionChange}
        />
        Все
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="active"
          checked={selectedOption === 'active'}
          onChange={handleOptionChange}
        />
        Активные
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="completed"
          checked={selectedOption === 'completed'}
          onChange={handleOptionChange}
        />
        Завершенные
      </label>
    </div>
  );
}

export default RadioButtonGroup;