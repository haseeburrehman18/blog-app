"use client";

import { useState } from "react";

export default function Home() {
  let [value, setValue] = useState(0);

  let add = () => {
    if (value < 10) {
      setValue(value + 1);
      if (value + 1 === 10) {
        alert("Maximum limit reached (10)!");
      }
    } else {
      alert("You cannot go above 10!");
    }
  };

  let subtract = () => {
    if (value > 0) {
      setValue(value - 1);
      if (value - 1 === 0) {
        alert("Minimum limit reached (0)!");
      }
    } else {
      alert("You cannot go below 0!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-green-200">
      <h1 className="font-bold text-3xl text-black">Counter Program</h1>
      <h1 className="font-bold text-3xl text-black">{value}</h1>
      <div className="space-x-3.5 mt-3">
        <button
          onClick={() => add()}
          className="py-1 px-10 bg-blue-500 rounded-lg text-white cursor-pointer"
        >
          Add
        </button>
        <button
          onClick={() => subtract()}
          className="py-1 px-10 bg-blue-500 rounded-lg text-white cursor-pointer"
        >
          Subtract
        </button>
      </div>
    </div>
  );
}
