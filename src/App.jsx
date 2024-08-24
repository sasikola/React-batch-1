import { Toaster } from "react-hot-toast";
import Counter from "./Components/Counter";
import ComponentA from "./Components/ComponentA";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Counter />
      <ComponentA />
    </>
  );
}

export default App;

// redux
// redux/toolkit

// 1. store
// 2. root file (index.js or App.js)
// 3. slice (reducers + actions)
// 4. import in store

// to manage the global state
// to avoid props drilling

// global states --> context api and redux
