function TodoListApp() {
  return (
    <div>
      <h1>No Think, Do It!</h1>
      <form>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button>Add</button>
      </form>

      <ul>
        <li>
          <label htmlFor="chk-1">
            <input type="checkbox" name="" id="chk-1" /> 할 일 1
          </label>
          <button>❌</button>
          <button>✏️</button>
        </li>
        <li>
          <label htmlFor="chk-2">
            <input type="checkbox" name="" id="chk-2" /> 할 일 2
          </label>
          <button>❌</button>
          <button>✏️</button>
        </li>
        <li>
          <label htmlFor="chk-3">
            <input type="checkbox" name="" id="chk-3" /> 할 일 3
          </label>
          <button>❌</button>
          <button>✏️</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoListApp;
