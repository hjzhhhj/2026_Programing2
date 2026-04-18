import TodoitemEmpty from "./TodoitemEmpty.jsx";
import Todoitem from "./Todoitem.jsx";

export default function TodoList({ todos, ...rest }) {
  return (
    <ul className="todo__list">
      {/* todos에 값이 없으면, TodoitemEmpty */}
      {todos.length === 0 && <TodoitemEmpty />}
      {/* todos에 값이 있으면, Todoitem에 todo를 넣자 */}
      {todos.length > 0 &&
        todos.map((todo) => <Todoitem key={todo.id} todo={todo} {...rest} />)}
    </ul>
  );
}
