"use client";
import React, { use, useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import ProgressBar from "../../components/ui/ProgressBar";
const stepsInformation = [
  {
    title: "What type of recording is it?",
    description: "Tell us what type of recording it is.",
    options: ["Short", "Long", "Podcast"],
  },
  {
    title: "How long is your video?",
    description: "Describes the approximate length of the video.",
    options: ["0-30 minutes", "30-60 minutes", "Over 60 minutes"],
  },
  {
    title: "What type of camera did you use?",
    description: "Describe the type of camera you used.",
    options: ["Semi-professional", "Professional", "Cell phone"],
  },
  {
    title: "What type of your audience is it?",
    description: "Tell us what type of audience you are targeting.",
    options: ["General", "Specific", "Niche"],
  },
];
export default function page() {
  const [curretStepIndex, setCurrentStepIndex] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState(
    stepsInformation[curretStepIndex]
  );
  useEffect(() => {
    if (curretStepIndex > stepsInformation.length) {
      return;
    }
    setCurrentStep(stepsInformation[curretStepIndex - 1]);
  }, [curretStepIndex]);
  const handleNextStep = () => {
    if (curretStepIndex >= stepsInformation.length) {
      return;
    }
    setCurrentStepIndex(curretStepIndex + 1);
  };
  return (
    <div className="">
      <ProgressBar steps={stepsInformation.length} progress={curretStepIndex} />
      <h1 className="text-xl font-bold my-4 text-secondary">
        {currentStep?.title}
      </h1>
      <h2 className="text-sm text-secondary mb-4">
        {currentStep?.description}
      </h2>
      {currentStep?.options.map((option, index) => (
        <div key={index} className="py-5">
          <Button onClick={handleNextStep}>{option}</Button>
        </div>
      ))}
    </div>
  );
}
