import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function UseState() {
  //   const [initialState, setInitialState] = useState(0);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.password === "") {
      toast.error("Please enter password");
    } else if (input.email === "") {
      toast.error("Please enter email");
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        {/* <h1> {initialState}</h1>
        <div>
          <button
            onClick={() => setInitialState(initialState + 4)}
            className="bg-blue-500 px-2 rounded text-white mr-2"
          >
            incr
          </button>
          <button
            onClick={() => setInitialState(initialState - 2)}
            className="bg-blue-500 px-2 rounded text-white"
          >
            decr
          </button>
        </div> */}

        <div className="flex items-center justify-center min-h-screen bg-slate-300 ">
          <div className="w-full max-w-lg bg-white shadow-lg p-8 rounded-lg space-y-5">
            <h2 className="text-2xl font-bold text-gray-900">Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full px-3 py-1 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md"
                  type="email"
                  placeholder="Enter email id"
                  onChange={handleChange}
                  value={input.email}
                  name="email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mt-3"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    className="w-full px-3 py-1 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={handleChange}
                    value={input.password}
                    name="password"
                  />
                  <button
                    className="absolute right-0 flex items-center px-3 -mt-6"
                    onClick={togglePassword}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 font-semibold bg-blue-500 text-white mt-2 rounded-md"
              >
                Login
              </button>
              {/* <input type="submit" value={"Login"} /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseState;


