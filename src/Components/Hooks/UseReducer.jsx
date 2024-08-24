import { useReducer, useState } from "react";

const initialState = {
  count: 0,
  name: "John",
  age: 30,
};
const updateCount = (state, action) => {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state .count- 1};
    default:
      return state;
  }
};

function UseReducer() {
  // const [count, setCount] = useState({
  //   count: 0,
  //   name: "John",
  //   age: 30,
  // });

  const [data, dispatch] = useReducer(updateCount, initialState);
  return (
    <div>
      <h1 className="text-2xl">{data.count} </h1>
      <h1 className="text-2xl">{data.name} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>click</button>
    </div>
  );
}

export default UseReducer;

// it is a hook to manage the state of a component
//
