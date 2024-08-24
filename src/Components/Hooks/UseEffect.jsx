import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       .then(response => response.json())
  //       .then(json => console.log(json))

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
  }, [count]);

  return (
    <div>
      <h1>Using useEffect Hook</h1>
      <p>This component will run every time the component renders.</p>
      <div className="font-extrabold text-3xl">{count} </div>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded"
        onClick={increment}
      >
        Click Me
      </button>
    </div>
  );
}

export default UseEffect;


// useReducer
// useContext
// useNavigate
// useMemo
// useCallback
// redux
// lazy loading