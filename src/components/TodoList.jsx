import TodoItems from "./TodoItems";
import TodoItemEmpty from "./TodoItemEmpty.jsx";

export default function TodoList() {
  return (
    <ul className="todo__list">
      <TodoItemEmpty />
      <TodoItems />
    </ul>
  );
}
