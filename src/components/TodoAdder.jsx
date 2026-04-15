import Button from "./Button.jsx";
import { useState } from "react";

export default function TodoAdder({ addTodo }) {
  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // submit 기보 동작 막자
    if (!inputTodo) return; // 빈 값이면 그대로 리턴

    addTodo(inputTodo.trim()); // todos에 todo 추가
    setInputTodo(""); // input text 빈칸으로 하자
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        className="todo__input"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <Button type="submit" className="todo__button todo__button--add">
        Add
      </Button>
    </form>
  );
}
