import "./todolist.css";
import TodoitemEmpty from "./components/TodoitemEmpty.jsx";
import Button from "./components/Button.jsx";
import Checkbox from "./components/Checkbox.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import Todoitem from "./components/Todoitem.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
class Todo {
  constructor(text) {
    this.id = Date.now(); // 할 일 ID : 고유의 값 == new Date().getTime()
    this.text = text;
    this.isCompleted = false; // 할 일 완료 여부
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => setTodos((todos) => [...todos, new Todo(text)]);

  const toggleTodo = (id) => {
    setTodos((todos) =>
      //todos에서 하나씩 꺼내어 todo. todo의 id 와 id가 같다면, 기존 todo.isCompleted 값 수정. 아니면 그대로
      todos.map((todo) =>
       todos.filter((todo) => todo.id !== id)
    );
  };

  const deleteTodo = (id) => {
        //todos에서 하나씩 꺼낸 todo. id가 다르면, 복사하자
        setTodos((todos) => 
            todos.filter((todo) => todo.id !== id)
        )
    }

  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoListApp;
