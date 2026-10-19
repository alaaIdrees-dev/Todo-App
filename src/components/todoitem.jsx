import { useState } from "react";
import { LuCheck, LuPencil, LuTrash2 } from "react-icons/lu";
import useTodoStore from "../store/usetodostore";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleSave = (event) => {
    event.preventDefault();
    if (!editTitle.trim()) return;

    updateTodo(todo.id, editTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  const handleEditKeyDown = (event) => {
    if (event.key === "Escape") handleCancel();
  };

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
        <LuCheck size={16} aria-hidden="true" />
      </button>

      {isEditing ? (
        <form className="todo__edit-form" onSubmit={handleSave}>
          <input
            autoFocus
            type="text"
            className="todo__edit-input"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
            onKeyDown={handleEditKeyDown}
            aria-label={`Edit "${todo.title}"`}
          />
          <button
            type="submit"
            className="todo__save"
            aria-label="Save"
            title="Save (Esc to cancel)"
            disabled={!editTitle.trim()}
          >
            <LuCheck size={18} aria-hidden="true" />
          </button>
        </form>
      ) : (
        <>
          <span className="todo__title">{todo.title}</span>
          <button
            type="button"
            className="todo__edit"
            aria-label={`Edit "${todo.title}"`}
            onClick={() => {
              setEditTitle(todo.title);
              setIsEditing(true);
            }}
          >
            <LuPencil size={16} aria-hidden="true" />
          </button>
        </>
      )}

      <button
        type="button"
        className="todo__remove"
        aria-label={`Delete "${todo.title}"`}
        onClick={() => removeTodo(todo.id)}
      >
        <LuTrash2 size={18} aria-hidden="true" />
      </button>
    </li>
  );
}

export default TodoItem;
