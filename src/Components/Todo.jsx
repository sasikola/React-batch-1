import { useState } from "react";
import toast from "react-hot-toast";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      toast.error("Please enter something...");
    }

    setTodos([...todos, { id: Date.now(), newTodo }]);
    setNewTodo("");
    toast.success("Todo item added successfully!");
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    toast.success("Todo item deleted Successfully!");
  };

  const editTodo = (id) => {
    const singleTodo = todos.find((todo) => todo.id === id);
    setEditing(id);
    setEditingText(singleTodo.newTodo);
  };

  const updateTodo = () => {
    const updatedItem = todos.map((todo) =>
      todo.id === editing ? { ...todo, newTodo: editingText } : todo
    );
    setTodos(updatedItem);
    setEditing(null);

    toast.success("Todo item updated successfully!");
  };

  return (
    <>
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
                      onClick={updateTodo}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 transform hover:scale-105"
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

export default Todo;
