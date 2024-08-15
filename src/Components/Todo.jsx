import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), newTodo }]);
    setNewTodo("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>

        <form action="" onSubmit={addTodo}>
          <div className="flex mb-4">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Add a new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white ml-2 px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-md animate-slide-in"
            >
              <span>{todo.newTodo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
