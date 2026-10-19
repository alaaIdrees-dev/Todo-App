import useTodoStore from "../store/usetodostore";

function TodoStats() {
  const todos = useTodoStore((state) => state.todos);

  const totalTodos = todos.length;

  const completedTodos = todos.filter(
    (todo) => todo.completed,
  ).length;

  const activeTodos = totalTodos - completedTodos;

  return (
    <section className="stats" aria-label="Task statistics">
      <p>
        Total Tasks <strong>{totalTodos}</strong>
      </p>
      <p>
        Remaining <strong>{activeTodos}</strong>
      </p>
      <p>
        Completed <strong>{completedTodos}</strong>
      </p>
    </section>
  );
}

export default TodoStats;
