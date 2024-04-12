import React, { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex justify-center items-center w-39 h-14 font-normal text-15 leading-21 text-secondary border-secondary border rounded-xl">
      {children}
    </div>
  );
}

// /* Short */

// position: absolute;
// width: 39px;
// height: 21px;
// left: calc(50% - 39px/2);
// top: calc(50% - 21px/2);

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 15px;
// line-height: 21px;
// /* identical to box height, or 140% */

// color: #171A1F;

// /* Button 11 */

// box-sizing: border-box;

// position: absolute;
// width: 388px;
// height: 59px;
// left: 15px;
// top: 293px;

// background: #FFFFFF;
// border: 1px solid #171A1F;
// border-radius: 22px;
