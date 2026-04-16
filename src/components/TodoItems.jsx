import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";

export default function TodoItems({ todo }) {
  return (
    <li
      className={`todo__item ${todo.isCompleted ? "todo__item--completed" : ""}`}
    >
      <Checkbox id={todo.id} checked={todo.isCompleted}>
        {todo.text}
      </Checkbox>
      <Button className="todo__button todo__button--edit">✏️</Button>
      <Button className="todo__button todo__button--delete">❌</Button>
    </li>
  );
}
