import { Toaster } from "react-hot-toast"
import Todo from "./Components/Todo";

function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <Todo />
    </>
  );
}

export default App;
