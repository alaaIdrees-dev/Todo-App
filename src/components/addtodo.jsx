import { useState } from "react";
import useTodoStore from "../store/usetodostore";

function AddTodo() {
  const [title, setTitle] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTodo(title);

    setTitle("");
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <button type="submit" className="add-todo__btn" aria-label="Add task">
        <span aria-hidden="true">+</span>
      </button>
      <input
        type="text"
        className="add-todo__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        aria-label="New task"
      />
    </form>
  );
}

export default AddTodo;
