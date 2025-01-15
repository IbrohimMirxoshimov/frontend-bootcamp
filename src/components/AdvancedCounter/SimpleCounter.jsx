import React, { useState } from "react";
import "./style/index.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Simple Counter
        </h1>

        <button
          className="border"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div className="border">{counter}</div>
        <button
          className="border"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>

        <div>
          <input
            value={inputValue}
            type="number"
            className="border border-neutral-900"
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
            }}
          />
          <button
            className="border border-neutral-900"
            onClick={() => {
              setInputValue("");
              setCounter(parseInt(inputValue));
            }}
          >
            set
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
