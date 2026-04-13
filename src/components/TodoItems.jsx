import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";

export default function TodoItems() {
  return (
    <li className="todo__item todo__item--complete">
      <Checkbox id="1" className="todo__checkbox" />
      <Button className="todo__button todo__button--edit">✏️</Button>
      <Button className="todo__button todo__button--delete">❌</Button>
    </li>
  );
}
