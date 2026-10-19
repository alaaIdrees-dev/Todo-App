import { create } from "zustand";
import { persist } from "zustand/middleware";
// import todos from "../data/tasks.js"

const usetodostore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), title, completed: false },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed }
              : todo,
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodo: (id, newTitle) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo,
          ),
        })),
    }),
    {
      name: "todo-storage",
      getStorage: () => localStorage,
    },
  ),
);

export default usetodostore;
