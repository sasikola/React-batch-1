import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../Redux/counterSlice";
import { useState } from "react";

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(counter);

  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };

  const handleUpdate = () => {
    if (!isNaN(input)) {
      dispatch(incrementByAmount(input));
    }
  };
  return (
    <div>
      <h1>Counter page</h1>
      <h1>Count: {counter} </h1>
      <button onClick={Increment} className="bg-blue-500 px-2 py-1 mr-3">
        Incr
      </button>
      <button onClick={Decrement} className="bg-blue-500 px-2 py-1">
        Decr
      </button>
      <br />

      <input
        type="number"
        className="border border-gray-900 mr-2"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-2 py-1 rounded"
      >
        Update
      </button>
    </div>
  );
}

export default Counter;

// context api --> useContext
// redux --> useSelector (to read the data from redux)
// useDispach  --> to dispatch the actions
