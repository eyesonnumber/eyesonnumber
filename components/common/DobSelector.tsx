import { numberDescriptions } from "@/lib/constant";
import { getRandomDescription } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";

const DobSelector = () => {
  const [dob, setDob] = useState<string>("");
  const [result, setResult] = useState<{
    mulank: number | null;
    bhagyank: number | null;
    mulankDescription: string | null;
    bhagyankDescription: string | null;
    error: string | null;
  }>({
    mulank: null,
    bhagyank: null,
    mulankDescription: null,
    bhagyankDescription: null,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9/]*$/.test(value) && value.length <= 10) {
      setDob(value);
      setResult((prev) => ({ ...prev, error: null }));
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let value = (e.target as HTMLInputElement).value;
    if (e.key !== "Backspace") {
      if (value.length === 2 || value.length === 5) {
        value += "/";
      }
      setDob(value);
    }
  };

  const handleCalculate = () => {
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobRegex.test(dob)) {
      setResult((prev) => ({
        ...prev,
        error: "Please enter a valid birthdate in DD/MM/YYYY format.",
      }));
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

    const mulank = reduceToSingleDigit(day);
    const bhagyank = reduceToSingleDigit(day + month + year);

    const mulankDescription = getRandomDescription(
      numberDescriptions[mulank].psychic
    );
    const bhagyankDescription = getRandomDescription(
      numberDescriptions[bhagyank].destiny
    );

    setResult({
      mulank,
      bhagyank,
      mulankDescription,
      bhagyankDescription,
      error: null,
    });
  };

  const handleReset = () => {
    setDob("");
    setResult({
      mulank: null,
      bhagyank: null,
      mulankDescription: null,
      bhagyankDescription: null,
      error: null,
    });
  };

  return (
    <div className="flex w-full justify-center min-h-screen bg-gray-100 m-4">
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex-col flex">
          <label htmlFor="bdt" className="text-2xl font-bold mb-2  ">
            Enter Your Birthdate:
          </label>
          <text className="text-brand-700 text-sm mb-4 max-w-[30dvw]">
            Enter your date of birth to know about your natal numbers, planets
            and significant details about your life path and destiny
          </text>
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
            className="w-72 p-2 border border-gray-300 rounded-md focus:border-brand-500 focus:outline-none"
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
          {result.mulank !== null && result.bhagyank !== null && (
            <div className="mt-16 justify-center">
              <div className="flex gap-4">
                <text className="text-xl">Mulank (Psychic) Number:</text>
                <text className="font-bold text-xl text-brand-400">
                  {result.mulank}
                </text>
              </div>
              <div className="flex gap-4">
                <text className="text-xl">Bhagyank (Destiny) Number: </text>
                <text className="font-bold text-xl text-brand-500">
                  {result.bhagyank}
                </text>
              </div>

              <div className="flex mt-16 gap-16 w-[80dvw] relative ">
                <div className="max-w-[50%]">
                  {" "}
                  <p className="text-lg font-bold text-brand-400">
                    Mulank ({result.mulank})
                  </p>
                  <p className="text-md text-md">{result.mulankDescription}</p>
                </div>
                <div className="max-w-[50%]">
                  {" "}
                  <p className="text-lg font-semibold text-brand-500">
                    Bhagyank ({result.bhagyank})
                  </p>
                  <p className="text-md text-md">
                    {result.bhagyankDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DobSelector;
