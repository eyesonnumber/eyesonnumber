import { chaldeanMap, numberDescriptions } from "@/lib/constant";
import { getRandomDescription } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";

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
    <div className="flex m-4  min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full">
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
            className="w-72 p-2 border border-gray-300 rounded-md"
          />
          {result.error && (
            <p className="text-red-500 text-sm mt-2">{result.error}</p>
          )}
          <div className="flex mt-4 space-x-4">
            <Button
              onClick={handleCalculate}
              className="bg-brand-600 text-brand-50 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              className="bg-brand-600 text-brand-50 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              Reset
            </Button>
          </div>
          {result.sumValue !== null && (
            <div className='flex gap-8 mt-12'>
             
              <div className="mt-4 flex flex-col w-[30%]">
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
                      <span className="text-lg mr-2">
                        {item.name}:
                      </span>
                      <span className="text-xl font-bold text-brand-500">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg ">
                    Compound Name Number:
                  </span>
                  <span className="text-lg font-semibold text-brand-600">
                    {result.sumValue}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg ">
                    Name Number/ Namank:
                  </span>
                  <span className="text-lg font-bold text-brand-500">
                    {result.singleDigitValue}
                  </span>
                </div>
              </div>
              <div className="mt-4 max-w-[50%]">
                <span className="text-lg font-semibold text-brand-500">Description:</span>
                <p className="text-md">
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
