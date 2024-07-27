import { chaldeanMap } from "@/lib/constant";
import { useState } from "react";

const calculateChaldean = (name: string) => {
  return name
    .toLowerCase()
    .split("")
    .filter((char) => char in chaldeanMap)
    .reduce((sum, char) => sum + chaldeanMap[char], 0);
};

const reduceToSingleDigit = (num: number): number => {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return num;
};

const NameCalculator = () => {
  const [name, setName] = useState<string>("");
  const [numerologyValue, setNumerologyValue] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    if (name.trim() === "") {
      setError("Please enter a name.");
      return;
    }

    const value = calculateChaldean(name);
    const singleDigitValue = reduceToSingleDigit(value);

    setNumerologyValue(singleDigitValue);
    setError("");
  };

  const handleReset = () => {
    setName("");
    setNumerologyValue(null);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <div className="flex-col flex">
          <label htmlFor="name" className="text-lg font-medium mb-2">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="flex mt-4 space-x-4">
            <button
              onClick={handleCalculate}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
          {numerologyValue !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Numerology Value: {numerologyValue}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameCalculator;
