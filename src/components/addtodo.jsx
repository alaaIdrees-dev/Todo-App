import { useState } from "react";
import { LuPlus } from "react-icons/lu";
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
    
      <input
        type="text"
        className="add-todo__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        aria-label="New task"
      />  <button type="submit" className="add-todo__btn" aria-label="Add task">
        <LuPlus size={22} aria-hidden="true" />
      </button>
    </form>
  );
}

export default AddTodo;
