import Image from "next/image";
import React from "react";
type Props = {
  src: string;
};
export default function Icon({ src }: Props) {
  return <Image alt="" src={src} />;
}
