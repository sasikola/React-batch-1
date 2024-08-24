import { useContext } from "react";
import { counterContext } from "../../../App";

function Home() {
  const data = useContext(counterContext);

  return (
    <div>
      <h1>Home PAge</h1>
      <h1>{data} </h1>
    </div>
  );
}

export default Home;

// using props we can share the data
// 50  3 --> 36
// props drilling

// store (data)

// store --> 36
// store --> 50

// createContext
// useContext

// we have to provider using provider
