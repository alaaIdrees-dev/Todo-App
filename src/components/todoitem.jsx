import useTodoStore from "../store/usetodostore";

function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li className={`todo${todo.completed ? " todo--done" : ""}`}>
      <button
        type="button"
        role="checkbox"
        aria-checked={todo.completed}
        aria-label={`Mark "${todo.title}" as ${
          todo.completed ? "not completed" : "completed"
        }`}
        className="todo__check"
        onClick={() => toggleTodo(todo.id)}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            d="M3.5 8.5l3 3 6-6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span className="todo__title">{todo.title}</span>

      <button
        type="button"
        className="todo__remove"
        aria-label={`Delete "${todo.title}"`}
        onClick={() => removeTodo(todo.id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
}

export default TodoItem;
