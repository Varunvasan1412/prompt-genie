  "use client";
  import Image from "next/image";
  import React, { useEffect, useState } from "react";
  import line from "@/public/Assets/line.png";
  import MarQuee from "react-fast-marquee";

  import heroPics from "@/public/Assets/heroPics";

  type Props = {};

  const rowOneImages = [
    { url: heroPics.imageOne },
    { url: heroPics.imageTwo },
    { url: heroPics.imageThree },
    { url: heroPics.imageFour },
    { url: heroPics.imageFive },
  ];

  const rowTwoImages = [
    { url: heroPics.smOne },
    { url: heroPics.smTwo },
    { url: heroPics.smThree },
    { url: heroPics.smFour },
    { url: heroPics.smFive },
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
