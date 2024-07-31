import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { Compare } from "../components/compare";

export default function FlipWordsDemo() {
  const words = ["Beautiful", "AI Powered", "Performant", "modern"];

  return (
    <>
      {" "}
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords words={words} /> <br />
          websites with GWSF Ventures PVT LTD.
        </div>
        <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>
    </>
  );
}
