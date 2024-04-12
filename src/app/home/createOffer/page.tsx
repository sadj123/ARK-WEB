import React from "react";
import Button from "../../components/ui/Button";
import ProgressBar from "../../components/ui/ProgressBar";

export default function page() {
  return (
    <div className="">
      <ProgressBar steps={4} progress={1} />
      <h1 className="text-xl font-bold my-4 text-secondary">
        What type of recording is it?
      </h1>
      <h2 className="text-sm text-secondary mb-4">
        Tell us what type of recording it is.
      </h2>
      <div className="py-5">
        <Button>Short</Button>
      </div>
      <div className="py-5">
        <Button>Medium</Button>
      </div>
      <div className="py-5">
        <Button>Long</Button>
      </div>
    </div>
  );
}
