import "./index.css";
import { useState } from "react";
import AddTodo from "./components/addtodo";
import TodoList from "./components/todolist";
import TodoFilters from "./components/todofilters";
import TodoStats from "./components/todostats";

function App() {
  const [filter, setFilter] = useState("all");
  return (
    <main className="app">
      <h1 className="app__title">My Tasks</h1>
      <AddTodo />
      <TodoFilters filter={filter} setFilter={setFilter} />
      <TodoList filter={filter} />
      <TodoStats />
    </main>
  );
}

export default App;
