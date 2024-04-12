import React from "react";
type Props = {
  progress: number;
  steps: number;
};
export default function ProgressBar({ progress = 1, steps = 2 }: Props) {
  // Calculate the width of the progress bar based on the progress and steps for tailwind
  const width = `${(progress / steps) * 100}%`;
  return (
    <div className="w-full h-1.5 bg-primary-light rounded-lg">
      <div className="h-full bg-primary rounded-lg" style={{ width }} />
    </div>
  );
}
