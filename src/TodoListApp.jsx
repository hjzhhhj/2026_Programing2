import "./todolist.css";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import Button from "./components/Button.jsx";
import Checkbox from "./components/Checkbox.jsx";

function TodoListApp() {
  return (
    <div className="todo">
      <h1 className="todo__title">No Think, Do It.</h1>
      <form className="todo__form">
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          className="todo__input"
        />
        <Button type="submit" className="todo__button todo__button--add">
          Add
        </Button>
      </form>
      <ul className="todo__list">
        <li className="todo__item todo__item--empty">
          <p>할 일 없음.</p>
        </li>
        <TodoItemEmpty />
        <li className="todo__item todo__item--complete">
          <Checkbox id="1" className="todo__checkbox" />
          <input type="checkbox" id="chk-1" className="todo__checkbox" />
          <label htmlFor="chk-1" className="todo__label">
            think
          </label>
          <Button className="todo__button todo__button--edit">✏️</Button>
          <Button className="todo__button todo__button--delete">❌</Button>
        </li>
      </ul>
    </div>
  );
}

export default TodoListApp;
