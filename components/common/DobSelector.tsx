'use client'

import { useState } from "react";

const DobSelector = () => {
  const [dob, setDob] = useState<string>("");
  const [mulank, setMulank] = useState<number | null>(null);
  const [bhagyank, setBhagyank] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure the input value is formatted as DD/MM/YYYY and only numeric characters with slashes
    if (/^[0-9/]*$/.test(value) && value.length <= 10) {
      setDob(value);
      setError("");
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let value = (e.target as HTMLInputElement).value;
    // Add slashes at the appropriate positions
    if (e.key !== "Backspace") {
      if (value.length === 2 || value.length === 5) {
        value += "/";
      }
      setDob(value);
    }
  };

  const handleCalculate = () => {
    // Check if the dob is in correct format DD/MM/YYYY
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobRegex.test(dob)) {
      setError("Please enter a valid birthdate in DD/MM/YYYY format.");
      return;
    }

    const [day, month, year] = dob.split("/").map(Number);

    const calculateSum = (num: number) => {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      return sum;
    };

    const reduceToSingleDigit = (num: number) => {
      while (num > 9) {
        num = calculateSum(num);
      }
      return num;
    };

    const calculateMulank = (day: number) => reduceToSingleDigit(day);
    const calculateBhagyank = (day: number, month: number, year: number) =>
      reduceToSingleDigit(day + month + year);

    setMulank(calculateMulank(day));
    setBhagyank(calculateBhagyank(day, month, year));
    setError("");
  };

  const handleReset = () => {
    setDob("");
    setMulank(null);
    setBhagyank(null);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <div className="flex-col flex">
          <label htmlFor="bdt" className="text-lg font-medium mb-2">
            Your Birthdate:
          </label>
          <input
            type="text"
            id="bdt"
            name="bdt"
            minLength={10}
            maxLength={10}
            aria-label="bdt"
            value={dob}
            placeholder="DD/MM/YYYY"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            inputMode="numeric"
            role="presentation"
            autoComplete="off"
            onPaste={(e) => e.preventDefault()}
            onDrag={(e) => e.preventDefault()}
            onDrop={(e) => e.preventDefault()}
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
          {mulank !== null && bhagyank !== null && (
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Mulank (Psychic) Number: {mulank}
              </p>
              <p className="text-lg font-semibold">
                Bhagyank (Destiny) Number: {bhagyank}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DobSelector;
