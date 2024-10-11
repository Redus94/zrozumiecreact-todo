import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export const TodoItem = ({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) => {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : null}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
};
