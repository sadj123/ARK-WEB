import React from "react";
import chevron from "../../../icons/chevron-left.svg";
import Icon from "../../components/ui/Icon";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white h-screen px-4">
      {/* grid with a back button */}
      <div className="flex py-6">
        <div className="flex-1 flex items-center justify-start">
          <Icon src={chevron} />
          <button className="text-primary font-bold ml-2">Back</button>
        </div>
        <div className="flex justify-center flex-2 text-secondary text-base">
          Describe your service
        </div>
        <div className="flex-1 items-center justify-end"></div>
      </div>
      {children}
    </div>
  );
}
