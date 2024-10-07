"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/Assets/line.png";
import MarQuee from "react-fast-marquee";

// Import local images
import imageOne from "@/public/Assets/one.png";
import imageTwo from "@/public/Assets/two.png";
import imageThree from "@/public/Assets/three.png";
import imageFour from "@/public/Assets/four.png";
import imageFive from "@/public/Assets/five.png";

import smOne from "@/public/Assets/one-sm.png";
import smTwo from "@/public/Assets/two-sm.png";
import smThree from "@/public/Assets/three-sm.png";
import smFour from "@/public/Assets/four-sm.png";
import smFive from "@/public/Assets/five-sm.png";

type Props = {};

const rowOneImages = [
  { url: imageOne },
  { url: imageTwo },
  { url: imageThree },
  { url: imageFour },
  { url: imageFive },
];

const rowTwoImages = [
  { url: smOne },
  { url: smTwo },
  { url: smThree },
  { url: smFour },
  { url: smFive },
];

const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center">
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Make <span className="text-[#64FF4B]">Ai Image</span> <br /> With Your{" "}
          <br /> Imagination
        </h1>
        <div className="md:mt-5">
          <Image
            src={line}
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
