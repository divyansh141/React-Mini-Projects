import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Demo",
      completed: false,
    }, //It is not necessary to write this demo object
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleCompleted: (id) => {},
  deleteAll: () => {},
});

export default function useTodo() {
  return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;
