import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <div className="flex justify-center ">
        <input
          className="border border-gray-900 mt-2"
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div
        className={`flex justify-center mt-3 ${
          !theme ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1 className="text-3xl">The number is: {doubleNumber}</h1>
      </div>

      <div className="flex justify-center mt-3 ">
        <button
          onClick={() => setTheme(!theme)}
          className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800"
        >
          {theme ? "Light" : "Dark"}
        </button>
      </div>
    </>
  );
}

const slowFunction = (number) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log("Slow function is running....");
  return number * 2;
};

export default UseMemo;

// cache memory -> store







// outerFunc(){
//   let x = 10;
//   innerFunc(){
//     console.log(x)
//   }
// }