import { useState } from "react";
import CounterApp from "./CounterApp";
import TodoListApp from "./TodoListApp";

function ButtonPageApp({ setPage }) {
  return (
    <div>
      <h1>App 목록</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            width: "200px",
            height: "200px",
            fontSize: "1.5rem",
          }}
          onClick={() => setPage("counterapp")}
        >
          🔢 CounterApp
        </button>

        <button
          style={{
            width: "200px",
            height: "200px",
            fontSize: "1.5rem",
          }}
          onClick={() => setPage("todolistapp")}
        >
          ✅ TodoListApp
        </button>
      </div>
    </div>
  );
}

export default function HomeApp() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <ButtonPageApp setPage={setPage} />}

      {page === "counterapp" && <CounterApp />}

      {page === "todolistapp" && <TodoListApp />}

      {page !== "home" && (
        <button
          onClick={() => setPage("home")}
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#eee",
            padding: "6px",
          }}
        >
          🏠 Home
        </button>
      )}
    </div>
  );
}
