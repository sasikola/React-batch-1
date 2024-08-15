import { useState } from "react";

function Todo1() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), newTodo }]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditing(id);
    setEditingText(todo.newTodo);
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editing ? { ...todo, newTodo: editingText } : todo
      )
    );
    setEditing(null);
    setEditingText("");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Todo App</h1>

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
              onClick={addTodo}
            >
              Add
            </button>
          </div>

          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center bg-gray-50 p-2 rounded shadow-md transform transition duration-300 ${
                  editing === todo.id ? "scale-105" : "animate-slide-in"
                }`}
              >
                {editing === todo.id ? (
                  <>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 rounded w-full mr-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 transform hover:scale-105"
                      onClick={updateTodo}
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <span>{todo.newTodo}</span>
                    <div>
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
                        onClick={() => editTodo(todo.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo1;
