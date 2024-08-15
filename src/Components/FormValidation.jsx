import { useState } from "react";

function FormValidation() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setInputValue(e.target.value);

    if (isNaN(value)) {
      setMessage("Please enter a valid number");
    } else if (value < 0) {
      setMessage("Please enter a positive number");
    } else if (value % 2 === 0) {
      setMessage(
        `Next 3 even number are: ${value + 2}, ${value + 4}, ${value + 6} `
      );
    } else if (value % 2 === 1) {
      setMessage(
        `Next 3 odd number are: ${value + 2}, ${value + 4}, ${value + 6} `
      );
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-gray-300 min-h-screen">
        <div className="text-center bg-white p-8 shadow-lg rounded-md">
          <input
            placeholder="Enter a number"
            className="border border-gray-400 rounded-md p-1 w-64 mb-4"
            type="text"
            name="inputValue"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="bg-blue-400 text-white p-1 ml-2 rounded-md">
            sumbit
          </button>

          <div className="text-sm text-gray-700">
            {inputValue ? message : "Enter a number"}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormValidation;
