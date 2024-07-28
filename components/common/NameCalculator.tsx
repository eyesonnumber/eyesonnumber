import { chaldeanMap, numberDescriptions } from "@/lib/constant";
import { getRandomDescription } from "@/lib/utils";
import { useState } from "react";

const calculateChaldean = (name: string) => {
  return name
    .toLowerCase()
    .split("")
    .filter((char) => char in chaldeanMap)
    .reduce((sum, char) => sum + chaldeanMap[char], 0);
};

const getChaldeanValues = (name: string) => {
  return name
    .toLowerCase()
    .split("")
    .filter((char) => char in chaldeanMap)
    .map((char) => ({ char, value: chaldeanMap[char] }));
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
  const [fullName, setFullName] = useState<string>("");
  const [result, setResult] = useState<{
    nameValues: {
      name: string;
      value: number;
      charValues: { char: string; value: number }[];
    }[];
    sumValue: number | null;
    singleDigitValue: number | null;
    description: string | null;
    error: string | null;
  }>({
    nameValues: [],
    sumValue: null,
    singleDigitValue: null,
    description: null,
    error: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleCalculate = () => {
    if (fullName.trim() === "") {
      setResult((prev) => ({ ...prev, error: "Please enter your full name." }));
      return;
    }

    const nameParts = fullName.trim().split(/\s+/);
    const nameValues = nameParts.map((name) => ({
      name,
      value: calculateChaldean(name),
      charValues: getChaldeanValues(name),
    }));
    const sumValue = nameValues.reduce((acc, curr) => acc + curr.value, 0);
    const singleDigitValue = reduceToSingleDigit(sumValue);
    const description = numberDescriptions[singleDigitValue]?.nameNumber
      ? getRandomDescription(numberDescriptions[singleDigitValue].nameNumber)
      : "No description available";

    setResult({
      nameValues,
      sumValue,
      singleDigitValue,
      description,
      error: null,
    });
  };

  const handleReset = () => {
    setFullName("");
    setResult({
      nameValues: [],
      sumValue: null,
      singleDigitValue: null,
      description: null,
      error: null,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <div className="flex-col flex">
          <label htmlFor="fullName" className="text-lg font-medium mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            placeholder="Enter your full name"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {result.error && (
            <p className="text-red-500 text-sm mt-2">{result.error}</p>
          )}
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
          {result.sumValue !== null && (
            <div className="mt-4">
              {result.nameValues.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex space-x-2">
                    {item.name.split("").map((char, charIndex) => (
                      <span key={charIndex} className="text-xl font-semibold">
                        {char}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {item.charValues.map((charValue, charIndex) => (
                      <span
                        key={charIndex}
                        className="text-xl font-semibold text-red-500"
                      >
                        {charValue.value}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2">
                    <span className="text-lg font-semibold">{item.name}:</span>
                    <span className="text-lg font-semibold text-red-500">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-semibold">
                  Compound Name Number:
                </span>
                <span className="text-lg font-semibold text-red-500">
                  {result.sumValue}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-semibold">
                  Name Number/ Namank:
                </span>
                <span className="text-lg font-semibold text-red-500">
                  {result.singleDigitValue}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-lg font-semibold">Description:</span>
                <p className="text-lg font-semibold text-blue-500">
                  {result.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameCalculator;
