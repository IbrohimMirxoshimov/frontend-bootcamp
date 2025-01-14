import { History, Minus, Plus, RotateCcw } from "lucide-react";
import React, { useState } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [incrementValue, setIncrementValue] = useState(1);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const addToHistory = (action) => {
    setHistory((prev) => [...prev, { action, timestamp: new Date() }]);
  };

  const handleCountChange = (value, action) => {
    const newValue = Math.max(0, Math.min(100, value));
    setCount(newValue);
    addToHistory(action);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleIncrementValueChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setIncrementValue(value);
    }
  };

  const handleInputSubmit = () => {
    const newValue = parseInt(inputValue);
    if (!isNaN(newValue)) {
      handleCountChange(newValue, `Set value to ${newValue}`);
      setInputValue("");
    }
  };

  const handleReset = () => {
    setCount(0);
    addToHistory("Reset to 0");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Advanced Counter
        </h1>

        {/* Counter Display */}
        <div className="text-6xl font-bold text-center mb-8 text-gray-800">
          {count}
        </div>

        {/* Increment Value Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Increment/Decrement Value:
          </label>
          <input
            type="number"
            min="1"
            value={incrementValue}
            onChange={handleIncrementValueChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Main Controls */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button
            onClick={() =>
              handleCountChange(
                count - incrementValue,
                `Decreased by ${incrementValue}`
              )
            }
            disabled={count < incrementValue}
            className="p-3 rounded-lg bg-red-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors flex flex-col items-center justify-center"
          >
            <Minus size={24} />
            <span className="text-sm mt-1">-{incrementValue}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-3 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center"
          >
            <RotateCcw size={24} />
          </button>

          <button
            onClick={() =>
              handleCountChange(
                count + incrementValue,
                `Increased by ${incrementValue}`
              )
            }
            disabled={count + incrementValue > 100}
            className="p-3 rounded-lg bg-green-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors flex flex-col items-center justify-center"
          >
            <Plus size={24} />
            <span className="text-sm mt-1">+{incrementValue}</span>
          </button>
        </div>

        {/* Custom Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter value (0-100)"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleInputSubmit}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Set
          </button>
        </div>

        {/* History Toggle */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full p-3 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
        >
          <History size={20} />
          {showHistory ? "Hide History" : "Show History"}
        </button>

        {/* History Log */}
        {showHistory && (
          <div className="mt-6 max-h-48 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              History
            </h2>
            <div className="space-y-2">
              {history
                .slice()
                .reverse()
                .map((entry, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-600 bg-gray-50 p-2 rounded"
                  >
                    {entry.action} - {entry.timestamp.toLocaleTimeString()}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdvancedCounter;
